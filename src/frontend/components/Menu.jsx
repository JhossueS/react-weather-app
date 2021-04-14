import React from 'react';
import PropTypes from 'prop-types';
import Selectbox from './Selectbox';

import '../assets/styles/components/BurgerMenu.scss';

const Menu = (props) => {
  const {
    handleDisableMenu,
    onSubmit,
    onChange,
    formValues,
    className,
    closeMenu,
  } = props;

  return (
    <div className={className || 'burgerMenu__container'}>
      {closeMenu && (
        <div className='burgerMenu__container-clear-icon'>
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
      <Selectbox />
    </div>
  );

};

Menu.propTypes = {
  handleDisableMenu: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  className: PropTypes.string,
  closeMenu: PropTypes.bool,
};

export default Menu;
