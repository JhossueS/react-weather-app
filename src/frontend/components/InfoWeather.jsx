import React, { useState } from 'react';
import Menu from './Menu';
import '../assets/styles/components/InfoWeather.scss';

const InfoWeather = () => {

  //state
  const [searchLocation, setSateSearchLocation] = useState(false);

  //toggle menu
  function handleActiveMenu() {
    setSateSearchLocation(true);
    document.body.classList.add('isactive');
  };

  const handleDisableMenu = () => {
    setSateSearchLocation(false);
    document.body.classList.remove('isactive');
  };

  // componet to render
  let componet;

  if (searchLocation) {
    componet = <Menu toggleMenu={handleDisableMenu} />;
  } else {
    componet = (
      <div className='infoWeather__container'>
        <div className='infoWeather__container-searchForPlaces'>
          <div
            className='infoWeather__container-searchForPlaces-searchBar'
            role='button'
            onClick={handleActiveMenu}
            tabIndex='0'
          >
            <span>Search For Places</span>
          </div>
          <div className='infoWeather__container-searchForPlaces-location'>
            <i className='material-icons'>gps_fixed</i>
          </div>
        </div>

        <div className='infoWeather__container-cloudy-container'>

          <div className='infoWeather__container-cloudy-container-groupOne'>
            <i className='material-icons font left'>cloud</i>
            <i className='material-icons font right'>cloud</i>
          </div>
          <div className='infoWeather__container-cloudy-container-groupOne'>
            <i className='material-icons font top'>cloud</i>
            <i className='material-icons font bottom'>cloud</i>
          </div>

        </div>

        <div className='infoWeather__container-weather'>
          <img src='https://www.metaweather.com/static/img/weather/s.svg' alt='' />

          <div className='infoWeather__container-weather-details'>
            <span className='infoWeather__container-weather-details-number'>15</span>
            <span className='infoWeather__container-weather-details-grade'>°C</span>
          </div>
          <div className='infoWeather__container-weather-details-content'>
            <p>Shower</p>
            <div className='infoWeather__container-weather-details-content-day'>
              <span>Today</span>
              <span>•</span>
              <span>Fri, 5 Jun</span>
            </div>
            <div className='infoWeather__container-weather-details-content-location'>
              <span className='infoWeather__container-weather-details-content-location-point'>
                <i className='material-icons'>location_on</i>
              </span>
              <span className='infoWeather__container-weather-details-content-location-place'>
                Helsinki
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    componet
  );
};

export default InfoWeather;
