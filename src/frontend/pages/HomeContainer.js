import React from 'react';
import { fetchDataWeather } from '../services/fetchDataWeather';
import updateGrades from '../utils/updateGrades';
import Home from './Home';
import Loading from '../components/Loading';
import CityNotFound from '../components/CityNotFound';

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleGradesUse = this.toggleGradesUse.bind(this);
    this.selectBoxItem = this.selectBoxItem.bind(this);

    this.state = {
      loading: true,
      data: {},
      form: {
        cityName: '',
      },
      isFahrenit: false,
    };
  }

  //handle formMenu
  handleSumbit(e) {
    const { form } = this.state;
    e.preventDefault();
    // if the form has something written on it to be able to do the search action
    if (form.cityName.length === 0) {
      return false;
    }

    this.setState({
      loading: true,
    });
    fetchDataWeather(form.cityName)
      .then((dataWeather) => {

        this.setState({
          isFahrenit: false,
          data: dataWeather,
          loading: false,
        });
      })
      .catch((e) => console.log(e));
  }

  handleChange(e) {
    this.setState({
      form: {
        cityName: e.target.value,
      },
    });
  }

  // firts search city
  componentDidMount() {
    this.fetchData('london');
  }

  // fetching data
  fetchData(cityName) {
    this.setState({
      loading: true,
    })
    fetchDataWeather(cityName)
      .then((dataWeather) => {
        // if dataWeather full data
        if (dataWeather) {
          return this.setState({
            data: dataWeather,
            loading: false,
          });
        }
        // dataWeahter empty
        return this.setState({
          data: false,
          loading: false,
        });
      })
      .catch((e) => console.error(e));
  }

  // toggle Grades

  toggleGradesUse() {
    const { data, isFahrenit } = this.state;
    const update = updateGrades(data, isFahrenit);
    this.setState({
      isFahrenit: !isFahrenit,
      data: {
        ...data,
        dataToday: update.updateGradeToday,
        dataWeekDays: update.updateGradesWeek,

      },
    });
  }

  // updated state of form values of select box name city
  selectBoxItem(idnameCity) {
    return this.fetchData(idnameCity)
  }

  render() {
    const { form, loading, data, isFahrenit } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!data) {
      return (
        <CityNotFound
          handleSumbit={this.handleSumbit}
          handleChange={this.handleChange}
          formValues={form}
        />
      );
    }

    return (
      <>
        <Home
          handleSumbit={this.handleSumbit}
          handleChange={this.handleChange}
          dataWeather={data}
          formValues={form}
          onFahrenheit={this.toggleGradesUse}
          onCentigrates={this.toggleGradesUse}
          isFahrenit={isFahrenit}
          selectBoxItem={this.selectBoxItem}
        />
      </>
    );

  }
}

export default HomeContainer;
