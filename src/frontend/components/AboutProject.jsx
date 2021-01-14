import React from 'react';

const AboutProject = () => {

  return (
    <div className='App_about__container'>
      <div className='App_about__container-contact'>
        <span className='about-title'>
          Contact:
          {'  '}
        </span>
        <span> jhossue.d.sacnhez@gmail.com</span>
      </div>
      <div className='App_about__container-link'>
        <span className='about-title'>
          design and challenge at:
          {'  '}
        </span>
        <a
          href='https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv'
          target='_blank'
          className='link'
        >
          devchallenges.io
        </a>
      </div>
    </div>
  );
};

export default AboutProject;
