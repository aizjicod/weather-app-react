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
  const data = forecastList ? forecastList[index] : false;
  const date = data ? getDate(data[0].Date) : 'day';
  return (
    <div className="weather-container">
      {searchWeatherUtilities.changeBackground(data[0].Day.Icon)}
      <h2 className="weather-h2">{location ? `${location.Country.EnglishName} / ${location.LocalizedName}` : 'city/state'}</h2>
      <div className="pr-div">
        {data
          ? searchWeatherUtilities.searchIcon({ index: data[0].Day.Icon, className: 'icon' })
          : <TiWeatherSunny className="icon" />}
        <p className="pr-information day">
          {date}
        </p>
        <p className="pr-information">
          {data
            ? `Temperature: ${Math.trunc((data[0].Temperature.Maximum.Value
              + data[0].Temperature.Minimum.Value) / 2)} C°`
            : 'day'}
        </p>
        <p className="pr-information">
          {data
            ? `Rain probability: ${data[0].Day.RainProbability}%`
            : 'Rain probability: 0%'}
        </p>
        <p className="pr-information">
          {data
            ? `Snow probability: ${data[0].Day.SnowProbability}%`
            : 'Snow probability: 0%'}
        </p>
        <p className="pr-information">
          {data
            ? `Thunderstorm probability: ${data[0].Day.ThunderstormProbability}%`
            : 'Thunderstorm probability: 0%'}
        </p>
        <p className="pr-information">
          {data
            ? `Wind speed: ${data[0].Day.Wind.Speed.Value} km/h ${data[0].Day.Wind.Direction.English}`
            : 'Wind speed: 0km N'}
        </p>
      </div>
      <ul className="weather-ul">
        {data
          ? (
            <>
              {' '}
              <WeatherLi
                day={getDate(data[1].Date)}
                temperature={Math.trunc((data[1].Temperature.Maximum.Value
            + data[1].Temperature.Minimum.Value) / 2)}
                icon={data[1].Day.Icon}
              />
              <WeatherLi
                day={getDate(data[2].Date)}
                temperature={Math.trunc((data[2].Temperature.Maximum.Value
            + data[2].Temperature.Minimum.Value) / 2)}
                icon={data[2].Day.Icon}
              />
              <WeatherLi
                day={getDate(data[3].Date)}
                temperature={Math.trunc((data[3].Temperature.Maximum.Value
            + data[3].Temperature.Minimum.Value) / 2)}
                icon={data[3].Day.Icon}
              />

              <WeatherLi
                day={getDate(data[4].Date)}
                temperature={Math.trunc((data[4].Temperature.Maximum.Value
            + data[4].Temperature.Minimum.Value) / 2)}
                icon={data[4].Day.Icon}
              />
            </>
          )
          : (
            <>
              <WeatherLi
                day="monday"
                temperature={18}
                icon={1}
              />
              <WeatherLi
                day="monday"
                temperature={18}
                icon={1}
              />
              <WeatherLi
                day="monday"
                temperature={18}
                icon={1}
              />
              <WeatherLi
                day="monday"
                temperature={18}
                icon={1}
              />
            </>
          )}
      </ul>
    </div>
  );
};

Weather.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Weather;
