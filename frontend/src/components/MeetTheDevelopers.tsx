import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MeetTheDevelopers.css"

function MeetTheDevelopers(){
    
    return(
        <div className="AboutUs">

        <div className="Team">
            
            <h2>Adam Padden</h2>
            <div className="TeamMember">
                <div className="AdamLinkedIn">    
                    <a href="https://www.linkedin.com/in/adam-padden/" target ="blank"><button></button></a>
                </div>

                <div className="AdamGithub">      
                     <a href="https://github.com/AMP-1113" target ="blank"><button></button></a>
                </div>

                <div className="AdamPlaylist">      
                        <NavLink to="/game/37i9dQZF1DXbMYUPb05hjJ"><button></button></NavLink>
                </div>
            </div>

            <h2>Anneliese Sparks</h2>
            <div className="TeamMember">
                <div className="AnnelieseLinkedIn">    
                    <a href="https://www.linkedin.com/in/anneliese-sparks/" target ="blank"><button></button></a>
                </div>

                <div className="AnnelieseGithub">      
                     <a href="https://github.com/anneliese-sparks" target ="blank"><button></button></a>
                </div>
                    <div className="AnneliesePlaylist">      
                        <NavLink to="/game/2Hv5rfHHzko6CzxfQMZWnh"><button></button></NavLink> 
                    </div>
            </div>

            <h2>Nick Maxwell</h2>
            <div className="TeamMember">
                <div className="NickLinkedIn">    
                    <a href="https://www.linkedin.com/in/nickmaxwell/" target ="blank"><button></button></a>
                </div>

                <div className="NickGithub">      
                     <a href="https://github.com/NMaxwell93" target ="blank"><button></button></a>
                </div>

                <div className="NickPlaylist">      
                    <NavLink to="/game/1UUCxq5cYwrh9tZNMujWlO"><button></button></NavLink>
                </div>
            </div>
            
            <h2>Saniah Safdar</h2>
            <div className="TeamMember">
                <div className="SaniahLinkedIn">    
                    <a href="https://www.linkedin.com/in/saniah-safdar/" target ="blank"><button></button></a>
                </div>

                <div className="SaniahGithub">      
                     <a href="https://github.com/saniahsafdar" target ="blank"><button></button></a>
                </div>

                    <div className="SaniahPlaylist">      
                        <NavLink to="/game/37i9dQZF1DX0YKekzl0blG"><button></button></NavLink>
                    </div>
            </div>

        </div>

        </div>
    )
}

export default MeetTheDevelopers;