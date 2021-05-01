import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Selectbox.scss'
import { AppContext } from '../Context/HomeProvider';

class Selectbox extends React.Component {

  constructor(props) {
    super(props);
    this.toggleClassActive = this.toggleClassActive.bind(this);
    this.storage = window.localStorage;
    this.state = {
      isActive: false,
    };
  }

  toggleClassActive() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {

    const { isActive } = this.state;
    const { citiesList } = this.props;
    const { selectBoxItem } = this.context;

    const toggleClassSelect = classNames('select-box-selects', {
      active: isActive,
    });

    const toggleClassOptions= classNames('select-box-options', {
      active: isActive,
    });

    if(!citiesList.length) {
      return null
    }

    return (
      <div className='select'>
        <form action="">
          <div
            className="select-box">
            <div
              className={toggleClassSelect}
              onClick={this.toggleClassActive}
              role='button'
              tabIndex='0'
            >
              <div className="select-box-selects__content">
                <span>searched cities</span>
              </div>
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
            <div className={toggleClassOptions}>
            {citiesList.map((e) => (
              <div className="select-box-options__item"
                key={e}
                onClick={() => selectBoxItem(e)}
              >
                <span>{e}</span>
              </div>
              ))
            }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Selectbox.contextType = AppContext;

export default Selectbox;
