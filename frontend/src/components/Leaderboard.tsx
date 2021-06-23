import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TopFiveByPlaylist, TopFiveUsers} from "../model/Game";
import { playlistLeaderboard, topFive } from "../service/MongoService";
import "./Leaderboard.css";

interface RouteParams {
    playlistId?: string;
  }


function Leaderboard() {
    const { playlistId } = useParams<RouteParams>();
    const [topFiveUsers, setTopFiveUsers] = useState<TopFiveUsers[]>([]);
    const [selectedLeaderboard, setSelectedLeaderboard] = useState<TopFiveByPlaylist[]>([]);
    const [ userInput, setUserInput ] = useState("")


    useEffect(() => {
        if (playlistId) {
            loadPlaylistLeaderboard(playlistId)

        } else {
            loadLeaderboard();
        }
    },[playlistId])

    function resetLeaderboardTrue() {
        setSelectedLeaderboard([])
    }

    function loadPlaylistLeaderboard(playlistId: string) {
        playlistLeaderboard(playlistId!).then(topFivePlaylist => {
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
            <div className="PlaylistButtonContainer">
            <div className="LeaderboardPlaylistButtons">
                <NavLink to="/leaderboard/37i9dQZF1DWSV3Tk4GO2fq"><button>50s Playlist</button></NavLink>
                <NavLink to="/leaderboard/37i9dQZF1DXaKIA8E7WcJj"><button>60s Playlist</button></NavLink>
                <NavLink to="/leaderboard/37i9dQZF1DWTJ7xPn4vNaz"><button>70s Playlist</button></NavLink>
                <NavLink to="/leaderboard/37i9dQZF1DX4UtSsGT1Sbe"><button>80s Playlist</button></NavLink>
                <NavLink to="/leaderboard/37i9dQZF1DXbTxeAdrVG2l"><button>90s Playlist</button></NavLink>
                <NavLink to="/leaderboard/37i9dQZF1DX4o1oenSJRJd"><button>00s Playlist</button></NavLink>
                <NavLink to="/leaderboard/37i9dQZF1DX5Ejj0EkURtP"><button>10s Playlist</button></NavLink>
                <NavLink to="/leaderboard/1UUCxq5cYwrh9tZNMujWlO"><button>20s Playlist</button></NavLink>
                <NavLink to="/leaderboard"><button onClick={() => resetLeaderboardTrue()}>Best Overall</button></NavLink>
            </div>
            <div className="userInputContainerLB">
                <label className="userInput"> See Leaderboard for any Spotify playlist:
                <input type="text" onChange={(e) => setUserInput(e.target.value.substr(34, 56))} placeholder="Insert Playlist URL" />
                </label>
                <div className="userInputSubmit">
                    <NavLink to={`/leaderboard/${userInput}`}><button>Submit</button></NavLink>
                </div>
                </div>
            </div>
          
            
            <h3 className="LeaderboardHeader" style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
            { selectedLeaderboard[0] === undefined ?
            <p className="LeaderboardHeader" style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>LEADERBOARD</p> :
            <span>{selectedLeaderboard[0]._id?.playlist} LEADERBOARD</span> 
            }
            </h3>
            
            {topFiveUsers.map(eachUser => 
            <p key={eachUser._id}>
                {eachUser.displayName ? 
                    <span> {eachUser.displayName}</span> : 
                    <span>Guest</span>
                }  - {eachUser.total} POINTS </p>
            )}
            {selectedLeaderboard.map((eachUser, i) => <p key={i}> 
                { eachUser._id?.userName ? 
                    <span> {eachUser._id.userName}</span> : 
                    <span>Guest</span>
                }  - {eachUser.total} POINTS </p>
            )}
        </div>
    )
}

export default Leaderboard;