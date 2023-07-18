import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// props
// searchForFavs={props.searchForFavs}

export const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon
        width={20}
        height={17}
        fill="#C80000"
        displayAlert={props.searchForFavs()}
      />
    </div>
  );
};

export default FavBadge;