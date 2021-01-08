import React from 'react';
import '../assets/styles/components/Highlights.scss';

const Highlights = () => {
  return (
    <div className='highlights__container'>
      <p className='highlights__container-title'>Wind status</p>
      <div className='highlights__container-details'>
        <span className='highlights__container-details-number'>7</span>
        <span className='highlights__container-details-description'>mph</span>
      </div>
      <div className='highlights__container-additional '>
        <div className='highlights__container-additional-icon'>
          <i className='material-icons highlights__container-additional-icon-font'>navigation</i>
        </div>
        <span className='highlights__container-additional-description'>WSW</span>
      </div>
    </div>
  );
};

export default Highlights;
