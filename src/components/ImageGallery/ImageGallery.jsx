import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImagesGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.imageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}
