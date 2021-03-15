/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { getData } from './services/getDataApi';
import InfoWeather from './components/InfoWeather';
import AnotherDay from './components/AnotherDay';
import AnotherDayContainer from './components/AnotherDayContainer';
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
    this.handleFahrenheit = this.handleFahrenheit.bind(this);
    this.handleCentigrates = this.handleCentigrates.bind(this);
    this.state = {
      menu: true,
      newLocactionCity: {},
      dataToday: [],
      nameCity: '',
      isFetch: true,
    };
  }

  componentDidMount() {
    this.onSearchLocaction('london');
  }

  //search inital city

  async onSearchLocaction(nameCity) {
    const data = await getData(nameCity);

    this.setState({
      newLocactionCity: data,
      dataToday: [data.dataToday],
      nameCity: data.nameCity,
      isFetch: false,
    });
  }

  //handle menu

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

  //Search new city

  async onSearchNewLocaction(newLocaction) {
    console.log(newLocaction.locaction.toLowerCase());
    const data = await getData(newLocaction.locaction.toLowerCase());
    this.setState({
      newLocactionCity: data,
      menu: true,
    });
    document.body.classList.remove('isactive');
  }

  // change Grades

  handleFahrenheit() {
    const { dataToday } = this.state;

    this.fahrenheit = (dataToday[0].max_temp * 9 / 5) + 32;

    const tempFahrenheit = ({
      ...dataToday[0],
      max_temp: this.fahrenheit,
    });

    this.setState({
      dataToday: [tempFahrenheit],
    });
  }

  handleCentigrates() {
    const { dataToday } = this.state;

    this.centigrate = (dataToday[0].max_temp - 32) * 5 / 9;

    const tempCentigrate = ({
      ...dataToday[0],
      max_temp: this.centigrate.toFixed(2),
    });

    this.setState({
      dataToday: [tempCentigrate],
    });
  }

  render() {
    const { menu, isFetch, newLocactionCity, dataToday, nameCity } = this.state;

    const { dataWeekDays } = newLocactionCity;

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
              weatherStateName={dataToday[0].weather_state_name}
              maxTemp={dataToday[0].max_temp}
            />
          ) : (
            <Menu
              handleDisableMenu={this.handleDisableMenu}
              searchLocaction={this.onSearchNewLocaction}
            />
          )
        }
        <div className='App__container'>
          <ChangeGrades
            onFahrenheit={this.handleFahrenheit}
            onCentigrates={this.handleCentigrates}
          />
          <AnotherDayContainer>
            {
              dataWeekDays.map((item) => (
                <AnotherDay
                  key={item.id}
                  {...item}
                />
              ))
            }
          </AnotherDayContainer>
          <Title className='App_title__container'>
            <h2>Today&apos;s Highlights</h2>
          </Title>
          {/* <div className='App_today_highlights'>
            <Highlights
              additionalItem
              title='Wind Status'
              description='mph'
              data={Math.floor(dataToday.wind_speed)}
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
              data={Math.floor(dataToday.visibility)}
            />
            <Highlights
              title='Air Pressure'
              description='mb'
              data={dataToday.air_pressure}
            />
          </div> */}
          <AboutProject />
        </div>
      </div>
    );
  }
};

export default App;
