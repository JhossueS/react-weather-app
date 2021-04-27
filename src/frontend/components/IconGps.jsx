import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const IconGps = (props) => {
  const { color, onClick } = props;
  return (
    <div
      className='infoWeather__container-searchForPlaces-location'
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faCompass} size='2x'
        color={color}
      />
    </div>
  )
}

export default IconGps;
