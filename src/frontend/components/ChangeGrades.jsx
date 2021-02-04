import React, { Component } from 'react';
import classnames from 'classnames';
import Button from './Button';

import '../assets/styles/components/ChangeGrades.scss';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveGrades: true,
    };
    this.buttonActive = this.buttonActive.bind(this);
    this.butttonDisable = this.butttonDisable.bind(this);
    this.handleActiveCentigrades = this.handleActiveCentigrades.bind(this);
    this.handleActiveFahrenheit = this.handleActiveFahrenheit.bind(this);
  };

  //classname to change active button Degrees Centigrade
  buttonActive() {
    this.classActive = classnames('buttons__container-grades', {
      isActive: true,
    });
    return this.classActive;
  }

  butttonDisable() {
    this.classDisable = classnames('buttons__container-grades', {
      isDisable: true,
    });
    return this.classDisable;
  }

  //handle stateButton

  handleActiveCentigrades() {
    this.setState({
      isActiveGrades: true,
    });
  };

  handleActiveFahrenheit() {
    this.setState({
      isActiveGrades: false,
    });
  };

  render() {

    const { isActiveGrades } = this.state;

    return (
      <div className='buttons__container'>
        <Button
          classNamesButton={isActiveGrades ? this.buttonActive() : this.butttonDisable()}
          onclick={isActiveGrades ? null : this.handleActiveCentigrades}
        >
          °C
        </Button>
        <Button
          classNamesButton={isActiveGrades ? this.butttonDisable() : this.buttonActive()}
          onclick={isActiveGrades ? this.handleActiveFahrenheit : null}
        >
          °F
        </Button>
      </div>
    );
  }
};

export default Buttons;
