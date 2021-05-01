import React, { Component } from 'react';
import Button from './Button';
import { AppContext } from '../Context/HomeProvider';

import '../assets/styles/components/ChangeGrades.scss';

class ChangeGrades extends Component {
  constructor(props) {
    super(props);
    this.handleToggleGrades = this.handleToggleGrades.bind(this);
  }

  //handle Defrees centigrade or Fahrenheit
  handleToggleGrades() {
    this.context.toggleGradesUse();
  }

  render() {
    const { stateGlobal } = this.context;
    const { className } = this.props;

    return (
      <div className={className}>
        <Button
          classNamesButton='buttons__container-grades'
          disabled={stateGlobal.isCentigrade}
          type='button'
          onclick={this.handleToggleGrades}
        >
          °C
        </Button>
        <Button
          classNamesButton='buttons__container-grades'
          type='button'
          onclick={this.handleToggleGrades}
          disabled={stateGlobal.isFahrenit}
        >
          °F
        </Button>
      </div>
    );
  }
}

ChangeGrades.contextType = AppContext;

export default ChangeGrades;
