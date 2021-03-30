const urlBase = 'https://backend-weather-app.vercel.app/';

export function fetchDataWeather(nameCity) {
  return fetch(`${urlBase}searchidcity/${nameCity}`)
    .then((res) => res.json())
    .then((ApiResponse) => {
      if (ApiResponse.data.length === 0) {
        return false;
      }
      return ApiResponse.data[0].woeid;
    })
    .then((idCityRes) => {

      if (!idCityRes) {
        return false;
      }

      return fetch(`${urlBase}locactionid/${idCityRes}`);
    })
    .then((dataWeatherRes) => {
      if (!dataWeatherRes) {
        return false;
      }
      return dataWeatherRes.json();
    })
    .catch((err) => err);

};

export default {
  fetchDataWeather,
};

