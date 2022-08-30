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
      <h1> Random Weather Generator</h1>
      <Button onClick={getWeather} label="Get Random Weather" />
      <WeatherContainer weather={weather} />
    </>
  )
};

export default App;
