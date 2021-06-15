import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
import { Artist, Playlist } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import AudioPlayer from "./AudioPlayer";
import "./Game.css";


interface RouteParams {
    playlistId: string;
}

function Game() {
    const { playlistId } = useParams<RouteParams>(); 
    const [ gamePlaylist, setGamePlaylist ] = useState<Playlist | null >(null);
    const [ playGame, setPlayGame ]= useState(false);
    const [ trackNumber, setTrackNumber ]= useState(-1);
    const [ artistArray, setArtistArray] = useState<string[]>([]);
    const [choices, setChoices] = useState<string[]>([]);
    
    // Loads playlist first
    useEffect(() => {
        loadPlaylist();
      }, [playlistId]);
    
    // Function that runs API call 
    function loadPlaylist() {
        findPlaylist(playlistId).then((results) => {
            // Stores API call results in state
            setGamePlaylist(results);
            const newArtistArray = [];
            for (let artist of results.data.tracks.items) {
                newArtistArray.push(artist.track.artists[0].name)
            }
            console.log(newArtistArray);
            setArtistArray(newArtistArray);
        });
      }

    

    // Creates random number for index for song in track array
    function generateTrackIndex() {
        setPlayGame(true);
        let updateTrackNumber = ( Math.floor(Math.random() * 34));
        setTrackNumber(updateTrackNumber);
        generateChoices(updateTrackNumber);
    }

    function generateChoices(trackNumber: number) {
        if (gamePlaylist === null || trackNumber === -1 ){
            return;
        }

        let newChoiceArray: string[]= [];
        newChoiceArray.push(gamePlaylist.data.tracks.items[trackNumber].track.artists[0].name);
        let filteredArtistArray = artistArray.filter(artist => artist !== gamePlaylist?.data.tracks.items[trackNumber].track.artists[0].name);
        filteredArtistArray = _.shuffle(filteredArtistArray);
        
        newChoiceArray.push(...filteredArtistArray.slice(0,3));
        newChoiceArray = _.shuffle(newChoiceArray);


        setChoices(newChoiceArray);
        console.log(newChoiceArray);
    }


    return (
        <div className="Game">
        <div className="Home">      
            <Link to="/">Home</Link>
        </div>
        <button onClick={() => generateTrackIndex()}>Play Game</button>

            {gamePlaylist?.data.name}
            
            {
            trackNumber > -1 && 
            <div> 
                <div className="audio-player">
                    <div className="track-info">
                    <img className="artwork" src={gamePlaylist?.data.images[0].url} alt={`track artwork for ${gamePlaylist?.data.tracks.items[0].track.name} by ${gamePlaylist?.data.tracks.items[0].track.artists[0].name}`} />

                <AudioPlayer trackNumber={trackNumber} gamePlaylist={gamePlaylist!} nextTrack={() => generateTrackIndex()} choices={choices} />
                </div>
            </div>
            <div className="ArtistChoices">
            <button>{choices[0]}</button>
            <button>{choices[1]}</button>
            <button>{choices[2]}</button>
            <button>{choices[3]}</button>
            </div>
            
            </div>
            }
        </div>
    )
}

export default Game;