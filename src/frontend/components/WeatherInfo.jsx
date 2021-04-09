import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from '../utils/dateFormat';
import '../assets/styles/components/WeatherInfo.scss';

const InfoWeather = (props) => {

  const {
    handleActiveMenu,
    nameCity,
    theTemp,
    weatherStateName,
    weatherStateAbbr,
    applicableDate,
    isFahrenit,
  } = props;

  return (
    <div className='infoWeather__container'>
      <div className='infoWeather__container-searchForPlaces'>
        <button
          className='infoWeather__container-searchForPlaces-searchBar'
          onClick={handleActiveMenu}
          type='button'

        >
          Search For Places
        </button>
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
        <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`} alt='' />

        <div className='infoWeather__container-weather-details'>
          <span className='infoWeather__container-weather-details-number'>{Math.floor(theTemp)}</span>
          <span className='infoWeather__container-weather-details-grade'>{isFahrenit ? '°F' : '°C'}</span>
        </div>
        <div className='infoWeather__container-weather-details-content'>
          <p>{weatherStateName}</p>
          <div className='infoWeather__container-weather-details-content-day'>
            <span>Today</span>
            <span>•</span>
            <span>{dateFormat(applicableDate)}</span>
          </div>
          <div className='infoWeather__container-weather-details-content-location'>
            <span className='infoWeather__container-weather-details-content-location-point'>
              <i className='material-icons'>location_on</i>
            </span>
            <span className='infoWeather__container-weather-details-content-location-place'>
              {nameCity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

};

InfoWeather.propTypes = {
  nameCity: PropTypes.string.isRequired,
  theTemp: PropTypes.number.isRequired,
  handleActiveMenu: PropTypes.func.isRequired,
  weatherStateName: PropTypes.string.isRequired,
  weatherStateAbbr: PropTypes.string.isRequired,
};

export default InfoWeather;
