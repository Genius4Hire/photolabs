import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) =>
        <PhotoListItem
          key={index}
          photo={photo}
          favedPhotos={props.favedPhotos}
          likeToggler={props.likeToggler}
          modalToggler={props.modalToggler}
        />
      )}
    </ul>
  );
};

export default PhotoList;