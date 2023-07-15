import React, { useState } from 'react';

////////////// Styling /////////////////
import '../styles/PhotoFavButton.scss';

///////////// Components ///////////////
import FavIcon from '../components/FavIcon';


const PhotoFavButton = (props) => {

  const [liked, setLiked] = useState(false);

  const likeClickHandler = () => {
    setLiked(!liked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={likeClickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          fill={liked ? '#db0d0d' : '#EEEEEE'}
          width={20}
          height={17}
        />
      </div>
    </div>
  );

};

export default PhotoFavButton;