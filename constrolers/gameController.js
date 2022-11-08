import User from "../models/User.js";
import Game from "../models/Game.js";
import fetch from "node-fetch";
import { getAllMatches } from "../utils/gamesApi.js";

const API_URL_GET_ALL_MATCHES = "http://api.cup2022.ir/api/v1/match";

export const getAllGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    next(err);
  }
};

export const updateDB = async (req, res, next) => {
  try {
    const gamesFromAPI = [];

    //get data form API
    await fetch(API_URL_GET_ALL_MATCHES, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.data.map((item) => {
          //   console.log(item._id);
          gamesFromAPI.push({
            id_api: item._id,
            home: item.home_team_en,
            away: item.away_team_en,
            home_goals: item.home_score,
            away_goals: item.away_score,
            group: item.group,
            date: item.local_date,
            type: item.type,
            status: item.finished,
          });
        });
        //   console.log(games); throw error
        return gamesFromAPI;
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Something went wrog!");
      });

    //get data form DB
    const gamesFromDB = await Game.find();

    //for each item in API, check item in DB, if exist update else crete new
    try {
      gamesFromAPI.forEach((game) => {
        if (gamesFromDB.some((item) => item.id_api === game.id_api)) {
          //update in DB
          Game.findOneAndUpdate({ id_api: game.id_api }, game);
          // console.log("update game");
        } else {
          //add to DB
          const g = new Game(game);
          g.save();
          // console.log("create new game");
        }
      });
    } catch (err) {
      res.status(500).send("Something went wrog!");
    }

    res.status(200).send("Update done!");
  } catch (err) {
    next(err);
  }
};
