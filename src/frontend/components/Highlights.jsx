import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import WindStatus from './WindStatus';
import '../assets/styles/components/Highlights.scss';

const Highlights = (props) => {

  const { additionalItem, progressBar, title, description, data } = props;

  return (
    <div className='highlights__container'>
      <p className='highlights__container-title'>{title}</p>
      <div className='highlights__container-details'>
        <span className='highlights__container-details-number'>{data}</span>
        <span className='highlights__container-details-description'>{description}</span>
      </div>
      <div className='highlights__container-additional '>
        {
          additionalItem ? (progressBar ? <ProgressBar humedity={81} /> : <WindStatus />) : null
        }
      </div>
    </div>
  );
};

Highlights.propTypes = {
  data: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Highlights;
