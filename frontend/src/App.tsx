import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/game/:playlistId">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
