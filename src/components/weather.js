import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TiWeatherSunny } from 'react-icons/ti';
import WeatherLi from './weather-li';
import searchWeatherUtilities from '../modules/icons-weather';
import getDate from '../modules/date-days';

const Weather = ({ index }) => {
  const locationList = useSelector((state) => state.weather.location);
  const forecastList = useSelector((state) => state.weather.forecast);
  const location = locationList !== null ? locationList[index] : false;
  const data = forecastList ? forecastList[index][0] : false;
  const date = getDate(data.Date);
  console.log(data);
  return (
    <div className="weather-container">
      <div className="weather-img" />
      <h2 className="weather-h2">{location ? `${location.Country.EnglishName} / ${location.LocalizedName}` : 'city/state'}</h2>
      <div className="pr-div">
        {data
          ? searchWeatherUtilities({ index: data.Day.Icon, className: 'icon' })
          : <TiWeatherSunny className="icon" />}
        <p className="pr-information day">
          {data
            ? date
            : 'date'}
        </p>
        <p className="pr-information">
          {data
            ? `Temperature: ${Math.trunc((data.Temperature.Maximum.Value
            + data.Temperature.Minimum.Value) / 2)} C°`
            : 'day'}
        </p>
        <p className="pr-information">
          {data
            ? `Rain probability: ${data.Day.RainProbability}%`
            : 'Rain probability: 0%'}
        </p>
        <p className="pr-information">
          {data
            ? `Snow probability: ${data.Day.SnowProbability}%`
            : 'Snow probability: 0%'}
        </p>
        <p className="pr-information">
          {data
            ? `Thunderstorm probability: ${data.Day.ThunderstormProbability}%`
            : 'Thunderstorm probability: 0%'}
        </p>
        <p className="pr-information">
          {data
            ? `Wind speed: ${data.Day.Wind.Speed.Value} km/h ${data.Day.Wind.Direction.English}`
            : 'Wind speed: 0km N'}
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
