import React, { Component } from 'react';
import InfoWeather from './components/InfoWeather';
import AnotherDay from './components/AnotherDay';
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
    this.onSearchLocaction = this.onSearchLocaction.bind(this);
    this.state = {
      menu: true,
      locactionCity: [
        'radio',
        'gugu',
      ],
    };
  }

  handleActiveMenu() {
    this.setState({
      menu: false,
    });
    document.body.classList.add('isactive');
  };

  handleDisableMenu() {
    this.setState({
      menu: true,
    });
    document.body.classList.remove('isactive');
  };

  onSearchLocaction(newLocaction) {
    this.setState({
      locactionCity: newLocaction.locaction,
    });
  };

  render() {
    const { menu } = this.state;

    return (
      <div className='App'>
        {
          menu ?
            <InfoWeather handleActiveMenu={this.handleActiveMenu} /> :
            <Menu handleDisableMenu={this.handleDisableMenu} searchLocaction={this.onSearchLocaction} />
        }
        <div className='App__container'>
          <ChangeGrades />
          <div className='App_nextDay__container'>
            <AnotherDay />
            <AnotherDay />
            <AnotherDay />
            <AnotherDay />
            <AnotherDay />
          </div>
          <div className='App_title__container'>
            <h2>Today&apos;s Highlights</h2>
          </div>
          <div className='App_today_highlights'>
            <Highlights
              additionalItem
              title='Wind Status'
              description='mph'
              data={8}
            />
            <Highlights
              additionalItem
              progressBar
              title='Humidity'
              description='%'
              data={84}
            />
            <Highlights
              title='Visibility'
              description='miles'
              data={7.7}
            />
            <Highlights
              title='Air Pressure'
              description='mb'
              data={998}
            />
          </div>
          <AboutProject />
        </div>
      </div>
    );
  }
};

export default App;
