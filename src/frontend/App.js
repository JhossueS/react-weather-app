import React from 'react';
import InfoWeather from './components/InfoWeather';
import AnotherDay from './components/AnotherDay';

import './assets/styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <InfoWeather />
      <div className='App_nextDay__container'>
        <AnotherDay />
        <AnotherDay />
        <AnotherDay />
        <AnotherDay />
        <AnotherDay />
        <AnotherDay />
      </div>
    </div>
  );
};

export default App;
