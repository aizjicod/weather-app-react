import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <>
      <header id="header">
        <img
          src="https://t4.ftcdn.net/jpg/02/08/71/11/360_F_208711141_ymlANprG8UDs1MLPioiOHZHEeVGbeO5S.jpg"
          alt="a cute cloud"
          className="header-img"
        />
        <h1 className="header-h1">Weather Today</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
