import { useEffect, useState } from "react";
import { Playlist, Token, Track } from "../model/Playlist";
import { findPlaylist, getToken } from "../service/SpotifyApiService";
import ReactAudioPlayer from "react-audio-player";
import "./Main.css";

function Main() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [token, setToken] = useState<Token>();

  useEffect(() => {
    // loadToken();
    loadPlaylist();
    console.log(getToken())
  }, []);
  
//   function loadToken() {
//     getToken().then((gotToken) => {
//       setToken(gotToken);
      
//       console.log(token);
//     });
//   }

  function loadPlaylist() {
    findPlaylist().then((PlaylistFromApi) => {
      setPlaylist(PlaylistFromApi);
      
      console.log(PlaylistFromApi);
    });
  }

  return (
    <div className="Main">
      <h1>GAME</h1>
      <p> {playlist?.data.name} </p>
      <p>  </p>
      <ReactAudioPlayer src={playlist?.data.tracks.items[0].track.preview_url} controls />
    </div>
  );
}

export default Main;
