import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

// props
// topics={mockTopics}
// searchForFavs={searchForFavs}

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList
        topics={props.topics}
      />
      < FavBadge
        favedPhotos={props.favedPhotos}
      />
    </div>
  );
};

export default TopNavigation;