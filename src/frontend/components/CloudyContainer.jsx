import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';


const CloudyContainer = () => {
  const colorCloud = '#292c44';

  return (
    <div className='infoWeather__container-cloudy-container'>
      <div className='infoWeather__container-cloudy-container-groupOne' >
        <FontAwesomeIcon className='icons__cloudy left'
          icon={faCloud}
          color={colorCloud}
          size='5x'
        />
        <FontAwesomeIcon className='icons__cloudy right'
          icon={faCloud}
          color={colorCloud}
          size='6x'
        />
      </div>
      <div className='infoWeather__container-cloudy-container-groupTwo'>
      <FontAwesomeIcon className='icons__cloudy left'
        icon={faCloud}
        color={colorCloud}
        size='4x'
      />
      <FontAwesomeIcon className='icons__cloudy right'
        icon={faCloud}
        size='6x'
        color={colorCloud}
      />
      </div>
    </div>
  );

};

export default CloudyContainer;
