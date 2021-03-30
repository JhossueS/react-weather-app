import React from 'react';
import WeatherInfo from './WeatherInfo';
import Menu from './Menu';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleActiveMenu = this.handleActiveMenu.bind(this);
    this.handleDisableMenu = this.handleDisableMenu.bind(this);
    this.state = {
      menu: false,
    };
  }

  //handle menu
  handleActiveMenu() {
    this.setState({
      menu: true,
    });
  }

  handleDisableMenu() {
    this.setState({
      menu: false,
    });
  }

  render() {
    const { menu } = this.state;

    const {
      onSubmit,
      handleChange,
      formValues,
      dataWeatherToday,
      dataCityName,
    } = this.props;

    return (
      <>
        {
          menu ? (
            <Menu
              handleDisableMenu={this.handleDisableMenu}
              onSubmit={onSubmit}
              onChange={handleChange}
              formValues={formValues}
              closeMenu
            />
          ) : (
            <WeatherInfo
              handleActiveMenu={this.handleActiveMenu}
              nameCity={dataCityName}
              weatherStateName={dataWeatherToday.weather_state_name}
              theTemp={dataWeatherToday.the_temp}
              weatherStateAbbr={dataWeatherToday.weather_state_abbr}
              created={dataWeatherToday.created}
            />
          )
        }
      </>
    );
  }
}

export default Sidebar;
