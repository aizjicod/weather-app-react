import apiService from '../api/http';

const GET_LOCATION_KEY = 'WheatherAppReact/reducers/GET_LOCATION_KEY';
// const GET_FORECAST = 'Wheather-app-react/actions/GET_FORECAST';

export const getLocationKeyAction = (location) => async (dispatch) => {
  try {
    const res = await apiService.getLocationKey(location);
    dispatch({
      type: GET_LOCATION_KEY,
      location: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const reducer = (state = { location: null, forecast: null }, action) => {
  switch (action.type) {
    case GET_LOCATION_KEY:
      return {
        ...state,
        location: action.location[0].Key,
      };
    default:
      return state;
  }
};

export default reducer;
