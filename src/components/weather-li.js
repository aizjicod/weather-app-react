import PropTypes from 'prop-types';
import { TiWeatherSunny } from 'react-icons/ti';

const WeatherLi = ({ day, temperature }) => (
  <li>
    <TiWeatherSunny className="icon-li" />
    <p>{day}</p>
    <p>
      {temperature}
      °C
    </p>
  </li>
);

WeatherLi.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default WeatherLi;
