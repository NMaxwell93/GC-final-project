import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import MeetTheDevelopers from "./components/MeetTheDevelopers";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/game/:playlistId">
            <Game />
          </Route>
        <Route path="/meet-the-developers">
            <MeetTheDevelopers/>            
          </Route>
          <Route path="/">
            <Home />
            <Leaderboard />
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
