import css from './ImageGallery.module.css';
import { Component } from 'react';

export class ImagesGallery extends Component {
  state = {
    searchValue: '',
    images: [],
  };

  render() {
    const { images } = this.props;
    return (
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li className={css.imageGalleryItem} key={id}>
            <img
              className={css.imageGalleryItem_image}
              src={webformatURL}
              alt={id}
            />
          </li>
        ))}
      </ul>
    );
  }
}
