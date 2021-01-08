import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/BurgerMenu.scss';

const BurgerMenu = (props) => {
  const { handleState } = props;
  return (
    <div className='burgerMenu__container'>
      <div className='burgerMenu__container-clear-icon'>
        <i
          className='material-icons'
          onClick={handleState}
          role='button'
          tabIndex='0'
        >
          clear
        </i>
      </div>
      <div className='burgerMenu__container-searchBar'>
        <form action=''>
          <div className='burgerMenu__container-searchBar-groupOne'>
            <i className='material-icons search'>search</i>
            <input
              type='text'
              placeholder='search location'
              className='input text'
            />
          </div>
          <input
            type='submit'
            className='input submit'
            value='search'
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

BurgerMenu.propTypes = {
  handleState: PropTypes.func.isRequired,
};

export default BurgerMenu;
