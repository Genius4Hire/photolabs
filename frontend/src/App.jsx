import React from 'react';
import { useState, useEffect } from 'react';

// Hooks and Helpers
import useApplicationData from './hooks/useApplication';

// components
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

const App = () => {

  //import hooks
  const { state, modalToggler, favToggler, onCloseModal, newTopic} = useApplicationData();
  const { photos, topics, favedPhotos, modalActive, modalPhoto, currentTopic } = state;

  return (
    <div className="App">
      < HomeRoute
        photos={photos}
        topics={topics}
        currentTopic={currentTopic}
        newTopic={newTopic}
        modalToggler={modalToggler}
        likeToggler={favToggler}
        favedPhotos={favedPhotos}

      />
      {modalActive &&
        <PhotoDetailsModal
          photo={modalPhoto}
          modalToggler={modalToggler}
          onCloseModal={onCloseModal}
          likeToggler={favToggler}
          favedPhotos={favedPhotos}
        />
      }
    </div>
  );
};

export default App;