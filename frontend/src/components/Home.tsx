import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import "./Home.css";
import Leaderboard from './Leaderboard';


function Home() {
  const [ userInput, setUserInput ] = useState("")



  return (
    <div className="Home">
      <div className="playlistButtons">
        <div className="sixties">
          <NavLink to="/game/37i9dQZF1DXaKIA8E7WcJj?si"><button type="button">60s Playlist</button></NavLink>
        </div>
        <div className="seventies">
          <NavLink to="/game/37i9dQZF1DWTJ7xPn4vNaz"><button>70s Playlist</button></NavLink>
        </div>
        <div className="eighties">
          <NavLink to="/game/37i9dQZF1DX4UtSsGT1Sbe"><button>80s Playlist</button></NavLink>
        </div>
        <div className="nineties">      
          <NavLink to="/game/37i9dQZF1DXbTxeAdrVG2l"><button>90s Playlist</button></NavLink>
        </div>
      </div>
      <div className="userInputContainer">
          <label className="userInput"> Try your own Spotify Playlist: 
          <input type="text" onChange={(e) => setUserInput(e.target.value.substr(34, 56))} placeholder="Insert Playlist URL" />
          </label>
          <NavLink to={`/game/${userInput}`}><button>Submit</button></NavLink>
        </div>
    </div>
  );
}


export default Home;
