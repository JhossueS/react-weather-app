import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, classNamesButton, onclick, type } = props;

  return (
    <button
      className={classNamesButton}
      type={type}
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
  type: PropTypes.string.isRequired,
};

export default Button;
