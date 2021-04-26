import React from 'react';
import PropTypes from 'prop-types';
import Selectbox from './Selectbox';
import '../assets/styles/components/BurgerMenu.scss';
import ChangeGrades from './ChangeGrades';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.storage = window.localStorage;
    this.state = {
      citiesList: [],
    };
  }

  getListOfLocalStorage() {
    if (this.storage.length) {
      return this.setState({
        citiesList: JSON.parse(this.storage.getItem('citiesList'))
      })
    }

    this.setState({
      citiesList: [this.props.cityName],
    })
  }

  componentDidMount() {
    this.getListOfLocalStorage();
  }

  render() {

    const {
      handleDisableMenu,
      onSubmit,
      onChange,
      formValues,
      className,
      closeMenu,
      selectBoxItem,
      onCentigrates,
      onFahrenheit,
    } = this.props;

    const { citiesList } = this.state;

    const screen = window.screen.width;

    return (
      <div className={className || 'burgerMenu__container'}>
        {closeMenu && (
          <div className='burgerMenu__container-clear-icon'>
            { screen < 992 ?
            (<ChangeGrades
              onCentigrates={onCentigrates}
              onFahrenheit={onFahrenheit}
            />) : null
            }
            <i
              className='material-icons'
              onClick={handleDisableMenu}
              role='button'
              tabIndex='0'
            >
              clear
            </i>
          </div>
        )}
        <div className='burgerMenu__container-searchBar'>
          <form onSubmit={onSubmit}>
            <div className='burgerMenu__container-searchBar-groupOne'>
              <i className='material-icons search'>search</i>
              <input
                type='text'
                name='cityName'
                placeholder='search locaction'
                onChange={onChange}
                className='input text'
                value={formValues?.cityName}
              />
            </div>
            <input
              type='submit'
              className='input submit'
              value='search'
              placeholder='Search Location'
            />
          </form>
        </div>
        <Selectbox citiesList={citiesList} selectBoxItem={selectBoxItem} />
      </div>
    );
  }

}

Menu.propTypes = {
  handleDisableMenu: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  className: PropTypes.string,
  closeMenu: PropTypes.bool,
};

export default Menu;
