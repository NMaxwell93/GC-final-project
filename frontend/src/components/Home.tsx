import { Link, NavLink } from 'react-router-dom'
import "./Home.css";
import Leaderboard from './Leaderboard';


function Home() {


  return (
    <div className="Home">
      <div className="eighties">
        <button><NavLink to="/game/3sfMNERLMuy8QQXb20RywT">80's Playlist</NavLink></button>
      </div>
      <div className="nineties">      
        <button><NavLink to="/game/3RStcFzMl3qokh8cTzE1wK">90's Playlist</NavLink></button>
      </div>
      <div className="aughts">
        <button><NavLink to="/game/20924Ice6nj3fi9GBX1Nkl">00's Playlist</NavLink></button>
      </div>
      <div className="twentytens">
        <button><NavLink to="/game/7BEk3inUCfgSfuHI2KwtBc">2010's Playlist</NavLink></button>
      </div>
      <Leaderboard/>
    </div>
  );
}

export default Home;
