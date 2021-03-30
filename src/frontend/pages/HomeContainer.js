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

    this.state = {
      loading: true,
      data: [],
      form: {
        cityName: '',
      },
    };
  }

  //handle menu
  handleSumbit(e) {
    const { form } = this.state;
    e.preventDefault();
    this.setState({
      loading: true,
    });
    console.log(e);
    fetchDataWeather(form.cityName)
      .then((dataWeather) => {
        console.log(dataWeather);
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

  componentDidMount() {
    this.fetchData('london');
  }

  fetchData(cityName) {
    fetchDataWeather(cityName)
      .then((dataWeather) => {
        console.log(dataWeather);

        if (dataWeather) {
          return this.setState({
            data: dataWeather,
            loading: false,
          });
        }

        return this.setState({
          data: false,
          loading: false,
        });
      });
  }

  render() {
    const { form, loading, data } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!data) {
      return <CityNotFound />;
    }

    return (
      <>
        <Home
          handleSumbit={this.handleSumbit}
          handleChange={this.handleChange}
          dataWeather={data}
          formValues={form}
        />
      </>
    );

  }
}

export default HomeContainer;
