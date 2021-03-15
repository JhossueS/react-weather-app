import React from 'react';
import PropTypes from 'prop-types';

const AnotherDayContainer = ({ children }) => {
  return (
    <div className='App_nextDay__container'>
      {children}
    </div>
  );
};

AnotherDayContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnotherDayContainer;
