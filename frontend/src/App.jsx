import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

const photoList = (
  <div>
    <PhotoListItem />
    <PhotoListItem />
    <PhotoListItem />
  </div>
);


// Note: Rendering a single
// component to build components
// in isolation
const App = () => (
  <div className="App">
    {photoList}

    < PhotoList />
  </div>
);

export default App;