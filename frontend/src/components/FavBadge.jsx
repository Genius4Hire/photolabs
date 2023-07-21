import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = (props) => {

  return (
    <div className='fav-badge'>
      <FavIcon
        width={20}
        height={17}
        fill="#e90d0d"
        displayAlert={props.favedPhotos.length !== 0 ? true : false }
      />
    </div>
  );
};

export default FavBadge;