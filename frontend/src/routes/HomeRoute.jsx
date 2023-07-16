import React from 'react';
import {useState} from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import photos from "../mocks/photos";
import topics from "../mocks/topics";


import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [mockPhotos, setMockPhotos] = useState(photos);
  const [mockTopics, setMockTopics] = useState(topics);

  return (
    <div>
      < TopNavigation mockTopics={mockTopics}/>
      < PhotoList mockPhotos={mockPhotos}/>
    </div>
  );
};

export default HomeRoute;