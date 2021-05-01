import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from '../utils/dateFormat';
import '../assets/styles/components/AnotherDay.scss';

const AnotherDay = (props) => {
  const {
    weatherStateAbbr,
    maxTemp,
    minTemp,
    isFahrenit,
    applicableDate,
    weatherStateName,
  } = props;

  return (
    <div className='anotherDay__container'>
      <p className='anotherDay__container-titleDay'>
        {dateFormat(applicableDate)}
      </p>
      <figure className='anotherDay__container-img'>
        <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`} alt={weatherStateName} />
      </figure>
      <div className='anotherDay__container-temperature'>
        <span>
          {(Math.floor(maxTemp)).toFixed(1)}
          {isFahrenit ? '°F' : '°C'}
        </span>
        <span>
          {(Math.floor(minTemp)).toFixed(1)}
          {isFahrenit ? '°F' : '°C'}
        </span>
      </div>
    </div>
  );
};

AnotherDay.propTypes = {
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  weatherStateAbbr: PropTypes.string.isRequired,
};

export default AnotherDay;
