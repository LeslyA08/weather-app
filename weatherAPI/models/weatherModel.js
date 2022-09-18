import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const weatherModel = sequelize.define("weathers", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    temp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    weather: {
        type: Sequelize.STRING,
        allowNull: false
    },
    feels_like: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    humidity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    speed: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
});