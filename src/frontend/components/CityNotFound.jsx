import React from 'react';
import Menu from './Menu';

const CityNotFound = () => {

  return (
    <div className='city-notFound-container h1'>
      <h1>City Not Found</h1>
      <Menu
        className='none'
        closeMenu={false}
      />
    </div>
  );
};

export default CityNotFound;
