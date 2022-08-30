import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherContainer.scss";

const WeatherContainer = (props) => {
    return (
        <div> 
            {props.weather.map((weather) => (
                <WeatherCard
                name={weather.name}
                temp={weather.main.temp}
                humidity={weather.main.humidity}
                />
            ))}
        </div>
    )
};

export default WeatherContainer;