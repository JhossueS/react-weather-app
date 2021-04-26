import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const IconGps = () => {
  const color = '#E7E7EB';
  return (
    <div className='infoWeather__container-searchForPlaces-location'>
      <FontAwesomeIcon
        icon={faCompass} size='2x'
        color={color}
      />
    </div>
  )
}

export default IconGps;
