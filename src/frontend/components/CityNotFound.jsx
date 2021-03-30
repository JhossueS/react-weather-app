import React from 'react';
import Menu from './Menu';

class CityNotFound extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        cityName: '',
      },
    };
  }

  render() {

    const { form } = this.state;
    return (
      <div className='city-notFound-container h1'>
        <h1>City Not Found</h1>
        <Menu className formValues={form} />
      </div>
    );
  }
}

export default CityNotFound;
