import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryWrap } from './ImageGallery.styled'



export const ImageGallery = ({dataResponse}) => {
    return (
        <ImageGalleryWrap>
            {dataResponse.map(({id,webformatURL,largeImageURL,tag }) => (
                <ImageGalleryItem key={id} url={webformatURL} img={largeImageURL} alt={tag} />
            ))}
  
        </ImageGalleryWrap>
    )
    
}
