import React, { useState } from 'react';
import InfoWeather from './components/InfoWeather';
import AnotherDay from './components/AnotherDay';
import Highlights from './components/Highlights';
import ChangeGrades from './components/ChangeGrades';
import AboutProject from './components/AboutProject';

import './assets/styles/App.scss';
import './assets/styles/mediaQuerys.scss';
import Menu from './components/Menu';

const App = () => {
  //handle state and menu
  const [menu, setMenu] = useState(true);

  const handleActiveMenu = () => {
    setMenu(false);
    document.body.classList.add('isactive');
  };

  const handleDisableMenu = () => {
    setMenu(true);
    document.body.classList.remove('isactive');
  };

  // search location

  const locactionData = [
    { locaction: 'Cuba' },
    { locaction: 'Madrid' },
    { locaction: 'Venezuela' },
  ];

  const [searchLocaction, setSearchLocaction] = useState(locactionData);

  const onSearchLocaction = (newLocaction) => {
    setSearchLocaction([...searchLocaction, newLocaction]);
    console.log(newLocaction);
    setMenu(true);
  };

  console.log(searchLocaction);
  return (
    <div className='App'>
      {
        menu ?
          <InfoWeather handleActiveMenu={handleActiveMenu} /> :
          <Menu handleDisableMenu={handleDisableMenu} searchLocaction={onSearchLocaction} />
      }
      <div className='App__container'>
        <ChangeGrades />
        <div className='App_nextDay__container'>
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
          <Highlights
            additionalItem
            title='Wind Status'
            description='mph'
            data={8}
          />
          <Highlights
            additionalItem
            progressBar
            title='Humidity'
            description='%'
            data={84}
          />
          <Highlights
            title='Visibility'
            description='miles'
            data={7.7}
          />
          <Highlights
            title='Air Pressure'
            description='mb'
            data={998}
          />
        </div>
        <AboutProject />
      </div>
    </div>
  );
};

export default App;
