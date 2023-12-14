import React from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images && images.map(item => {
        const { id, webformatURL, largeImageURL, tags } = item;
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            largeImage={largeImageURL}
            tags={tags}
          />
        );
      })}
    </Gallery>
  );
};

export default ImageGallery;