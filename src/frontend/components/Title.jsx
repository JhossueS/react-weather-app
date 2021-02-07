import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {

  const { children, className } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Title;
