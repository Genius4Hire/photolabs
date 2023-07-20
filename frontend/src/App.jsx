import React from 'react';

// Hooks and Helpers
import useApplicationData from './hooks/useApplication';

// components
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

const App = () => {

  //import hooks
  const { state, modalToggler, favToggler, onCloseModal } = useApplicationData();
  const { photos, topics, favedPhotos, modalActive, selectedPhoto} = state;

  return (
    <div className="App">
      < HomeRoute
        photos={photos}
        topics={topics}

        modalToggler={modalToggler}
        likeToggler={favToggler}
        favedPhotos={favedPhotos}
        // searchForFavs={searchForFavs}

      />
      {modalActive &&
        <PhotoDetailsModal
          photo={selectedPhoto}
          modalToggler={modalToggler}
          likeToggler={favToggler}
          favedPhotos={favedPhotos}
          onCloseModal={onCloseModal}
          // searchForFavs={searchForFavs}
        />
      }
    </div>
  );
};

export default App;