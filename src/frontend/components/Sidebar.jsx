import React from 'react';
import WeatherInfo from './WeatherInfo';
import Menu from './Menu';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleActiveMenu = this.handleActiveMenu.bind(this);
    this.handleDisableMenu = this.handleDisableMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      menu: false,
      form: {
        cityName: '',
      },
    };

  }

  //handle form

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      form: {
        [e.target.name]: e.target.value,
      },
    });
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
    const { menu, form } = this.state;
    return (
      <>
        {
          menu ? (
            <Menu
              handleDisableMenu={this.handleDisableMenu}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              formValues={form}
            />
          ) : (
            <WeatherInfo
              handleActiveMenu={this.handleActiveMenu}
            />
          )
        }
      </>
    );
  }
}

export default Sidebar;
