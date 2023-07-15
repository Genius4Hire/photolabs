
import React from 'react';
//import { useState } from 'react';

////////////// Styling /////////////////
import '../styles/PhotoListItem.scss';

///////////// Components ///////////////
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div className={"photo-list__item"} >
      <h3 className={"photo-list__user-location"}>{props.photo.location.city}, {props.photo.location.country}</h3>
      <PhotoFavButton />
      <a href={props.photo.urls.full}>
        <img
          className="photo-list__image"
          src={props.photo.urls.regular}
        ></img>
      </a>
      <p className="photo-list__user-profile">
        <div className="photo-list__user-info">
          Credit: @{props.photo.user.username}
          <a className="photo-list__user-info" href={props.photo.user.profile}>🔗</a>
        </div>
        <div className="photo-list__user-info">
        </div>
      </p>
    </div>
  );
};

// PhotoListItem.defaultProps = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   "username": "Joe Example",
//   "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
// };

export default PhotoListItem;