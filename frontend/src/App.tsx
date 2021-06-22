import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/AboutUs">
            <AboutUs/>            
          </Route>
          <Route path="/game/:playlistId">
            <Game />
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
