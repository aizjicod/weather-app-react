import { NavLink } from 'react-router-dom';

const Warning = () => (
  <>
    <div className="warning-popup">
      <h2>Warning: please read this thoughtfully before you enter the page </h2>
      <p>
        before clicking the button bellow this page
        will have acces to your location in order to get the
        place where you are located.
      </p>
      <button type="button">
        <NavLink to="/home">home</NavLink>
      </button>
    </div>
  </>
);

export default Warning;
