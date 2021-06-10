import { useEffect, useState } from "react";
import { Playlist, Track } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import "./Main.css"

function Main() {
    const [ playlist, setPlaylist ] = useState<Playlist>();
    const [ track, setTrack ] = useState<Track>();
    
    useEffect(() => {
        loadPlaylist();
    }, []);

    function loadPlaylist() {
        findPlaylist().then(PlaylistFromApi => {
            setPlaylist(PlaylistFromApi);
            console.log(PlaylistFromApi)
          }); 
    }

    return (

        <div className="Main">
            <h1>GAME</h1>
            <p> {playlist?.name} </p>
            <p> {track?.name} </p>
        </div>
    )
}

export default Main;