import css from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    window.addEventListener('mousedown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    window.removeEventListener('mousedown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (code === 'Escape' || target === currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { largeImage, alt, id } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img
            width="800"
            height="600"
            src={largeImage}
            alt={alt}
            id={id}
            onClick={this.closeModal}
          />
        </div>
      </div>
    );
  }
}
