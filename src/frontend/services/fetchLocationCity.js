import { getGeoByIp } from 'geoplugin';

const URL_GET_IP = 'https://api.ipify.org/?format=json';

export function getLocactionForIp() {
  return fetch(URL_GET_IP)
    .then((res) => res.json)
    .then((res) => getGeoByIp(res.ip))
    .catch((err) => console.error(err));
}

export default {
  getLocactionForIp,
};