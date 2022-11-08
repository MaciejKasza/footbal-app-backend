import express from "express";
import { getAllGames, updateDB } from "../constrolers/gameController.js";

const router = express.Router();

// get all games
router.get("/", getAllGames);
//add mathce to db
router.get("/getGamesFromAPI", updateDB);

export default router;
