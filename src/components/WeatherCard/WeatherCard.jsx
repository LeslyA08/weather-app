import "./WeatherCard.scss"

const WeatherCard = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.main.temp}</p>
            <p>{props.main.humidity}</p>
        </div>
    )
}

export default WeatherCard;
