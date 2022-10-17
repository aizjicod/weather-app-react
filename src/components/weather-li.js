import PropTypes from 'prop-types';
import searchWeatherUtilities from '../modules/icons-weather';

const WeatherLi = ({ day = 'day', temperature = 0, icon = 1 }) => (
  <li>
    <p className="li-day">{day}</p>
    {searchWeatherUtilities.searchIcon({ index: icon, className: 'icon-li' })}
    <p>
      {temperature}
      °C
    </p>
  </li>
);

WeatherLi.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.number.isRequired,
};

export default WeatherLi;
