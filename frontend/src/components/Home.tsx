import { NavLink } from 'react-router-dom'
import "./Home.css";
import Leaderboard from './Leaderboard';


function Home() {


  return (
    <div className="Home">
      <div className="playlistButtons">

      <div className="fifties">
        <NavLink to="/game/37i9dQZF1DWSV3Tk4GO2fq"><button type="button">50s Playlist</button></NavLink>
      </div>
      <div className="sixties">
        <NavLink to="/game/37i9dQZF1DXaKIA8E7WcJj"><button type="button">60s Playlist</button></NavLink>
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
      <div className="twothousands">      
        <NavLink to="/game/37i9dQZF1DX4o1oenSJRJd"><button>00s Playlist</button></NavLink>
      </div>
      <div className="twothousandten">      
        <NavLink to="/game/37i9dQZF1DX5Ejj0EkURtP"><button>10s Playlist</button></NavLink>
      </div>
      <div className="twentytwenty">      
        <NavLink to="/game/1UUCxq5cYwrh9tZNMujWlO"><button>20s Playlist</button></NavLink>
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
