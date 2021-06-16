import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import _ from "lodash";
import { Playlist } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import AudioPlayer from "./AudioPlayer";
import "./Game.css";
import PostGame from "./PostGame";
import { AuthContext } from "../context/auth-context";

interface RouteParams {
  playlistId: string;
}

function Game() {
  const { user } = useContext(AuthContext)
  const { playlistId } = useParams<RouteParams>();
  const [gamePlaylist, setGamePlaylist] = useState<Playlist | null>(null);
  const [playGame, setPlayGame] = useState(false);
  const [trackNumber, setTrackNumber] = useState(-1);
  const [artistArray, setArtistArray] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [playedCount, setPlayedCount] = useState(1);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(4);

  const reset = () => {
      setTime(4);
  }
  
  const tick = () => {
    if (playedCount > 11) {
      return;
    }
    if (time === 0) {
      reset();
      generateTrackIndex();
    } else {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    if (playGame === true) {
    const timerId = setInterval(() =>tick(), 1000);
    return () => clearInterval(timerId);
    }
  });

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
        newArtistArray.push(artist.track.artists[0].name);
      }
      setArtistArray(newArtistArray);
    });
  }

  // Creates random number for index for song in track array
  function generateTrackIndex() {
    setPlayGame(true);
    let updateTrackNumber = Math.floor(Math.random() * 34);
    setTrackNumber(updateTrackNumber);
    generateChoices(updateTrackNumber);
    setPlayedCount(prev => prev + 1);
  }

  function generateChoices(trackNumber: number) {
    if (gamePlaylist === null || trackNumber === -1) {
      return;
    }

    let newChoiceArray: string[] = [];
    newChoiceArray.push(
      gamePlaylist.data.tracks.items[trackNumber].track.artists[0].name
    );
    let filteredArtistArray = artistArray.filter(
      (artist) => artist !== gamePlaylist?.data.tracks.items[trackNumber].track.artists[0].name);
    filteredArtistArray = _.shuffle(filteredArtistArray);

    newChoiceArray.push(...filteredArtistArray.slice(0, 3));
    newChoiceArray = _.shuffle(newChoiceArray);

    setChoices(newChoiceArray);
    console.log(newChoiceArray);
  }

  function checkAnswer(choiceIndex:number) {
     
        if (choices[choiceIndex] === gamePlaylist?.data.tracks.items[trackNumber].track.artists[0].name) {
           let updateScore = score
            updateScore++ ; 
            setScore(updateScore)
            console.log(updateScore)
  }
}
     

  return (
    <div className="Game">
      <div className="Home">
        <NavLink to="/">Home</NavLink>
      </div>
      <button onClick={() => generateTrackIndex()}>Play Game</button>

      {gamePlaylist?.data.name}

      {trackNumber > -1 && playedCount <= 11 && (
        <div>
          <div className="audio-player">
            <div className="track-info">
              <img className="artwork"src={gamePlaylist?.data.images[0].url}alt={`track artwork for ${gamePlaylist?.data.tracks.items[0].track.name} by ${gamePlaylist?.data.tracks.items[0].track.artists[0].name}`}/>
                <p>{time}</p>
              <AudioPlayer trackNumber={trackNumber}gamePlaylist={gamePlaylist!} choices={choices}/>
              <p> Score: {score} </p>
            </div>
          </div>
          <div className="ArtistChoices">
            <button onClick={() => {checkAnswer(0);generateTrackIndex(); reset();}}>{choices[0]}</button>
            <button onClick={() => {checkAnswer(1);generateTrackIndex(); reset();}}>{choices[1]}</button>
            <button onClick={() => {checkAnswer(2);generateTrackIndex(); reset();}}>{choices[2]}</button>
            <button onClick={() => {checkAnswer(3);generateTrackIndex(); reset();}}>{choices[3]}</button>
          </div>
        </div>
      )}
      {playedCount > 11 && 
        <PostGame score={score} playlist={gamePlaylist!.data.name} />

      }
    </div>
  );
}

export default Game;
