import ImageListItem from "@material-ui/core/ImageListItem";
import React from 'react';

const AlbumCurrentImgItem = ({img}) => {

  return (
    <ImageListItem>
      <img
        src={img.thumbnailUrl}
        alt={img.title}
      />
    </ImageListItem>
  );
}

export default AlbumCurrentImgItem;
