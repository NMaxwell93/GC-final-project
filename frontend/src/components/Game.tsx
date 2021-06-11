import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Data, Items, Playlist, Track } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import "./Game.css";


interface RouteParams {
    playlistId: string;
}

function Game() {
    const { playlistId } = useParams<RouteParams>(); 
    const [ gamePlaylist, setGamePlaylist ] = useState<Playlist>();
    const [ playGame, setPlayGame ]= useState(false);
    const [ trackNumber, setTrackNumber ]= useState(0);
    
    // Loads playlist first
    useEffect(() => {
        loadPlaylist();
        generateTrackIndex();
      }, [playlistId]);
    
    // Function that runs API call 
    function loadPlaylist() {
        findPlaylist(playlistId).then((results) => {
            // Stores API call results in state
            setGamePlaylist(results);
            console.log(results)
        });
      }

    // Creates random number for index for song in track array
    function generateTrackIndex() {
        setPlayGame(true);
        // var playListLength = gamePlaylist?.data.tracks.items.length;
        setTrackNumber( Math.floor(Math.random() * 100));
        console.log(trackNumber);
            return trackNumber;
      }

    return (
        <div className="Game">
        <div className="Home">      
            <Link to="/">Home</Link>
        </div>
            {gamePlaylist?.data.name}
            <div className="audio-player">
                <div className="track-info">
                    <img className="artwork" src={gamePlaylist?.data.images[0].url} alt={`track artwork for ${gamePlaylist?.data.tracks.items[0].track.name} by ${gamePlaylist?.data.tracks.items[0].track.artists[0].name}`} />
                    <button onClick={() => generateTrackIndex()}>Play Game</button>
                    { playGame &&
                        <div>
                            <h2 className="title">{gamePlaylist?.data.tracks.items[trackNumber].track.name}</h2>
                            <h3 className="artist">{gamePlaylist?.data.tracks.items[trackNumber].track.artists[0].name}</h3>
                            <audio src={gamePlaylist?.data.tracks.items[trackNumber].track.preview_url} controls ></audio>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Game;