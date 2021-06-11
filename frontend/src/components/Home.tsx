import { useEffect, useState } from "react";
import { Playlist, Data, Track } from "../model/Playlist";
import { findPlaylist, getToken } from "../service/SpotifyApiService";
import "./Home.css";

function Main() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);


  useEffect(() => {
    loadPlaylist();
  }, []);
  

  function loadPlaylist() {
    findPlaylist().then(playlistFromApi => {
      setPlaylist(playlistFromApi);
    });
  }

  return (
    <div className="Main">
      <h3>Home</h3>
      <button> {playlist?.data.name} </button>
      <p>  </p>
      {/* <ReactAudioPlayer src={playlist?.data.tracks.items[0].track.preview_url} controls /> */}
    </div>
  );
}

export default Main;
