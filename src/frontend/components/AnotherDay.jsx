/* eslint-disable camelcase */
import React from 'react';
import moment from 'moment';
import '../assets/styles/components/AnotherDay.scss';

const AnotherDay = (props) => {
  const {
    weather_state_abbr,
    max_temp,
    min_temp,
    applicable_date,
  } = props;
  return (
    <div className='anotherDay__container'>
      <p className='anotherDay__container-titleDay'>{moment(applicable_date).format('ddd, DD MMM')}</p>
      <figure className='anotherDay__container-img'>
        <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt='' />
      </figure>
      <div className='anotherDay__container-temperature'>
        <span>
          {(Math.floor(max_temp)).toFixed(1)}
          °C
        </span>
        <span>
          {(Math.floor(min_temp)).toFixed(1)}
          °C
        </span>
      </div>
    </div>
  );
};

export default AnotherDay;
