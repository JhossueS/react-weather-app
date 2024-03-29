import React from 'react';
import Title from '../components/Title';
import Highlights from '../components/Highlights';
import ChangeGrades from '../components/ChangeGrades';
import AboutProject from '../components/AboutProject';
import Sidebar from '../components/Sidebar';
import AnotherDay from '../components/AnotherDay';
import AnotherDayContainer from '../components/AnotherDayContainer';
import HighlightsContainer from '../components/HighlightsContainer';
import CityNotFound from '../components/CityNotFound';
import { AppContext } from '../Context/HomeProvider';

class Home extends React.Component {

  setAnotherDay() {
    const { data: {
      dataWeekDays,
      isFahrenit,
      }
    } = this.context.stateGlobal;

    return (
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
    )
  }

  setHighlights() {
    const {
      data: {
        dataToday,
      },
    } = this.context.stateGlobal;

    return (
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
    )
  }

  render() {
    const { data } = this.context.stateGlobal;
    if (!data) {
      return (
        <CityNotFound />
      )
    }

    return (
    <div className='App'>
      <Sidebar />
      <div className='App__container'>
        <ChangeGrades className='buttons__container' />
        {this.setAnotherDay()}
        <Title className='App_title__container' >
          <h2>Today&apos;s Highlights</h2>
        </Title>
        {this.setHighlights()}
        <AboutProject />
      </div>
    </div>
    );

  }
}

Home.contextType = AppContext;

export default Home;
