import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.imageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};
