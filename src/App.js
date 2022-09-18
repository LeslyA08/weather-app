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


// const getWeather = (event) => {
//   if (event.key === 'Enter') {
//     Promise.all([
//       fetch(`http://localhost:3330/${location}`),
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9636a0d670bb028a34afd3c82ff192b5`)
//     ])
//   .then((response) => {
//     return Promise.all(response.map(response.json()))
//   })
//   .then(data => {
//     setWeather(data)
//   })
// }
//   setLocation('')
// }

const handleSubmit = () => {
  fetch('http://localhost:3330/', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(weather)
  }).then(() => {
    console.log('new weather added')
  })
}



  return (
    <>
    <div>
      <input
      onSubmit = {handleSubmit}
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

        {weather.name != undefined && 
        <div>
        <h3>Feels Like</h3>
        {weather.main ? <p>{weather.main.feels_like}°F</p> : null}
        <h3>Humidity</h3>
        {weather.main ? <p>{weather.main.humidity}%</p> : null}
        <h3>Wind Speed</h3>
        {weather.wind ? <p>{weather.wind.speed} MPH</p> : null}
        </div>
        }
        
      </div>
    </>
  )
};

export default App;
