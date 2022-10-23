import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrap } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ dataResponse }) => {
  return (
    <ImageGalleryWrap>
      {dataResponse.map(({ id, webformatURL, largeImageURL, tag }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          img={largeImageURL}
          alt={tag}
        />
      ))}
    </ImageGalleryWrap>
  );
};

ImageGallery.propTypes = {
  dataResponse: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
