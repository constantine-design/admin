import React, { useEffect } from 'react';
import ImageList from "@material-ui/core/ImageList";
import { setAlbums, setLastPhotos } from '../../store/actions';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import AlbumCurrentImgItem from "./AlbumCurrentImgItem"

const AlbumCurrent = (props) => {

    const { id } = useParams();
    useEffect(() => {
      if (!props.albums) props.setAlbums();
      props.setLastPhotos(id);
    }, []);
    const albumTitleInAlbums = (id) => {
      if (props.albums) return props.albums.find(album=>album.id==id).title ;
    }

    return (
        <div align="center">
          <h1 className="album-title">Album: {albumTitleInAlbums(id)}</h1>
          <ImageList sx={{ width: 150, height: 150 }} cols={8} rowHeight={150}>
          { props.lastPhotos.length>0 &&
            props.lastPhotos.map((img) =>
              (img.albumId==id) ? <AlbumCurrentImgItem img={img} key={img.id} /> : ""
          )}
        </ImageList>
        </ div>
    );
}

const mapStateToProps = (state) => ({
    albums: state.albums.albums,
    lastPhotos: state.albums.lastPhotos,
})
const mapDispatchToProps = {
  setAlbums, setLastPhotos
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumCurrent);
