import './App.css';
import {useState, useEffect} from 'react';
import Button from "./components/Button/Button"
import WeatherContainer from "./components/WeatherContainer/WeatherContainer"


function App() {
  const [weather, setWeather] = useState([]);

  const getWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=9636a0d670bb028a34afd3c82ff192b5")
    .then((response) => {
      return response.json()
    })
    .then(data => {
      setWeather(data.response)
    })
  };


  return (
    <>
      <div>
        <h1 className="name">Dallas</h1>
        <p className="temperature">60 degrees F</p>
        <p className="description">Clouds</p>
        <p className="feelsLike">65 degrees F</p>
        <p className="humidity">20%</p>
        <p className="wind"> 12 MPH</p>
      </div>
    </>
  )
};

export default App;
