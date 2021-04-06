/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/AnotherDay.scss';

const AnotherDay = (props) => {
  const {
    weather_state_abbr,
    max_temp,
    min_temp,
    isFahrenit,
    applicable_date,
  } = props;
  return (
    <div className='anotherDay__container'>
      <p className='anotherDay__container-titleDay' />
      <figure className='anotherDay__container-img'>
        <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt='' />
      </figure>
      <div className='anotherDay__container-temperature'>
        <span>
          {(Math.floor(max_temp)).toFixed(1)}
          {isFahrenit ? '°F' : '°C'}
        </span>
        <span>
          {(Math.floor(min_temp)).toFixed(1)}
          {isFahrenit ? '°F' : '°C'}
        </span>
      </div>
    </div>
  );
};

AnotherDay.propTypes = {
  max_temp: PropTypes.number.isRequired,
  min_temp: PropTypes.number.isRequired,
  weather_state_abbr: PropTypes.string.isRequired,
  applicable_date: PropTypes.string.isRequired,
};

export default AnotherDay;
