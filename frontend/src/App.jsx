import React from 'react';

// Hooks and Helpers
import useApplicationData from './hooks/useApplication';

// components
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

const App = () => {
  
  //import hooks
  const { state, helpers } = useApplicationData();

  // bust out states, and helpers
  const [photos, topics, favedPhotos, modalToggle] = state;
  const [modalToggler, favToggler, searchForFavs,] = helpers;

  return (
    <div className="App">
      < HomeRoute
        photos={photos}
        topics={topics}
        modalToggler={modalToggler}
        likeToggler={favToggler}
        searchForFavs={searchForFavs}

      />
      {modalToggler() &&
        <PhotoDetailsModal
          photo={modalToggle}
          modalToggler={modalToggler}
          likeToggler={favToggler}
          searchForFavs={searchForFavs}
        />
      }
    </div>
  );
};

export default App;