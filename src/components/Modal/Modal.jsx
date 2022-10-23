import { Component } from 'react';
import { ModalWindow, ModalOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.EscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.EscClick);
  }

  EscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  BackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { img, alt } = this.props;
    return (
      <ModalOverlay onClick={this.BackdropClick}>
        <ModalWindow>
          <img src={img} alt={alt} />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  BackdropClick: PropTypes.func.isRequired,
};
