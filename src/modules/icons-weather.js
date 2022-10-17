import {
  TiWeatherSunny, TiWeatherCloudy, TiWeatherShower, TiWeatherSnow, TiWeatherWindy, TiWeatherStormy,
} from 'react-icons/ti';

const searchIcon = (settings) => {
  if (settings.index >= 1 && settings.index <= 4) {
    // sunny day icon
    return <TiWeatherSunny className={settings.className} />;
  } if (settings.index >= 5 && settings.index <= 11) {
    // cloudy day icon
    return <TiWeatherCloudy className={settings.className} />;
  } if (settings.index >= 12 && settings.index <= 18 && settings.index !== 15) {
    // shower day icon
    return <TiWeatherShower className={settings.className} />;
  } if (settings.index === 15) {
    // stormy day icon
    return <TiWeatherStormy className={settings.className} />;
  } if (settings.index >= 19 && settings.index <= 29) {
    // snow day icon
    return <TiWeatherSnow className={settings.className} />;
  }
  // windy day icon
  return <TiWeatherWindy className={settings.className} />;
};

const changeBackground = (number) => {
  if (number >= 1 && number <= 4) {
    // sunny day background
    return (
      <div
        className="weather-img"
        style={{ backgroundImage: 'url(https://c.tenor.com/x6ER0BF5kWQAAAAC/what-a-sunny-day.gif)' }}
      />
    );
  } if (number >= 5 && number <= 11) {
    // cloudy day background
    return (
      <div
        className="weather-img"
        style={{ backgroundImage: 'url(https://i.pinimg.com/originals/41/4f/60/414f60aad193d61c656ed52f2989366a.gif)' }}
      />
    );
  } if (number >= 12 && number <= 18 && number !== 15) {
    // shower day background
    return (
      <div
        className="weather-img"
        style={{ backgroundImage: 'url(https://c.tenor.com/kYWWNWUaOxsAAAAd/raining-rain.gif)' }}
      />
    );
  } if (number === 15) {
    // stormy day icon
    return (
      <div
        className="weather-img"
        style={{ backgroundImage: 'url(https://c.tenor.com/3ZQWX3lg3NYAAAAC/thunder.gif)' }}
      />
    );
  } if (number >= 19 && number <= 29) {
    // snow day icon
    return (
      <div
        className="weather-img"
        style={{ backgroundImage: 'url(https://entrazos.com/wp-content/uploads/2014/12/nieve.gif)' }}
      />
    );
  }
  return (
    // windy day icon
    <div
      className="weather-img"
      style={{ backgroundImage: 'url(https://thumbs.gfycat.com/SardonicTallBumblebee-max-1mb.gif)' }}
    />
  );
};

export default { searchIcon, changeBackground };
