import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item: { webformatURL, id }, onClickImage }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onClickImage(id)}
      role="presentation"
    >
      <img
        id={id}
        src={webformatURL}
        alt="img"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
