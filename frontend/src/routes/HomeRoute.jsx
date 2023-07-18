import React from 'react';
import {useState} from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import mockPhotos from "../mocks/photos";
import mockTopics from "../mocks/topics";

import '../styles/HomeRoute.scss';

// props
// photos={mockPhotos}
// favInc={favInc}

const HomeRoute = () => {
  const [photos, setPhotos] = useState(mockPhotos);
  const [topics, setTopics] = useState(mockTopics);
  const [favedPhotos, setFavedPhotos] = useState([]);
    
  const searchForFavs = (photo) => {
    if (photo !== undefined) {
      return favedPhotos.includes(photo);
    } else {
      return (favedPhotos.length > 0) ? true : false;
    }
  };
  
  const addFave = (photo) => {
    const newList = [
      ...favedPhotos,
      photo
    ];
    setFavedPhotos(newList);
  };
  
  const delFave = (photo) => {
    const newList = favedPhotos.filter((element) => {
      return (element !== photo);
    });
    setFavedPhotos(newList);
  };

  const likeToggler = (photo) => {
    if (searchForFavs(photo)) {
      delFave(photo);
    } else {
      addFave(photo);
    }
  };


  return (
    <div>
      < TopNavigation
        topics={mockTopics}
        searchForFavs={searchForFavs}
      />
      < PhotoList
        photos={mockPhotos}
        searchForFavs={searchForFavs}
        likeToggler={likeToggler}
      />
    </div>
  );
};

export default HomeRoute;