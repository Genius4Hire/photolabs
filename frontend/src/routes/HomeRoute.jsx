import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div>
      < TopNavigation
        topics={props.topics}
        searchForFavs={props.searchForFavs}
      />
      < PhotoList
        photos={props.photos}
        searchForFavs={props.searchForFavs}
        likeToggler={props.likeToggler}
        modalToggler={props.modalToggler}
      />

    </div>
  );
};

export default HomeRoute;