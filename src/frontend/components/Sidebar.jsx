import React from 'react';
import Proptypes from 'prop-types';
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
      isFahrenit,
      selectBoxItem,
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
              cityName={dataCityName}
              closeMenu
              selectBoxItem={selectBoxItem}
            />
          ) : (
            <WeatherInfo
              handleActiveMenu={this.handleActiveMenu}
              nameCity={dataCityName}
              weatherStateName={dataWeatherToday.weather_state_name}
              theTemp={dataWeatherToday.the_temp}
              weatherStateAbbr={dataWeatherToday.weather_state_abbr}
              applicableDate={dataWeatherToday.applicable_date}
              isFahrenit={isFahrenit}
            />
          )
        }
      </>
    );
  }
}

Sidebar.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
  formValues: Proptypes.object.isRequired,
  dataCityName: Proptypes.string.isRequired,
  dataWeatherToday: Proptypes.object.isRequired,
};

export default Sidebar;
