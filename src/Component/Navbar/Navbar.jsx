import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [showSettings, setShowSettings] = useState(false)
    return (
        <nav className="homeTopbar">
            <div className="homeTopbarLeft">
                <img className='homeLogo' src={require('../../Components/images/Logonetflix.png')} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="homeTopbarRight">
                <i class="homeSearchIcon fa-solid fa-magnifying-glass"></i>
                <img className='homeTopbarProfilePic' src={require("../../Components/images/avatar.png")} alt="" />
                <button onClick={() => setShowSettings(!showSettings)} className='homeTopbarMenuBtn'><i className="fa-solid fa-sort-down"></i></button>
                {showSettings &&
                    <div className="homeMenu">
                        <ul className='homeMenuAvatarList'>
                            <li>
                                <img className='homeMenuAvatar' src={require("../../Components/images/avatar.png")} alt="" />
                            </li>
                        </ul>
                        <ul className='homeMenuSettings'>
                            <li>
                                <a href="/clone-app">Sign out</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;