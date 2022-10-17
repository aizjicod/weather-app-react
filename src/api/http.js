import axios from 'axios';

const API_KEY = 'M6xaxVTdnOOatMJ6L34QI26W7x1o74Uf';

const getLocationKey = (location) => axios(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`);

const getForecast = (locationKey) => axios(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=true&metric=true`);

export default {
  getLocationKey,
  getForecast,
};
