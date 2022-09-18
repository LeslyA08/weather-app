import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/weather.js';
import cors from 'cors'
import { sequelize } from "./db/index.js"

const app = express();

const port = process.env.PORT || 3330;

sequelize.sync()
.then((result => {
    console.log(result)
}))
.catch(err => {
    console.log(err)
});

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
});

app.use(bodyParser.json());

app.use("/", router);

