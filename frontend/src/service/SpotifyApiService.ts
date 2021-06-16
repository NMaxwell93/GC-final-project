import axios from "axios";
import { Playlist, PromiseResult } from "../model/Playlist";


const spotifyCredentials: string = process.env.REACT_APP_SPOTIFY_API_CREDENTIALS || "";
const credentials = btoa(spotifyCredentials);

export function getToken(): Promise<PromiseResult> {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  return axios.post(`https://accounts.spotify.com/api/token`, params, {
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });
}

export function findPlaylist(playlistId:string): Promise<Playlist> {
  const accessTokenPromise = getToken().then(result => (result.data.access_token));
  return accessTokenPromise.then( accessToken => {
    return axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization:
            `Bearer ${accessToken}`,
        },
      }
    );
  });
}

