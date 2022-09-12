import WeatherLi from './weather-li';

const Weather = () => (
  <div className="weather-container">
    <h2 className="weather-h2">city/state</h2>
    <img src="#" alt="climate weather" />
    <div className="pr-div">
      <p className="pr-day">day</p>
      <p className="pr-temperature">18°C</p>
    </div>
    <ul className="weather-ul">
      <WeatherLi day="Monday" temperature="45" />
      <WeatherLi day="Tuesday" temperature="15" />
      <WeatherLi day="Wesnday" temperature="40" />
      <WeatherLi day="thurstday" temperature="20" />
    </ul>
  </div>
);

export default Weather;
