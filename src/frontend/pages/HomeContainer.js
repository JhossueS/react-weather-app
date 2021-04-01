import React from 'react';
import Home from './Home';
import { fetchDataWeather } from '../services/fetchDataWeather';
import Loading from '../components/Loading';
import CityNotFound from '../components/CityNotFound';

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onCentigrates = this.onCentigrates.bind(this);
    this.onFahrenheit = this.onFahrenheit.bind(this);

    this.state = {
      loading: true,
      data: [],
      form: {
        cityName: '',
      },
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
    return fetchDataWeather(form.cityName)
      .then((dataWeather) => {

        this.setState({
          data: dataWeather,
          loading: false,
        });

      });
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
    fetchDataWeather(cityName)
      .then((dataWeather) => {
        console.log(dataWeather);
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
      });
  }

  // handle change Grades

  onFahrenheit() {
    const grade = this.celsiusToFahrenheit(15);
    const { data } = this.state;
    this.setState({
      ...data,

      the_temp: 'xxx',

    });
    console.log(grade);
    console.log('fahrenheit');
  }

  onCentigrates() {
    console.log('centigrates');
  }

  celsiusToFahrenheit(e) {
    this.fahenheit = (e * 9 / 5) + 32;
    return this.fahenheit;
  }

  render() {
    const { form, loading, data } = this.state;

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
          onFahrenheit={this.onFahrenheit}
          onCentigrates={this.onCentigrates}
        />
      </>
    );

  }
}

export default HomeContainer;
