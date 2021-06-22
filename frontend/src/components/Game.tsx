import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { Playlist } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";
import AudioPlayer from "./AudioPlayer";
import "./Game.css";
import PostGame from "./PostGame";

interface RouteParams {
  playlistId: string;
}

function Game() {
  const { playlistId } = useParams<RouteParams>();
  const [gamePlaylist, setGamePlaylist] = useState<Playlist | null>(null);
  const [playGame, setPlayGame] = useState(false);
  const [trackNumber, setTrackNumber] = useState(-1);
  const [artistArray, setArtistArray] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [playedCount, setPlayedCount] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(5);
  const [answerColorChange, setAnswerColorChange] = useState("Start")

  const reset = () => {
      setTime(5);
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
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
    }
  });

  // Loads playlist first
  useEffect(() => {
    loadPlaylist(playlistId);
  }, [playlistId]);

  // Function that runs API call
  function loadPlaylist(playlistId:string) {
    findPlaylist(playlistId).then((results) => {
      let filteredPlaylistArray = results.data.tracks.items.filter(song => song.track.preview_url !== null);
      results.data.tracks.items = filteredPlaylistArray
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
    let updateTrackNumber = Math.floor(Math.random() * gamePlaylist!.data.tracks.items.length);
    console.log(gamePlaylist!.data.tracks.items.length);
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
            setScore(updateScore);
            setAnswerColorChange("Correct")
        } else {
          setAnswerColorChange("Wrong")
  }
}
     

  return (
    <div className="Game">
      {gamePlaylist?.data.name}
      {playedCount === 0 &&
      <>
      <img className="artwork"src={gamePlaylist?.data.images[0].url}alt={`track artwork for ${gamePlaylist?.data.tracks.items[0].track.name} by ${gamePlaylist?.data.tracks.items[0].track.artists[0].name}`}/>
      <button onClick={() => generateTrackIndex()}>Play Game</button>
      </>}
      {playedCount === 1 &&
      <>
      <img className="artwork"src={gamePlaylist?.data.images[0].url}alt={`track artwork for ${gamePlaylist?.data.tracks.items[0].track.name} by ${gamePlaylist?.data.tracks.items[0].track.artists[0].name}`}/>
      <p>Get Ready!</p>
      <p> {time} </p>
      </>
      }
      {trackNumber > -1 && playedCount <= 11 && playedCount > 1 && 
        <div className="GameContainer ">
          <div className="audio-player">
            <div className="track-info">
              <img className="artwork"src={gamePlaylist?.data.images[0].url}alt={`track artwork for ${gamePlaylist?.data.tracks.items[0].track.name} by ${gamePlaylist?.data.tracks.items[0].track.artists[0].name}`}/>
                <p className="Timer">{time}</p>
              <AudioPlayer trackNumber={trackNumber}gamePlaylist={gamePlaylist!} />
              <p className={"Score " + answerColorChange}> Score: {score} </p>
            </div>
          </div>
          <div className="ArtistChoices">
            <button onClick={() => {checkAnswer(0);generateTrackIndex(); reset();}}>{choices[0]}</button>
            <button onClick={() => {checkAnswer(1);generateTrackIndex(); reset();}}>{choices[1]}</button>
            <button onClick={() => {checkAnswer(2);generateTrackIndex(); reset();}}>{choices[2]}</button>
            <button onClick={() => {checkAnswer(3);generateTrackIndex(); reset();}}>{choices[3]}</button>
          </div>
        </div>
      }
      {playedCount > 11 && 
        <PostGame score={score} playlist={gamePlaylist!.data.name} playlistId ={gamePlaylist!.data.id} />

      }
    </div>
  );
}

export default Game;
