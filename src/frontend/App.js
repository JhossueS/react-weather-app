/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { getData } from './services/getDataApi';
import InfoWeather from './components/InfoWeather';
import AnotherDay from './components/AnotherDay';
import Title from './components/Title';
import Loading from './components/Loading';
import Highlights from './components/Highlights';
import ChangeGrades from './components/ChangeGrades';
import AboutProject from './components/AboutProject';
import Menu from './components/Menu';

import './assets/styles/App.scss';
import './assets/styles/mediaQuerys.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleActiveMenu = this.handleActiveMenu.bind(this);
    this.handleDisableMenu = this.handleDisableMenu.bind(this);
    this.onSearchNewLocaction = this.onSearchNewLocaction.bind(this);
    this.state = {
      menu: true,
      newLocactionCity: {},
      isFetch: true,
    };
  }

  componentDidMount() {
    this.onSearchLocaction('london');
  }

  async onSearchLocaction(nameCity) {
    const data = await getData(nameCity);

    this.setState({
      newLocactionCity: data,
      isFetch: false,
    });
  }

  handleActiveMenu() {
    this.setState({
      menu: false,
    });
    document.body.classList.add('isactive');
  }

  handleDisableMenu() {
    this.setState({
      menu: true,
    });
    document.body.classList.remove('isactive');
  }

  async onSearchNewLocaction(newLocaction) {
    console.log(newLocaction.locaction.toLowerCase());
    const data = await getData(newLocaction.locaction.toLowerCase());
    this.setState({
      newLocactionCity: data,
      menu: true,
    });
    document.body.classList.remove('isactive');
  }

  render() {
    const { menu, isFetch, newLocactionCity } = this.state;

    const { dataToday, nameCity, dataWeekDays } = newLocactionCity;

    if (isFetch) {
      return <Loading />;
    }

    return (
      <div className='App'>
        {
          menu ? (
            <InfoWeather
              handleActiveMenu={this.handleActiveMenu}
              nameCity={nameCity}
              maxTemp={dataToday.max_temp}
            />
          ) : (
            <Menu
              handleDisableMenu={this.handleDisableMenu}
              searchLocaction={this.onSearchNewLocaction}
            />
          )
        }
        <div className='App__container'>
          <ChangeGrades />
          <div className='App_nextDay__container'>
            {
              dataWeekDays.map((item) => (
                <AnotherDay
                  key={item.id}
                  {...item}
                />
              ))
            }
          </div>
          <Title className='App_title__container'>
            <h2>Today&apos;s Highlights</h2>
          </Title>
          <div className='App_today_highlights'>
            <Highlights
              additionalItem
              title='Wind Status'
              description='mph'
              data={dataToday.wind_speed.toFixed(2)}
            />
            <Highlights
              additionalItem
              progressBar
              title='Humidity'
              description='%'
              data={dataToday.humidity}
            />
            <Highlights
              title='Visibility'
              description='miles'
              data={dataToday.visibility.toFixed(2)}
            />
            <Highlights
              title='Air Pressure'
              description='mb'
              data={dataToday.air_pressure}
            />
          </div>
          <AboutProject />
        </div>
      </div>
    );
  }
};

export default App;
