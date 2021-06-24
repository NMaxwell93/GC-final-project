import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import logo from '../assets/logo.svg'
import "./Header.css"
import {NavLink} from 'react-router-dom'
import { useState } from "react";
import { getUserScore } from "../service/MongoService";
import { UserInfo } from "../model/Game";



function Header() {
    const { user } = useContext(AuthContext);
    const [ userInfo, setUserInfo ] = useState<UserInfo[]>([]);

    useEffect(loadUserScore, [user]);

    function loadUserScore() {
        if (user) {
            getUserScore(user?.uid!).then(results => {
                setUserInfo(results)
            });
        } else {
            setUserInfo([]);
        }
    };

    return (
        <div className="Header">
            <NavLink to="/"><img src={logo} alt="logo"></img></NavLink>
            <div className="Navigation">
            <NavLink to="/leaderboard"><button className="LeaderboardButton">LeaderBoard</button></NavLink>
            { user && 
                    <div className="Header_user">
                        { !!user.photoURL && <img className="userIMG" src={user.photoURL} alt="" />}
                        <p>{user.displayName}</p>
                         { user && userInfo.length > 0 &&
                        <p>Total Points: {userInfo[0].total}</p>
            }
                    </div> 
            }
        
            {
                !user ? 
                    <button className="SignInButton" onClick={signInWithGoogle} >Login</button>
                :
                    <button className="SignOutButton"onClick={signOut} >Logout</button>
            }
        </div>
        </div>
    )
}

export default Header;