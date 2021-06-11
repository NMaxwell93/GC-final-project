import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Playlist, Data, Track } from "../model/Playlist";
import { findPlaylist, getToken } from "../service/SpotifyApiService";
import "./Home.css";


function Main() {
  const [playlist, setPlaylist] = useState("");
  const [submittedPlaylist,setSubmittedPlaylist] = useState("")

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    setSubmittedPlaylist(playlist);
  }

  function selectPlaylist(){
    setPlaylist("5T5d1RHKEYGpm75Th6gFd8")
    console.log(playlist)
  }

  return (
    <div className="Main">
      <h3>Choose your game!</h3>
      <Link to="/game/5T5d1RHKEYGpm75Th6gFd8">80's Playlist</Link>
      <Link to="/game/3RStcFzMl3qokh8cTzE1wK">90's Playlist</Link>

    </div>
  );
}

export default Main;
