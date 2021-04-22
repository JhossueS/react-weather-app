import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

const CityNotFound = (props) => {
  const { handleSumbit, handleChange, formValues, selectBoxItem } = props;
  return (
    <div className='city-notFound-container h1'>
      <h1>City Not Found</h1>
      <Menu
        className='none'
        formValues={formValues}
        onSubmit={handleSumbit}
        onChange={handleChange}
        selectBoxItem={selectBoxItem}
      />
    </div>
  );
};

CityNotFound.propTypes = {
  handleSumbit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default CityNotFound;
