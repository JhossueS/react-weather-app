import React from 'react';
import '../assets/styles/components/Buttons.scss';

const Buttons = () => {
  return (
    <div className='buttons__container'>
      <button
        type='button'
        className='buttons__container-grades'
      >
        °C
      </button>
      <button
        type='button'
        className='buttons__container-grades'
      >
        °F
      </button>
    </div>
  );
};

export default Buttons;
