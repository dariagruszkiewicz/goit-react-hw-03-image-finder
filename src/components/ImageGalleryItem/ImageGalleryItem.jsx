import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
    id: '',
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { images } = this.props;
    const { isShowModal } = this.state;
    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <li className={css.imageGalleryItem} key={id}>
            <img
              className={css.imageGalleryItem_image}
              src={webformatURL}
              alt={tags}
              onClick={this.showModal}
            />
            {isShowModal && (
              <Modal largeImage={largeImageURL} onClick={this.hideModal} />
            )}
          </li>
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
