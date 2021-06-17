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
            console.log(selectedLeaderboard)
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
            {/* <button onClick={() => loadPlaylistLeaderboard("3sfMNERLMuy8QQXb20RywT")}>80's Playlist</button>
            <button>80's Playlist</button>
            <button>80's Playlist</button>
            <button>80's Playlist</button> */}
            <h3 className="LeaderboardHeader" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>LEADERBOARD</h3>
            {topFiveUsers.map(eachUser => 
            <p key={eachUser._id}> {eachUser.displayName} - {eachUser.total} POINTS </p>
        )}
        </div>
    )
}

export default Leaderboard;