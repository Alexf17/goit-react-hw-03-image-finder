import { API } from 'components/API/API';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Wrap } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    respons: [],
    total: null,
    isLoading: false,
  };

  onSubmit = query => {
    this.setState({
      query: query,
      isLoading: true,
      currentPage: 1,
      respons: [],
    });
  };

  responsAPI = respons => {
    const { hits, totalHits } = respons;
    this.setState(prevState => ({
      respons: [...prevState.respons, ...hits],
      total: +totalHits,
      isLoading: false,
    }));
    if (!totalHits) {
      toast.info('🟡 Sorry , но по Вашему запросу нет картинок ')
    }
    if (totalHits > 0) {
      toast.info(`🟢 Yes , по Вашему запросу найдено ${totalHits} изображений`)
    }
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <Wrap>
        <ToastContainer/>
        <Searchbar props={this.onSubmit} />
        <API
          dataQuery={this.state.query}
          dataPage={this.state.currentPage}
          request={this.responsAPI}
        />
        <ImageGallery dataResponse={this.state.respons} />
        {this.state.total > this.state.respons.length && (
          <Button onLoadMore={this.onLoadMoreButton} />
        )}

        {this.state.isLoading && <Loader />}
      </Wrap>
    );
  }
}
