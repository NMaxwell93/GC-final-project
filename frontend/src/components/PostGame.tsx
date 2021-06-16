import { useEffect, useContext } from 'react';
import {Game} from '../model/Game';
import { createGame } from '../service/MongoService';
import './PostGame.css';
import { AuthContext } from "../context/auth-context";

interface Props {
    score: number;
    playlist: string;
}

function PostGame({score, playlist}: Props) {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        handleAddShoutOut(addedGame)
      });

    const addedGame: Game = {
        user_uid: user?.uid!,
        user_displayName: user?.displayName!,
        playlist: playlist,
        score: score
    } 

    function handleAddShoutOut(addedGame: Game): void {
        createGame(addedGame);
      }

    return(
        <div className="PostGame">
            <p>You got {score} out of 10!</p>
        </div>
    )
}

export default PostGame;