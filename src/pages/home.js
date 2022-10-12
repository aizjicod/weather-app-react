import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weather from '../components/weather';
import { getLocationKeyAction } from '../redux/reducers';

const Home = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  // const key = useSelector((state) => state.weather.location);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      dispatch(getLocationKeyAction(value));
    }
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="location-imput" className="label-location">
          Select your country/state
          <input type="text" id="location-imput" onChange={handleOnChange} />
          <input type="submit" />
        </label>
      </form>
      <Weather />
    </div>
  );
};
export default Home;
