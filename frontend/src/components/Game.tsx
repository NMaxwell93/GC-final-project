import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Artist, Playlist } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import AudioPlayer from "./AudioPlayer";
import "./Game.css";


interface RouteParams {
    playlistId: string;
}

function Game() {
    const { playlistId } = useParams<RouteParams>(); 
    const [ gamePlaylist, setGamePlaylist ] = useState<Playlist>();
    const [ playGame, setPlayGame ]= useState(false);
    const [ trackNumber, setTrackNumber ]= useState(0);
    const [ artistArray, setArtistArray] = useState([""]);
    const [choices, setChoices] = useState([""]);
    
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
            
            for (let artist of results.data.tracks.items) {
                artistArray.push(artist.track.artists[0].name)
            }
            console.log(artistArray)
        });
      }

    // Creates random number for index for song in track array
    function generateTrackIndex() {
        setPlayGame(true);
        // var playListLength = gamePlaylist?.data.tracks.items.length;
        setTrackNumber( Math.floor(Math.random() * 34));
        choices.push(artistArray[trackNumber]);
        for (let i = 0; i <= 2; i++) {
            choices.push(artistArray[Math.floor(Math.random() * artistArray.length) + 1])
        }
    console.log(choices);
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
                <AudioPlayer trackNumber={trackNumber} gamePlaylist={gamePlaylist!} nextTrack={() => generateTrackIndex()} choices={choices} />
                </div>
            </div>
        </div>
    )
}

export default Game;