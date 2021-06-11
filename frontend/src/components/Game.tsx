import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data, Playlist } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import "./Game.css";


interface RouteParams {
    playlistId: string;
}

function Game() {
    const { playlistId } = useParams<RouteParams>(); 
    const [gamePlaylist, setGamePlaylist] = useState<Playlist>();

    useEffect(() => {
        loadPlaylist();
      }, [playlistId]);
    
      function loadPlaylist() {
        findPlaylist(playlistId).then((results) => {
          setGamePlaylist(results);
          console.log(playlistId)
        });
      }
      //let audioObj = new Audio(gamePlaylist?.data.tracks.items[0].track.preview_url);

    return (
        <div className="Game">
            <p>Hello</p>
            {gamePlaylist?.data.name}
        </div>
    )
}

export default Game;