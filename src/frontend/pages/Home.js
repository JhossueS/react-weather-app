import React from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import Highlights from '../components/Highlights';
import ChangeGrades from '../components/ChangeGrades';
import AboutProject from '../components/AboutProject';
import Sidebar from '../components/Sidebar';
import AnotherDay from '../components/AnotherDay';
import AnotherDayContainer from '../components/AnotherDayContainer';
import HighlightsContainer from '../components/HighlightsContainer';

const Home = (props) => {
  const {
    handleSumbit,
    formValues,
    handleChange,
    dataWeather,
    onFahrenheit,
    onCentigrates,
    isFahrenit,
    selectBoxItem,
    getCityIpUser,
  } = props;

  const { dataWeekDays, dataToday } = dataWeather;

  return (
    <div className='App'>
      <Sidebar
        onSubmit={handleSumbit}
        formValues={formValues}
        handleChange={handleChange}
        dataWeatherToday={dataWeather.dataToday}
        dataCityName={dataWeather.nameCity}
        isFahrenit={isFahrenit}
        selectBoxItem={selectBoxItem}
        onFahrenheit={onFahrenheit}
        onCentigrates={onCentigrates}
        getCityIpUser={getCityIpUser}
      />
      <div className='App__container'>
        <ChangeGrades
          onFahrenheit={onFahrenheit}
          onCentigrates={onCentigrates}
          className='buttons__container'
        />
        <AnotherDayContainer>
          {
            dataWeekDays.length > 0 &&
            dataWeekDays.map((item) => (
              <AnotherDay
                key={item.id}
                weatherStateAbbr={item.weather_state_abbr}
                maxTemp={item.max_temp}
                minTemp={item.min_temp}
                created={item.created}
                applicableDate={item.applicable_date}
                weatherStateName={item.weather_state_name}
                isFahrenit={isFahrenit}
              />
            ))
          }
        </AnotherDayContainer>
        <Title className='App_title__container'>
          <h2>Today&apos;s Highlights</h2>
        </Title>
        <HighlightsContainer>
          <Highlights
            additionalItem
            title='Wind Status'
            data={dataToday.wind_direction}
            description='mph'
          />
          <Highlights
            additionalItem
            progressBar
            title='Humidity'
            data={dataToday.humidity}
            description='%'
          />
          <Highlights
            title='Visibility'
            description='miles'
            data={dataToday.visibility}
          />
          <Highlights
            title='Air Pressure'
            description='mb'
            data={dataToday.predictability}
          />
        </HighlightsContainer>
        <AboutProject />
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
