import {
  TiWeatherSunny, TiWeatherCloudy, TiWeatherShower, TiWeatherSnow, TiWeatherWindy, TiWeatherStormy,
} from 'react-icons/ti';

const searchIcon = (settings) => {
  if (settings.index >= 1 && settings.index <= 4) {
    return <TiWeatherSunny className={settings.className} />;
  } if (settings.index >= 5 && settings.index <= 11) {
    return <TiWeatherCloudy className={settings.className} />;
  } if (settings.index >= 12 && settings.index <= 18 && settings.index !== 15) {
    return <TiWeatherShower className={settings.className} />;
  } if (settings.index === 15) {
    return <TiWeatherStormy className={settings.className} />;
  } if (settings.index >= 19 && settings.index <= 29) {
    return <TiWeatherSnow className={settings.className} />;
  }
  return <TiWeatherWindy className={settings.className} />;
};

const searchWeatherUtilities = (settings) => searchIcon(settings);

export default searchWeatherUtilities;
