import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageGalleryImg, ImageGalleryLi } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    visible: false,
  };

  VisibleToggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  onButtonClk = () => {};

  render() {
    const { url, alt, img } = this.props;
    return (
      <>
        <ImageGalleryLi>
          <ImageGalleryImg onClick={this.VisibleToggle} src={url} alt={alt} />
        </ImageGalleryLi>
        {this.state.visible && (
          <Modal onClick={this.VisibleToggle} img={img} alt={alt} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
