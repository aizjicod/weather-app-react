import apiService from '../api/http';

const GET_FORECAST = 'Wheather-app-react/actions/GET_FORECAST';

export const getForecastAction = (location) => async (dispatch) => {
  try {
    const listlocation = await apiService.getLocationKey(location);
    const listPromises = listlocation.data.map(async (data) => {
      const weather = await apiService.getForecast(data.Key);
      return weather.data.DailyForecasts;
    });
    const listForecast = await Promise.all(listPromises);
    dispatch({
      type: GET_FORECAST,
      payload: [listForecast, listlocation.data],
    });
    return Promise.resolve([listForecast]);
  } catch (err) {
    return Promise.reject(err);
  }
};

const reducer = (state = { location: null, forecast: null }, action) => {
  switch (action.type) {
    case GET_FORECAST:
      console.log(action.payload);
      return {
        location: action.payload[1],
        forecast: action.payload[0],
      };
    default:
      return state;
  }
};

export default reducer;
