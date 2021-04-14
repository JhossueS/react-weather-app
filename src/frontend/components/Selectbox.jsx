import React from 'react';
import '../assets/styles/components/Selectbox.scss'

class Selectbox extends React.Component {
  render() {
    return (
      <div className='select-box-container'>
        <form action="">
          <div className="select-box">
            <div className="select-box-selects">
              <div className="select-box-selects-content">
                <span>Lodon</span>
              </div>
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
            <div className="select-box-options">
              <div className="select-box-options-option">
                <span>Caracas</span>
              </div>

              <div className="select-box-options-option">
                <span>San Fransico</span>
              </div>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Selectbox;
