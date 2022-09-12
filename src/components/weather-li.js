import PropTypes from 'prop-types';

const WeatherLi = ({ day, temperature }) => (
  <li>
    <img src="#" alt="climate weather" />
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
