import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css"

function Header() {
    const { user } = useContext(AuthContext)

    return (
        <div className="Header">
            <h1>Quick Click</h1>
            { user && 
                    <div className="Header_user">
                        { !!user.photoURL && <img className="userIMG" src={user.photoURL} alt="" />}
                        {user.displayName}
                        <p>Overall Avg. Score: 90%</p>
                    </div> 
                }
            {
                !user ? 
                    <button onClick={signInWithGoogle} >Sign in with Google</button>
                :
                    <button onClick={signOut} >Sign out</button>
            }
        </div>
    )
}

export default Header;