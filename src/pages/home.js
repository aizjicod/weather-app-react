// react-redux components and modules
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import local components
import Weather from '../components/weather';
// Import Swiper styles
import 'swiper/css/bundle';

// store redux
import { getForecastAction } from '../redux/reducers';

const Home = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.location);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      dispatch(getForecastAction(value));
    }
    document.getElementById('location-imput').value = '';
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
      {data
        ? (
          <Swiper
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((child, index) => (
              <SwiperSlide key={child.Key}>
                <Weather index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
        : <Weather index={0} />}
    </div>
  );
};
export default Home;
