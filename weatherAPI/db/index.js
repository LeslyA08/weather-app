import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("weather_app_uploader", "root", "password", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false   
    }
});