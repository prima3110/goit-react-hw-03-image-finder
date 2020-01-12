import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, onClickImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          item={item}
          onClickImage={onClickImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
