
import React from 'react';
//import { useState } from 'react';

////////////// Styling /////////////////
import '../styles/PhotoListItem.scss';

///////////// Components ///////////////
import PhotoFavButton from '../components/PhotoFavButton';

// props
// key={index}
// photo={photo} from map
// searchForFavs={props.searchForFavs}
// likeToggler={props.likeToggler}

const PhotoListItem = (props) => {

  return (
    <div className={"photo-list__item"} >
      <h3 className={"photo-list__user-location"}>{props.photo.location.city}, {props.photo.location.country}</h3>
      <PhotoFavButton
        photo={props.photo}
        searchForFavs={props.searchForFavs}
        likeToggler={props.likeToggler}
      />
      <a href={props.photo.urls.full}>
        <img
          className="photo-list__image"
          src={props.photo.urls.regular}
        ></img>
      </a>
      <div className="photo-list__user-profile">
        <div className="photo-list__user-info">
          Credit: @{props.photo.user.username}
          <a className="photo-list__user-info" href={props.photo.user.profile}>🔗</a>
        </div>
        <div className="photo-list__user-info">
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;