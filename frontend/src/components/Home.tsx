import { NavLink } from 'react-router-dom'
import "./Home.css";
import Leaderboard from './Leaderboard';


function Home() {


  return (
    <div className="Home">
      <div className="playlistButtons">

      <div className="sixties">
        <NavLink to="/game/3sfMNERLMuy8QQXb20RywT"><button type="button">60s Playlist</button></NavLink>
      </div>
      <div className="seventies">
        <NavLink to="/game/3sfMNERLMuy8QQXb20RywT"><button>70s Playlist</button></NavLink>
      </div>
      <div className="eighties">
        <NavLink to="/game/3sfMNERLMuy8QQXb20RywT"><button>80s Playlist</button></NavLink>
      </div>
      <div className="nineties">      
        <NavLink to="/game/3RStcFzMl3qokh8cTzE1wK"><button>90s Playlist</button></NavLink>
      </div>
      {/* <div className="aughts">
        <button><NavLink to="/game/1udqwx26htiKljZx4HwVxs">00's Playlist</NavLink></button>
      </div>
      <div className="twentytens">
        <button><NavLink to="/game/7BEk3inUCfgSfuHI2KwtBc">2010's Playlist</NavLink></button>
      </div> */}
       {/* <Leaderboard/> */}
      </div>
    </div>
  );
}


export default Home;
