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
                <img className='homeTopbarProfilePic' src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" alt="" />
                <button onClick={() => setShowSettings(!showSettings)} className='homeTopbarMenuBtn'><i className="fa-solid fa-sort-down"></i></button>
                {showSettings &&
                    <div className="homeMenu">
                        <ul className='homeMenuAvatarList'>
                            <li>
                                <img className='homeMenuAvatar' src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" alt="" />
                            </li>
                        </ul>
                        <ul className='homeMenuSettings'>
                            <li>Sign out</li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;