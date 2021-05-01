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
import { AppContext } from '../Context/HomeProvider';
import Loading from '../components/Loading';

class Home extends React.Component {

  render() {
    const {
      data: {
        dataWeekDays,
        dataToday,
      },
    } = this.context.stateGlobal;

    return (
    <div className='App'>
      <Sidebar />
      <div className='App__container'>
        <ChangeGrades className='buttons__container' />
      </div>
    </div>
    );

  }
}

Home.contextType = AppContext;

export default Home;


{/* <div className='App'>
      <Sidebar /> 
      <div className='App__container'>
        <ChangeGrades className='buttons__container' />
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
        </div> */}