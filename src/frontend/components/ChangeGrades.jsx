import React, { useState } from 'react';
import classnames from 'classnames';
import Button from './Button';

import '../assets/styles/components/ChangeGrades.scss';

const Buttons = (props) => {

  //state
  const [isActiveGrades, setIsActiveGrades] = useState(true);

  //classname to change active button Degrees Centigrade
  const buttonActive = classnames('buttons__container-grades', {
    isActive: true,
  });

  const butttonDisable = classnames('buttons__container-grades', {
    isDisable: true,
  });

  //handle stateButton

  const handleActiveCentigrades = () => {
    setIsActiveGrades(true);
  };

  const handleActiveFahrenheit = () => {
    setIsActiveGrades(false);
  };

  return (
    <div className='buttons__container'>
      <Button
        classNamesButton={isActiveGrades ? buttonActive : butttonDisable}
        onclick={isActiveGrades ? null : handleActiveCentigrades}
      >
        °C
      </Button>
      <Button
        classNamesButton={isActiveGrades ? butttonDisable : buttonActive}
        onclick={isActiveGrades ? handleActiveFahrenheit : null}
      >
        °F
      </Button>
    </div>
  );
};

export default Buttons;
