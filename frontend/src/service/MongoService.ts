import axios from "axios";
import Game from "../model/Game";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function createGame(game: Game):Promise<Game> {
    return axios.post(baseUrl, game).then(res => res.data);
  }