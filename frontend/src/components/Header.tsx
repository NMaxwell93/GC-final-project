import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import logo from '../assets/logo.svg'
import "./Header.css"


function Header() {
    const { user } = useContext(AuthContext)

    return (
        <div className="Header">
            <img src={logo} alt="logo"></img>
            { user && 
                    <div className="Header_user">
                        { !!user.photoURL && <img className="userIMG" src={user.photoURL} alt="" />}
                        {user.displayName}
                        <p>Overall Avg. Score: 90%</p>
                    </div> 
                }
            {
                !user ? 
                    <button className="google" onClick={signInWithGoogle} >Login</button>
                :
                    <button onClick={signOut} >Sign out</button>
            }
        </div>
    )
}

export default Header;