import React, { useState } from 'react';

////////////// Styling /////////////////
import '../styles/PhotoFavButton.scss';

///////////// Components ///////////////
import FavIcon from '../components/FavIcon';


const PhotoFavButton = () => {

  const [liked, setLiked] = useState(false);

  const likeClickHandler = () => {
    setLiked(!liked);
  };

  // const classModifier = liked  ?  'photo-list__fav-icon-svg' : 'photo-list__fav-icon';
  // const classModifier = "photo-list__fav-icon";

  return (
    <div className={'photo-list__fav-icon'} onClick={likeClickHandler}>
      <div className={'photo-list__fav-icon-svg'}>
        <FavIcon
          // className={classModifier}
          liked={liked}
          width={20}
          height={17}
        />
        {/* {classModifier} */}
      </div>
    </div>
  );
};

export default PhotoFavButton;