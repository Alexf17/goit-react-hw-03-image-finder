import { Component } from 'react'
import { Modal } from '../Modal/Modal'
import {ImageGalleryImg, ImageGalleryLi} from './ImageGalleryItem.styled'

export class ImageGalleryItem extends Component{

    state = {
        visible : false
    }

    VisibleToggle = () => {
     this.setState(prevState => ({visible : !prevState.visible}))
    }

    onButtonClk = () => {
        
    }

    render() {
    return (
    <>
        <ImageGalleryLi >
  <ImageGalleryImg onClick={this.VisibleToggle} src={this.props.url} alt={this.props.alt} />
            </ImageGalleryLi>
            {this.state.visible && <Modal onClick={this.VisibleToggle} img={this.props.img} alt={this.props.alt} />}
        
     </>
    )
    }




} 