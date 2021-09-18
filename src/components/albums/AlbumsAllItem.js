import Button from "@material-ui/core/Button";
import React from 'react';

const AlbumsAllItem = (props) => {

  return (
    <div className="album-item">
      <Button
        className="album-button"
        variant="text"
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </div>
  );
}

export default AlbumsAllItem;
