import fetch from "node-fetch";

const API_URL_GET_ALL_MATCHES = "http://api.cup2022.ir/api/v1/match";

export const getAllMatches = async () => {
  const games = [];

  fetch(API_URL_GET_ALL_MATCHES, {
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
        games.push({
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
      return games;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
