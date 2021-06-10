import axios from "axios";
import { StringDecoder } from "string_decoder";
import { Playlist, Data, PromiseResult, TokenPromise } from "../model/Playlist";

// const baseUrl = process.env.SPOTIFY_APP_API_URL || "";
// if (!baseUrl) {
//   console.error("SPOTIFY_APP_API_URL environment variable not set.");
// }

// export function findPlaylist():Promise<Playlist> {
//     return axios.get(`${baseUrl}5T5d1RHKEYGpm75Th6gFd8`).then(res => res.data);
//   }

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

  //     return axios.post(`https://accounts.spotify.com/api/token`, {
  //     headers: {
  //       Authorization:
  //         `Basic ${credentials}`,
  //         'Content-Type':'application/x-www-form-urlencoded'
  //     },
  //     data: {
  //       'grant_type': "client_credentials"
  //       }
  //   });
}

export function findPlaylist(tokenid: any): Promise<Playlist> {
  return axios.get(
    "https://api.spotify.com/v1/playlists/5T5d1RHKEYGpm75Th6gFd8",
    {
      headers: {
        Authorization:
          `Bearer ${tokenid}`,
      },
    }
  );
}

//  export const getAuth = async () => {
//     const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
//     const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;

//     const headers = {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       auth: {
//         username: clientId,
//         password: clientSecret,
//       },
//     };
//     const data = {
//       grant_type: 'client_credentials',
//     };

//     try {
//       const response = await axios.post(
//         'https://accounts.spotify.com/api/token',
//         qs.stringify(data),
//         headers
//       );
//       console.log(response.data.access_token);
//       return response.data.access_token;
//     } catch (error) {
//       console.log(error);
//     }
//   };
