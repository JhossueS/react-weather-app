import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/BurgerMenu.scss';

const Menu = (props) => {
  const { handleDisableMenu, onSubmit, onChange, formValues } = props;

  return (
    <div className='burgerMenu__container'>
      <div className='burgerMenu__container-clear-icon'>
        <i
          className='material-icons'
          onClick={() => { handleDisableMenu(); }}
          role='button'
          tabIndex='0'
        >
          clear
        </i>
      </div>
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
              value={formValues.cityName}
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
      <div className='burgerMenu__container-menu-location'>
        <p>london</p>
        <i className='material-icons'>keyboard_arrow_down</i>
      </div>
    </div>
  );

};

Menu.propTypes = {
  handleDisableMenu: PropTypes.func.isRequired,
};

export default Menu;
