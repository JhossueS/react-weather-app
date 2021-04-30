import React, { Component, createContext } from 'react';
import Loading from '../components/Loading'
import { fetchDataWeather } from '../services/fetchDataWeather';
import { getLocactionForIp } from '../services/fetchLocationCity';
import updateGrades from '../utils/updateGrades';

export const AppContext = createContext({
  a: 'estoy aqui',
});

export class HomeProvider extends Component {
  constructor(props) {
    super(props)
    this.toggleGradesUse = this.toggleGradesUse.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.selectBoxItem = this.selectBoxItem.bind(this);
    this.getCityIpUser = this.getCityIpUser.bind(this);

    this.state = {
      data: [],
      form: {
        cityName: '',
      },
      loading: true,
      error: null,
      isFahrenit: false,
    }
  }

  componentDidMount() {
    this.fetchData('london')
  }

  //fething data
  fetchData(cityName) {
    this.setState({
      loading: true,
    })

    fetchDataWeather(cityName)
      .then((dataWeather) => {
        if (!dataWeather.length) {
          return this.setState({
            data: dataWeather,
            loading: false,
            isFahrenit: false
          });
        }

        return this.setState({
          data: [],
          loading: false,
          error: true,
        })
      })
      .catch((e) => console.log(e))
  }

  // handle form
  handleSumbit(e) {
    const { form: { cityName } } = this.state;
    e.preventDefault();

    this.setState({
      loading: true,
    });

    console.log(cityName)

    this.fetchData(cityName)
  }

  handleChange(e) {
    this.setState({
      form: {
        cityName: e.target.value,
      },
    });
  }

  // toggleGares
  toggleGradesUse() {
    const { data, isFahrenit } = this.state;

    const updatedGrades = updateGrades(data, isFahrenit);
    this.setState({
      isFahrenit: !isFahrenit,
      data: {
        ...data,
        dataToday: updatedGrades.updateGradeToday,
        dataWeekDays: updatedGrades.updateGradesWeek,
      },
    });
  }

  // save city searched
  saveCitiesList () {
    const storage = window.localStorage;
    const { data } = this.state;

    let citiesList = []

    if (storage.length) {
      citiesList = JSON.parse(storage.getItem('citiesList'));
      // clone state and add new name city
      const  saveCities = [...citiesList, data.nameCity];
      // clear duplicates names city
      const clearDuplicatesCities = this.removeDuplicates(saveCities);

      return storage.setItem('citiesList', JSON.stringify(clearDuplicatesCities));
    }
    // local storage is clean
    citiesList = [data.nameCity]
    storage.setItem('citiesList', JSON.stringify(citiesList));
  }

  removeDuplicates(arr)  {
    return arr.filter((value, key) => {
      // if false no include to array the value
      if(value) {
        return arr.indexOf(value) === key;
      }
    })
  }

  // get item id localstorage
  selectBoxItem(idnameCity) {
    return this.fetchData(idnameCity)
  }

   // get city name for ip
  getCityIpUser() {
    console.log('entre aqui')
    getLocactionForIp()
      .then((res) => this.fetchData(res.data.city))
  }

  render() {

    const { loading } = this.state

    const providerState = {
      stateGlobal: this.state,
      getCityIpUser: this.getCityIpUser,
      handleSumbit: this.handleSumbit,
      handleChange: this.handleChange,
      selectBoxItem: this.selectBoxItem,
      toggleGradesUse: this.toggleGradesUse,
    }

    if (loading) return <Loading />

    return (
      <AppContext.Provider value={providerState}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
