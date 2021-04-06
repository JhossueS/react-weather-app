/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';

import '../assets/styles/components/ChangeGrades.scss';

class ChangeGrades extends Component {
  constructor(props) {
    super(props);

    this.handleActiveCentigrades = this.handleActiveCentigrades.bind(this);
    this.handleActiveFahrenheit = this.handleActiveFahrenheit.bind(this);

    // state of menu on or off
    this.state = {
      isButtonActive: true,
    };
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

  //handle Defrees centigrade or Fahrenheit

  handleActiveCentigrades() {
    this.props.onCentigrates();
    this.setState({
      isButtonActive: true,
    });
  };

  handleActiveFahrenheit() {
    this.props.onFahrenheit();
    this.setState({
      isButtonActive: false,
    });
  };

  render() {

    const { isButtonActive } = this.state;

    return (
      <div className='buttons__container'>
        <Button
          classNamesButton={isButtonActive ? this.buttonActive() : this.butttonDisable()}
          type='button'
          onclick={isButtonActive ? null : this.handleActiveCentigrades}
        >
          °C
        </Button>
        <Button
          classNamesButton={isButtonActive ? this.butttonDisable() : this.buttonActive()}
          type='button'
          onclick={isButtonActive ? this.handleActiveFahrenheit : null}
        >
          °F
        </Button>
      </div>
    );
  }
};

ChangeGrades.propTypes = {
  onFahrenheit: PropTypes.func.isRequired,
  onCentigrates: PropTypes.func.isRequired,
};

export default ChangeGrades;
