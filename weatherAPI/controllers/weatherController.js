import { weatherModel } from "../models/weatherModel.js";

export const postWeatherModel = (req, res) => {
    weatherModel.create({name: req.body.name, temp: req.body.temp, weather: req.body.weather, feels_like: req.body.feels_like, humidity: req.body.humidity, speed: req.body.humidity })
     .then(() => {
        res.status(201).send({message: "Created"});
     })
     .catch((err) => {
        console.log(err)
     });
};

export const getWeatherByName = (req, res) => {
    const name = req.params.name
    weatherModel.findOne({ where: { name: name }})
    .then(names => {
        res.status(200).send(names || `Weather with the name of ${name} not found`)
    })
    .catch(err => {
        console.log(err)
    })
};


export const deleteWeatherByName = (req, res) => {
    const name = req.params.name
    weatherModel.destroy({where: 
        {
            name: name
        },
        force: true
    })
    .then(() => {
        res.status(201).send({message: "Weather Deleted"})
    })
    .catch(err => {
        console.log(err)
    })
};