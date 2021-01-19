import React from 'react';

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

export default Button;
