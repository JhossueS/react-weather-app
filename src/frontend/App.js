import React from 'react';
import Home from './pages/Home';
import { HomeProvider } from './Context/HomeProvider';

import './assets/styles/App.scss';
import './assets/styles/mediaQuerys.scss';

const App = () => (
  <HomeProvider>
    <Home />
  </HomeProvider>
)




export default App;
