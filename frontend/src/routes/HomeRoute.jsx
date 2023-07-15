import React from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';


const HomeRoute = () => {
  return (
    <div>
      < TopNavigation />
      < PhotoList />
      < PhotoList />
      < PhotoList />
      < PhotoList />
    </div>
  );
};

export default HomeRoute;