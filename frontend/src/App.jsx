import React from 'react';
import { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import mockPhotos from "./mocks/photos";
import mockTopics from "./mocks/topics";

import './App.scss';

const App = () => {
  const [photos, setPhotos] = useState(mockPhotos);
  const [topics, setTopics] = useState(mockTopics);
  const [favedPhotos, setFavedPhotos] = useState([]);
  const [modalToggle, setModalToggle] = useState(null);

  const modalToggler = (photo) => {
    if (photo === undefined)
      return modalToggle;
    if (photo !== null) {
      setModalToggle(photo);
      return true; // return pre-state
    } else {
      setModalToggle(null);
      return false; // return pre-state
    }
  };
  
  const searchForFavs = (photo) => {

    if (photo !== undefined) {
      return favedPhotos.includes(photo);
    } else {
      return (favedPhotos.length === 0) ? false : true;
    }
  };
  
  const addFave = (photo) => {
    const newList = [
      ...favedPhotos,
      photo
    ];
    // console.log("Faving: ", photo.id);
    setFavedPhotos(newList);
  };
  
  const delFave = (photo) => {
    const newList = favedPhotos.filter((element) => {
      return (element !== photo);
    });
    // console.log("Unfaving: ", photo.id);
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
    <div className="App">
      < HomeRoute
        photos={photos}
        topics={topics}
        modalToggler={modalToggler}
        likeToggler={likeToggler}
        searchForFavs={searchForFavs}

      />
      {modalToggler() &&
        <PhotoDetailsModal
          photo={modalToggle}
          modalToggler={modalToggler}
          likeToggler={likeToggler}
          searchForFavs={searchForFavs}
        />
      }
    </div>
  );
};

export default App;