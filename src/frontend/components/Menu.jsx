import React from 'react';
import Selectbox from './Selectbox';
import '../assets/styles/components/BurgerMenu.scss';
import ChangeGrades from './ChangeGrades';
import { AppContext } from '../Context/HomeProvider';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.storage = window.localStorage;
    this.state = {
      citiesList: [],
    };
  }

  // get data of localStorage add state
  getListOfLocalStorage() {
    if (this.storage.length) {
      return this.setState({
        citiesList: JSON.parse(this.storage.getItem('citiesList'))
      })
    }

    this.setState({
      citiesList: [this.props.cityName],
    })
  }

  componentDidMount() {
    this.getListOfLocalStorage();
  }

  setViewOptionsMenu() {
    const {closeMenu, handleDisableMenu } = this.props;
    const screen = window.screen.width;

    return (
      <>
        {closeMenu && (
          <div
            className='burgerMenu__container-clear-icon'
            style={{
              justifyContent: screen < 922 ? '' : 'flex-end',
            }}
          >
            { screen < 992 ?
            (<ChangeGrades />) : null
            }
            <i
              className='material-icons'
              onClick={handleDisableMenu}
              role='button'
              tabIndex='0'
            >
              clear
            </i>
          </div>
        )}
      </>
    )
  }

  render() {
    const { className } = this.props;
    const { citiesList } = this.state;
    const {
      handleSumbit,
      handleChange,
      stateGlobal: {
        form
      },
    } = this.context;

    return (
      <div className={className || 'burgerMenu__container'}>
        {this.setViewOptionsMenu()}
        <div className='burgerMenu__container-searchBar'>
          <form onSubmit={handleSumbit}>
            <div className='burgerMenu__container-searchBar-groupOne'>
              <i className='material-icons search'>search</i>
              <input
                type='text'
                name='cityName'
                placeholder='search locaction'
                onChange={handleChange}
                className='input text'
                value={form?.cityName}
              />
            </div>
            <input
              type='submit'
              className='input submit'
              value='search'
              placeholder='Search Location'
              disabled={!form.cityName.length}
            />
          </form>
        </div>
        <Selectbox citiesList={citiesList} />
      </div>
    );
  }
}

Menu.contextType = AppContext;

export default Menu;
