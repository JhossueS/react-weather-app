import React from 'react';
import dateFormat from '../utils/dateFormat';
import CloudyContainer from './CloudyContainer';
import IconGps from './IconGps';
import '../assets/styles/components/WeatherInfo.scss';
import { AppContext } from '../Context/HomeProvider';

class InfoWeather extends React.Component {

  render() {
    const { handleActiveMenu } = this.props;
    const {
      getCityIpUser,
      stateGlobal: {
        data: {
          dataToday,
          nameCity
        },
        isFahrenit,
      },

    } = this.context;

    console.log(getCityIpUser)

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
          <IconGps
            getCityIpUser={getCityIpUser}
            color='#E7E7EB'
          />
        </div>
        <CloudyContainer />
        <div className='infoWeather__container-weather'>
          <img src={`https://www.metaweather.com/static/img/weather/${dataToday.weather_state_abbr}.svg`} alt={dataToday.weather_state_name} />

          <div className='infoWeather__container-weather-details'>
            <span className='infoWeather__container-weather-details-number'>{Math.floor(dataToday.the_temp)}</span>
            <span className='infoWeather__container-weather-details-grade'>{isFahrenit ? '°F' : '°C'}</span>
          </div>

          <div className='infoWeather__container-weather-details-content'>
            <p>{dataToday.weather_state_name}</p>
            <div className='infoWeather__container-weather-details-content-day'>
              <span>Today</span>
              <span>•</span>
              <span>{dateFormat(dataToday.applicable_date)}</span>
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
  }
}

InfoWeather.contextType = AppContext;

export default InfoWeather;
