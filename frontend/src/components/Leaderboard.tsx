import { useState } from "react";
import { useEffect } from "react";
import {Game, TopFiveUsers} from "../model/Game";
import { topFive } from "../service/MongoService";
import "./Leaderboard.css";

function Leaderboard() {
    const [topFiveUsers, setTopFiveUsers] = useState<TopFiveUsers[]>([])

    useEffect(() => {
        loadLeaderboard();
    })

    function loadLeaderboard() {
        topFive().then(topFiveApi => {
            setTopFiveUsers(topFiveApi);
        })
    }
    
    
    return (
        <div className="Leaderboard">
            {topFiveUsers.map(eachUser => 
            <p key={eachUser._id}> {eachUser.displayName} {eachUser.total} </p>
        )}
        </div>
    )
}

export default Leaderboard;