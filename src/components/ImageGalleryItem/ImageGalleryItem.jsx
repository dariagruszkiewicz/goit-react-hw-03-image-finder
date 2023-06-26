import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
    id: '',
  };

  showModal = id => {
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
              alt={id}
              onClick={this.showModal}
            />
            {isShowModal && (
              <Modal
                largeImage={largeImageURL}
                alt={tags}
                onClick={this.hideModal}
              />
            )}
          </li>
        ))}
      </>
    );
  }
}
