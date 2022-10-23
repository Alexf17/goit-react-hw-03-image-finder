import { fetch } from 'API/API';
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
    errorMessage: '',
  };

  onSubmit = query => {
    this.setState({
      query: query,
      currentPage: 1,
      respons: [],
    });
  };

  getImage = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const images = await fetch(query, page);

      if (!images.totalHits) {
        return toast.error('🟡 Sorry , но по Вашему запросу нет картинок ');
      } else {
        this.setState(prevState => ({
          respons: [...prevState.respons, ...images.hits],
          total: images.totalHits,
        }));
      }
    } catch {
      this.setState({
        errorMessage: 'Что то пошло не так 💔, уже работаем над этим',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.query !== this.state.query
    ) {
      this.getImage(this.state.query, this.state.currentPage);
    }
  }

  render() {
    return (
      <Wrap>
        <ToastContainer />
        <Searchbar props={this.onSubmit} />
        {/* <API
          dataQuery={this.state.query}
          dataPage={this.state.currentPage}
          request={this.responsAPI}
        /> */}
        <ImageGallery dataResponse={this.state.respons} />
        {this.state.total > this.state.respons.length && (
          <Button onLoadMore={this.onLoadMoreButton} />
        )}

        {this.state.isLoading && <Loader />}
      </Wrap>
    );
  }
}
