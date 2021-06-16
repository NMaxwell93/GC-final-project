import axios from "axios";
import { Game, TopFiveByPlaylist, TopFiveUsers } from "../model/Game";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function createGame(game: Game): Promise<Game> {
  return axios.post(baseUrl, game).then((res) => res.data);
}

export function topFive(): Promise<TopFiveUsers[]> {
  return axios.get(`${baseUrl}/leaderboard`).then((res) => res.data);
}

export function getTopFiveByPlaylist(playlist: string): Promise<TopFiveByPlaylist[]> {
  return axios.get(`${baseUrl}/leaderboard/`, {params: { playlist: playlist },}).then((res) => res.data);
}
