import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('')

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=9636a0d670bb028a34afd3c82ff192b5`)
    .then((response) => {
      return response.json()
    })
    .then(data => {
      setWeather(data)
    })
  };
  useEffect(() => {
    getWeather()
  }, []);


  return (
    <>
      <div>
        <h1 className="name">{weather.name}</h1>
        <p className="temperature">60 degrees F</p>
        <p className="description">Clouds</p>
        <p>Feels Like</p>
        <p className="feelsLike">65 degrees F</p>
        <p>Humidity</p>
        <p className="humidity">20%</p>
        <p>Wind Speed</p>
        <p className="wind"> 12 MPH</p>
      </div>
    </>
  )
};

export default App;
