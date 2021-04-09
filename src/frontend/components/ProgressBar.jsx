import React from 'react';

const ProgressBar = (props) => {
  const { humedity } = props;

  const barProgress = {
    width: `${humedity}%`,
  };

  return (
    <div className='highlights__container-additional-progressBar'>
      <div className='highlights__container-additional-progressBar-number'>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className='highlights__container-additional-progressBar-progress'>
        <div className='highlights__container-additional-progressBar-progress-myBar' style={barProgress} />
      </div>
      <div className='highlights__container-additional-progressBar-por'>
        <span>%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
