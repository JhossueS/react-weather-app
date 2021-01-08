import React from 'react';
import InfoWeather from './components/InfoWeather';
import AnotherDay from './components/AnotherDay';
import Highlights from './components/Highlights';

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
      <div className='App_title__container'>
        <h2>Today&apos;s Highlights</h2>
      </div>
      <div className='App_today_highlights'>
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
      </div>
    </div>
  );
};

export default App;
