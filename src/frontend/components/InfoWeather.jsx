import React, { useState } from 'react';
import classnames from 'classnames';
import BurgerMenu from './BurgerMenu';
import '../assets/styles/components/InfoWeather.scss';

const InfoWeather = () => {

  const [searchLocation, setSateSearchLocation] = useState(false);

  function handledActiveBurgerMenu() {
    setSateSearchLocation(true);
  };

  const handleDisableBurgerMenu = () => {
    setSateSearchLocation(false);
  };

  let componet;

  if (searchLocation) {
    componet = <BurgerMenu handleState={handleDisableBurgerMenu} />;
  } else {
    componet = (
      <div className='infoWeather__container'>
        <div className='infoWeather__container-searchForPlaces'>
          <div
            className='infoWeather__container-searchForPlaces-searchBar'
            role='button'
            onClick={handledActiveBurgerMenu}
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
            <i className='material-icons font left'>wb_cloudy</i>
            <i className='material-icons font right'>wb_cloudy</i>
          </div>
          <div className='infoWeather__container-cloudy-container-groupOne'>
            <i className='material-icons font top'>wb_cloudy</i>
            <i className='material-icons font bottom'>wb_cloudy</i>
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
