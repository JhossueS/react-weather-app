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
      <div className='App_about__container'>

        <div className='App_about__container-contact'>
          <span className='about-title'>
            Contact:
            {'  '}
          </span>
          <span> jhossue.d.sacnhez@gmail.com</span>
        </div>
        <div className='App_about__container-link'>
          <span className='about-title'>
            design and challenge at:
            {'  '}
          </span>
          <a
            href='https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv'
            target='_blank'
            className='link'
          >
            devchallenges.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
