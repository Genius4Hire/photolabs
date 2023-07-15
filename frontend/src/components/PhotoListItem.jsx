
import React from 'react';
//import { useState } from 'react';

////////////// Styling /////////////////
import '../styles/PhotoListItem.scss';
import '../styles/PhotoList.scss';

///////////// Components ///////////////
import PhotoFavButton from '../components/PhotoFavButton';


const PhotoListItem = (props) => {
  return (
    <div className={"photo-list__item"} key="props.id">
      {/* <h3>{props.location.city}, {props.location.country}</h3> */}
      <img
        className="photo-list__image"
        src={props.imageSource}
      ></img>
      <PhotoFavButton />
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;