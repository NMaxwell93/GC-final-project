import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Playlist, Data, Track } from "../model/Playlist";
import { findPlaylist, getToken } from "../service/SpotifyApiService";
import "./Home.css";
import PlaylistDisplayTest from "./testing";

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
      <form className="GameForm" onSubmit={handleSubmit}>
        <button onClick={() => selectPlaylist()}> Playlist 1 </button>
        <label><input type="radio" value="5T5d1RHKEYGpm75Th6gFd8" onChange={e => setPlaylist(e.target.value)}/>80s playlist button</label>
        {/* <button onClick={e => setPlaylist("5T5d1RHKEYGpm75Th6gFd8")}> Playlist 2 </button>
        <button onClick={e => setPlaylist("5T5d1RHKEYGpm75Th6gFd8")}> Playlist 3 </button>
        <button onClick={e => setPlaylist("5T5d1RHKEYGpm75Th6gFd8")}> Playlist 4 </button> */}
        <button type="submit">Play Game!</button>
      </form>
      <div className="testDiv">
        { submittedPlaylist !== "" &&
        <PlaylistDisplayTest playlistId={submittedPlaylist}/>
        }
      </div>
    </div>
  );
}

export default Main;
