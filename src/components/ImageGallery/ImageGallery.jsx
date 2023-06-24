import css from './ImageGallery.module.css';

export const ImagesGallery = ({ images }) => {
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
};
