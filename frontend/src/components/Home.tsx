import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "./Home.css";


function Main() {


  return (
    <div className="Main">
      <h3>Choose your game!</h3>
      <div className="nineties">      
        <Link to="/game/3RStcFzMl3qokh8cTzE1wK">90's Playlist</Link>
      </div>
      <div className="eighties">
        <Link to="/game/5T5d1RHKEYGpm75Th6gFd8">80's Playlist</Link>
      </div>
      <div className="twentytens">
        <Link to="/game/0kNRFezc2Rto8dMeQio74m">2010's Playlist</Link>
      </div>
      <div className="twenty">
        <Link to="/game/5ytiKjhwdNp0zjRPHB7opA">00's Playlist</Link>
      </div>
      
    </div>
  );
}

export default Main;
