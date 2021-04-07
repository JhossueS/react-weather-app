import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/AnotherDay.scss';

const AnotherDay = (props) => {
  const {
    weatherStateAbbr,
    maxTemp,
    minTemp,
    isFahrenit,
    //created,
    applicableDate,
  } = props;

  const tramsfornString = applicableDate.replace('-', ',').replace('-', ',');
  const date = new Date(tramsfornString);
  const seconds = new Intl.DateTimeFormat('en', {
    second: 'numeric',
  });
  console.log(seconds.format(date));
  return (
    <div className='anotherDay__container'>
      <p className='anotherDay__container-titleDay' />
      <figure className='anotherDay__container-img'>
        <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`} alt='' />
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
  //applicable_date: PropTypes.string.isRequired,
};

export default AnotherDay;
