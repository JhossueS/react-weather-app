const URL_GET_IP = 'https://api.ipify.org/?format=json';
const urlBase = 'https://backend-weather-app.vercel.app/';

export function getLocactionForIp() {
  return fetch(URL_GET_IP)
    .then((res) => res.json())
    .then((res) => {
      return fetch(`${urlBase}getcitynameforip/${res.ip}`)
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

export default {
  getLocactionForIp,
};