import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';
import FavBadge from './FavBadge';



const TopNavigation = (props) => {

  const topicResetHandler = () => {
    props.newTopic(null);
  };

  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={topicResetHandler}
      >PhotoLabs</span>
      < TopicList
        topics={props.topics}
        newTopic={props.newTopic}
      />
      < FavBadge
        favedPhotos={props.favedPhotos}
      />
    </div>
  );
};

export default TopNavigation;