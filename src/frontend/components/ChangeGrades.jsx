import React, { useState } from 'react';
import classnames from 'classnames';
import '../assets/styles/components/Buttons.scss';

const Buttons = () => {
  //state
  const [isActiveGrades, setIsActiveGrades] = useState(true);

  //classname to change active button Degrees Centigrade
  const isDesactive = classnames('buttons__container-grades', {
    isDesactive: true,
  });

  //change state and classname
  const activeDegreesCentigrade = () => {
    setIsActiveGrades(true);
  };

  const activeDegreesFahrenheit = () => {
    setIsActiveGrades(false);
  };

  return (
    <div className='buttons__container'>
      <button
        type='button'
        className={isActiveGrades ? 'buttons__container-grades' : isDesactive}
        onClick={activeDegreesCentigrade}
      >
        °C
      </button>
      <button
        type='button'
        className={isActiveGrades ? isDesactive : 'buttons__container-grades'}
        onClick={activeDegreesFahrenheit}
      >
        °F
      </button>
    </div>
  );
};

export default Buttons;
