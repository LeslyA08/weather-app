import { Router } from "express";
import { postWeatherModel, getWeatherByName, deleteWeatherByName } from "../controllers/weatherController.js";

const router = Router();

router.get('/:name', getWeatherByName);
router.post('/', postWeatherModel);
router.delete('/delete/:name', deleteWeatherByName)


export default router;