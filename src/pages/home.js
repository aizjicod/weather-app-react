import Weather from '../components/weather';

const Home = () => (
  <div className="container">
    <label htmlFor="location-imput" className="label-location">
      Select your country/state
      <input type="text" id="location-imput" />
    </label>
    <Weather />
  </div>
);
export default Home;
