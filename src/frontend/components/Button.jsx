import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, classNamesButton, onclick } = props;

  return (
    <button
      className={classNamesButton}
      type='button'
      onClick={onclick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classNamesButton: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

export default Button;
