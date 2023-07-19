import React from 'react';

////////////// Styling /////////////////
import '../styles/PhotoFavButton.scss';

///////////// Components ///////////////
import FavIcon from '../components/FavIcon';


const PhotoFavButton = (props) => {
  
  const toggler = () => {
    props.likeToggler(props.photo);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          isLiked={props.searchForFavs(props.photo)}
          width={20}
          height={17}
        />
      </div>
    </div>
  );

};

export default PhotoFavButton;