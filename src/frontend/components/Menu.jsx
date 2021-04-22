import React from 'react';
import PropTypes from 'prop-types';
import Selectbox from './Selectbox';
import '../assets/styles/components/BurgerMenu.scss';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.storage = window.localStorage;
    this.state = {
      citiesList: [],
    };
  }

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

  // save list localstorage
  saveCitiesList () {
    const { citiesList } = this.state;

    // clone state and add new name city
    const  saveCities = [...citiesList, this.props.cityName]
    // clear duplicates names city
    const clearDuplicatesCities = this.removeDuplicates(saveCities);

    this.storage.setItem('citiesList', JSON.stringify(clearDuplicatesCities));
  }

  removeDuplicates(arr)  {
    return arr.filter((value, key) => {
      return arr.indexOf(value) === key;
    })
  }

  componentDidMount() {
    this.getListOfLocalStorage();
  }

  componentWillUnmount() {
    this.saveCitiesList();
  }

  render() {

    const {
      handleDisableMenu,
      onSubmit,
      onChange,
      formValues,
      className,
      closeMenu,
      selectBoxItem,
    } = this.props;

    const { citiesList } = this.state

    return (
      <div className={className || 'burgerMenu__container'}>
        {closeMenu && (
          <div className='burgerMenu__container-clear-icon'>
            <i
              className='material-icons'
              onClick={() => {
                handleDisableMenu();
                this.saveCitiesList();
              }}
              role='button'
              tabIndex='0'
            >
              clear
            </i>
          </div>
        )}
        <div className='burgerMenu__container-searchBar'>
          <form onSubmit={onSubmit}>
            <div className='burgerMenu__container-searchBar-groupOne'>
              <i className='material-icons search'>search</i>
              <input
                type='text'
                name='cityName'
                placeholder='search locaction'
                onChange={onChange}
                className='input text'
                value={formValues?.cityName}
              />
            </div>
            <input
              type='submit'
              className='input submit'
              value='search'
              placeholder='Search Location'
            />
          </form>
        </div>
        <Selectbox citiesList={citiesList} selectBoxItem={selectBoxItem} />
      </div>
    );
  }

}

Menu.propTypes = {
  handleDisableMenu: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  className: PropTypes.string,
  closeMenu: PropTypes.bool,
};

export default Menu;
