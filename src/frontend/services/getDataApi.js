import axios from 'axios';

const urlBase = 'https://backend-weather-app.vercel.app/';

export async function getData(nameCity) {

  try {
    const responseId = await axios.get(`${urlBase}searchidcity/${nameCity}`);

    const responseData = await axios.get(`${urlBase}locactionid/${responseId.data.data[0].woeid}`);

    const { data } = responseData;
    return data;
  } catch (err) {
    return err;
  }

};

export default {
  getData,
};
