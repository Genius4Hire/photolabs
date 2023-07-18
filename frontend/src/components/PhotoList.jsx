import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

// props
// photos={mockPhotos}
// searchForFavs={searchForFavs}
// likeToggler={likeToggler}


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) =>
        <PhotoListItem
          key={index}
          photo={photo}
          searchForFavs={props.searchForFavs}
          likeToggler={props.likeToggler}
        />
      )}
    </ul>
  );
};

export default PhotoList;