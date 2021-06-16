import { useState } from "react";
import { useEffect } from "react";
import {TopFiveByPlaylist, TopFiveUsers} from "../model/Game";
import { getTopFiveByPlaylist, topFive } from "../service/MongoService";
import "./Leaderboard.css";



function Leaderboard() {
    const [topFiveUsers, setTopFiveUsers] = useState<TopFiveUsers[]>([]);
    const [selectedLeaderboard, setSelectedLeaderboard] = useState<TopFiveByPlaylist[]>([]);


    useEffect(() => {
        loadLeaderboard();
    },[])

    function loadPlaylistLeaderboard(playlistName:string) {
        getTopFiveByPlaylist(playlistName).then(topFivePlaylist => {
            setSelectedLeaderboard(topFivePlaylist)
        })
        setTopFiveUsers([]);
    }

    function loadLeaderboard() {
        topFive().then(topFiveApi => {
        setTopFiveUsers(topFiveApi);
        })
    }
    
    
    return (
        <div className="Leaderboard">
            <button onClick={() => loadPlaylistLeaderboard("This Is: The 80\'s")}>80's Playlist</button>
            <button>80's Playlist</button>
            <button>80's Playlist</button>
            <button>80's Playlist</button>
            {topFiveUsers.map(eachUser => 
            <p key={eachUser._id}> {eachUser.displayName} {eachUser.total} </p>
        )}
        </div>
    )
}

export default Leaderboard;