import React from 'react';
import ProgressBar from './ProgressBar';
import WindStatus from './WindStatus';
import '../assets/styles/components/Highlights.scss';

const Highlights = (props) => {

  const { additionalItem, progressBar, title, description, data } = props;

  return (
    <div className='highlights__container'>
      <p className='highlights__container-title'>{title}</p>
      <div className='highlights__container-details'>
        <span className='highlights__container-details-number'>{Math.round(data)}</span>
        <span className='highlights__container-details-description'>{description}</span>
      </div>
      <div className='highlights__container-additional '>
        {
          additionalItem ? (progressBar ? <ProgressBar humedity={Math.round(data)} /> : <WindStatus />) : null
        }
      </div>
    </div>
  );
};

export default Highlights;
