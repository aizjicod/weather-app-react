import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TiWeatherStormy } from 'react-icons/ti';
import WeatherLi from './weather-li';
// import { useEffect } from 'react';

const Weather = ({ index }) => {
  const locationList = useSelector((state) => state.weather.location);
  const forecastList = useSelector((state) => state.weather.forecast);
  const location = locationList !== null ? locationList[index] : false;
  console.log(forecastList);
  return (
    <div className="weather-container">
      <div className="weather-img" />
      <h2 className="weather-h2">{location ? `${location.Country.EnglishName} / ${location.LocalizedName}` : 'city/state'}</h2>
      <div className="pr-div">
        <TiWeatherStormy className="icon" />
        <p className="pr-day">
          {forecastList !== null && forecastList !== undefined
            ? forecastList[index][0].Date.slice(5, 10)
            : 'day'}
        </p>
        <p className="pr-temperature">
          {forecastList !== null
            ? forecastList[index][0].Temperature.Maximum.Value
            + forecastList[index][0].Temperature.Minimum.Value / 2
            : 'day'}
        </p>
      </div>
      <ul className="weather-ul">
        <WeatherLi day="Monday" temperature="45" />
        <WeatherLi day="Tuesday" temperature="15" />
        <WeatherLi day="Wesnday" temperature="40" />
        <WeatherLi day="thurstday" temperature="20" />
      </ul>
    </div>
  );
};

Weather.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Weather;
