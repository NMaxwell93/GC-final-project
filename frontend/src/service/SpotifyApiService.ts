import axios from "axios";
import { Playlist } from "../model/Playlist";

// const baseUrl = process.env.SPOTIFY_APP_API_URL || "";
// if (!baseUrl) {
//   console.error("SPOTIFY_APP_API_URL environment variable not set.");
// }

// export function findPlaylist():Promise<Playlist> {
//     return axios.get(`${baseUrl}5T5d1RHKEYGpm75Th6gFd8`).then(res => res.data);
//   }


export function findPlaylist():Promise<Playlist> {
    return axios.get('https://api.spotify.com/v1/playlists/5T5d1RHKEYGpm75Th6gFd8', {
        headers: {
            'Authorization': 'Bearer BQBIeyPOj3K2fF9FGmzEGn2XThe84mKsW5s-V0sWDVKCtaG08s25O4E9KoqMkk_1tX8E0V8hRSJARTSRQz8'
        }
    })
 }