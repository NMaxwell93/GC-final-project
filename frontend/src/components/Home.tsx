import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "./Home.css";


function Home() {


  return (
    <div className="Home">
      <h3>Choose your game!</h3>
      <div className="eighties">
        <Link to="/game/3sfMNERLMuy8QQXb20RywT">80's Playlist</Link>
      </div>
      <div className="nineties">      
        <Link to="/game/3RStcFzMl3qokh8cTzE1wK">90's Playlist</Link>
      </div>
      <div className="aughts">
        <Link to="/game/20924Ice6nj3fi9GBX1Nkl">00's Playlist</Link>
      </div>
      <div className="twentytens">
        <Link to="/game/7BEk3inUCfgSfuHI2KwtBc">2010's Playlist</Link>
      </div>
    </div>
  );
}

export default Home;
