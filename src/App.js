import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('')



const getWeather = (event) => {
  if (event.key === 'Enter') {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9636a0d670bb028a34afd3c82ff192b5`)
  .then((response) => {
    return response.json()
  })
  .then(data => {
    setWeather(data)
  })
}
  setLocation('')
}


  return (
    <>
    <div>
      <input
      defaultValue={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress= {getWeather}
      placeholder='Enter Location'
      type="text"
      />
    </div>
      <div>
        <h1 className="name">{weather.name}</h1>
        {weather.main ? <p >{weather.main.temp}°F</p> : null}
        {weather.weather ? <p>{weather.weather[0].main}</p> : null}
        <p>Feels Like</p>
        {weather.main ? <p>{weather.main.feels_like}°F</p> : null}
        <p>Humidity</p>
        {weather.main ? <p>{weather.main.humidity}%</p> : null}
        <p>Wind Speed</p>
        {weather.wind ? <p>{weather.wind.speed} MPH</p> : null}
      </div>
    </>
  )
};

export default App;
