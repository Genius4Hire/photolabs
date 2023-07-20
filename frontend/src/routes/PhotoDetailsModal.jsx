import React from 'react';

import '../styles/PhotoDetailsModal.scss';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {

  const closeModal = () => {
    console.log("Closing modal..");
    props.onCloseModal();
  };

  console.log(props.photo);

  return (
    <div className='photo-details-modal'>
      <div>
        <button className='photo-details-modal__close-button' onClick={closeModal}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_428_287)">
              <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <PhotoFavButton
        photo={props.photo}
        favedPhotos={props.favedPhotos}
        likeToggler={props.likeToggler}
      />
      <img className="photo-details-modal__image" src={props.photo.urls.full}></img>
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
      <div className='photo-details-modal__header'>Similar Photos</div>
      <div className='photo-details-modal__images'>
        <PhotoList
          photos={Object.values(props.photo.similarPhotos)}
          likeToggler={props.likeToggler}
          modalToggler={() => {}}
          favedPhotos={props.favedPhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;