import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, classNamesButton, onclick, type, disabled } = props;
  return (
    <button
      className={classNamesButton}
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classNamesButton: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default Button;
