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

    return (
      <>
        {
          menu ? <Menu
          closeMenu
          handleDisableMenu={this.handleDisableMenu}
          /> : <WeatherInfo handleActiveMenu={this.handleActiveMenu} />
        }
      </>
    );
  }
}

export default Sidebar;
