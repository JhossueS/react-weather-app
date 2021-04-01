import React from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import Highlights from '../components/Highlights';
import ChangeGrades from '../components/ChangeGrades';
import AboutProject from '../components/AboutProject';
import Sidebar from '../components/Sidebar';

const Home = (props) => {
  const {
    handleSumbit,
    formValues,
    handleChange,
    dataWeather,
    onFahrenheit,
    onCentigrates,
  } = props;

  return (
    <div className='App'>
      <Sidebar
        onSubmit={handleSumbit}
        formValues={formValues}
        handleChange={handleChange}
        dataWeatherToday={dataWeather.dataToday}
        dataCityName={dataWeather.nameCity}
      />
      <div className='App__container'>
        <ChangeGrades onFahrenheit={onFahrenheit} onCentigrates={onCentigrates} />
        {/*<Title className='App_title__container'>
          <h2>Today&apos;s Highlights</h2>
        </Title>
        <div className='App_today_highlights'>
          <Highlights
            additionalItem
            title='Wind Status'
            description='mph'
          />
          <Highlights
            additionalItem
            progressBar
            title='Humidity'
            description='%'
          />
          <Highlights
            title='Visibility'
            description='miles'
          />
          <Highlights
            title='Air Pressure'
            description='mb'
          />
        </div>
        <AboutProject /> */}
      </div>
    </div>
  );

};

Home.propTpyes = {
  handleSumbit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  dataWeather: PropTypes.object.isRequired,
};

export default Home;