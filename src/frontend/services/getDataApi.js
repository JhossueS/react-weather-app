import axios from 'axios';

const urlSearchId = 'http://localhost:3003/searchidcity/';
const urlSearchData = 'http://localhost:3003/locactionid/';

export async function getData(nameCity) {

  try {
    const responseId = await axios.get(`${urlSearchId}${nameCity}`);

    const responseData = await axios.get(`${urlSearchData}${responseId.data.data[0].woeid}`);

    const { data } = responseData;
    return data;
  } catch (err) {
    return err;
  }

};

export default {
  getData,
};
