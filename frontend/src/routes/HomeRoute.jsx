import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div>
      < TopNavigation
        topics={props.topics}
        newTopic={props.newTopic}
        favedPhotos={props.favedPhotos}
      />
      < PhotoList
        photos={props.photos}
        favedPhotos={props.favedPhotos}
        likeToggler={props.likeToggler}
        modalToggler={props.modalToggler}
      />

    </div>
  );
};

export default HomeRoute;