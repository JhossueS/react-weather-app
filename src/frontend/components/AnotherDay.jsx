import React from 'react';
import '../assets/styles/components/AnotherDay.scss';

const AnotherDay = () => {
  return (
    <div className='anotherDay__container'>
      <p className='anotherDay__container-titleDay'>Tomorrow</p>
      <figure className='anotherDay__container-img'>
        <img src='https://www.metaweather.com/static/img/weather/sn.svg' alt='' />
      </figure>
      <div className='anotherDay__container-temperature'>
        <span>17°C</span>
        <span>23°C</span>
      </div>
    </div>
  );
};

export default AnotherDay;
