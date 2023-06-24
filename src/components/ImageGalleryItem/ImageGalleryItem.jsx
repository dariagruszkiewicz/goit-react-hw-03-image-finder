import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li className={css.imageGalleryItem} key={id}>
          <img
            className={css.imageGalleryItem_image}
            src={webformatURL}
            alt={id}
          />
        </li>
      ))}
    </>
  );
};
