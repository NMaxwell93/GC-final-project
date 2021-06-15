import React, { useEffect, useState } from "react";
import { Playlist } from "../model/Playlist";
import "./AudioPlayer.css";


interface Props {
  trackNumber: number;
  gamePlaylist: Playlist;
  nextTrack: () => void;
  choices: string[];
}

function AudioPlayer({ trackNumber, gamePlaylist, nextTrack, choices }: Props) {
  const [time, setTime] = useState(4);

  const reset = () => {
      setTime(4);
  }
  
  const tick = () => {
    if (time === 0) {
      reset();
      nextTrack();
    } else {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() =>tick(), 1000);
    return () => clearInterval(timerId);
  });


  return (
    <div className="AudioPlayer">
      <h2 className="title">
        {gamePlaylist?.data.tracks.items[trackNumber].track.name}
      </h2>
      <h3 className="artist">
        {gamePlaylist?.data.tracks.items[trackNumber].track.artists[0].name}
      </h3>
      <button onClick={() => nextTrack()}>Next Track</button>
      <p> {time} </p>
      <audio src={gamePlaylist?.data.tracks.items[trackNumber].track.preview_url} controls ></audio>

    </div>

  );
}

export default AudioPlayer;
