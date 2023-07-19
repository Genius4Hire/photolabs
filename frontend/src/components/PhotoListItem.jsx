
import React from 'react';
//import { useState } from 'react';

////////////// Styling /////////////////
import '../styles/PhotoListItem.scss';

///////////// Components ///////////////
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import PhotoFavButton from '../components/PhotoFavButton';


const PhotoListItem = (props) => {
  
  const modalToggleHandler = () => {
    console.log("Viewing photo:", props.photo);
    props.modalToggler(props.photo);
  };

  return (
    <div>
      <div className={"photo-list__item"} >
        <PhotoFavButton
          photo={props.photo}
          searchForFavs={props.searchForFavs}
          likeToggler={props.likeToggler}
        />
        <img onClick={modalToggleHandler} className="photo-list__image" src={props.photo.urls.regular}></img>
        <div className="photo-list__user-info">
          <img className="photo-list__user-profile" src={props.photo.user.profile}></img>
          <div>
            <div>
              {props.photo.user.name}
            </div>
            <div className={"photo-list__user-location"}>
              {props.photo.location.city}, {props.photo.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;