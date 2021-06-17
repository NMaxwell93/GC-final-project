import { useEffect, useContext } from 'react';
import {Game} from '../model/Game';
import { createGame } from '../service/MongoService';
import './PostGame.css';
import { AuthContext } from "../context/auth-context";
import { NavLink } from 'react-router-dom';

interface Props {
    score: number;
    playlist: string;
    playlistId: string;
}

function PostGame({score, playlist, playlistId}: Props) {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        handleAddShoutOut(addedGame)
      });

    const addedGame: Game = {
        user_uid: user?.uid!,
        user_displayName: user?.displayName!,
        playlist: playlist,
        playlistId: playlistId,
        score: score
    } 

    function handleAddShoutOut(addedGame: Game): void {
        createGame(addedGame);
      }

    return(
        <div className="PostGame">
            <p>You got {score} out of 10!</p>
            <NavLink to="/"><button className="PlayAgain">Play Again!</button></NavLink>
        </div>
    )
}

export default PostGame;