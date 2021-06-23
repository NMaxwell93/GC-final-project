import axios from "axios";
import { Game, TopFiveByPlaylist, TopFiveUsers, UserInfo } from "../model/Game";

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

export function playlistLeaderboard(playlist: string): Promise<TopFiveByPlaylist[]> {
  return axios.get(`${baseUrl}/leaderboard/${playlist}`).then((res) => res.data);
}

export function getUserScore(userUID: string): Promise<UserInfo[]> {
  return axios.get(`${baseUrl}/userscore/${userUID}`).then((res) => res.data);
}