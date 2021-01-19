import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import '../assets/styles/components/BurgerMenu.scss';

const Menu = (props) => {
  const { handleDisableMenu, searchLocaction } = props;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data, 'menu');

    searchLocaction(data);

    //clear input
    e.target.reset();
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='burgerMenu__container-searchBar-groupOne'>
            <i className='material-icons search'>search</i>
            <input
              type='text'
              name='locaction'
              placeholder='search locaction'
              className='input text'
              ref={
                register({
                  required: {
                    value: true,
                    message: 'campo requerido',
                  },
                })
              }
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
      <span>{errors?.locaction?.message}</span>
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
