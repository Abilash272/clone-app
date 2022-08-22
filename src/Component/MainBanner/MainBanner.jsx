import React, { useState, useEffect } from "react";
import "./MainBanner.css";
import { TRENDING, IMAGE_URL } from "../../Component/Constants";
import axios from "axios";

function MainBanner() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");

    useEffect(() => {
        axios.get(TRENDING).then((response) => {
            const randomNum = Math.floor(Math.random()*20);
            setTitle(response.data.results[randomNum].original_title || response.data.results[randomNum].name);
            setDescription(response.data.results[randomNum].overview);
            setPoster(response.data.results[randomNum].backdrop_path);
        })
    },[])
    return(
        <div style={{backgroundImage: `linear-gradient(#00000099,#00000066,#0000001a,#0000001a,#0000001a,#121212cc,#111111), url("${IMAGE_URL + poster}")`}} 
        className="homeBanner">
            <img className='homeBannerImg' src={IMAGE_URL + poster} alt="" />
            <div className="homeBannerTextbox">
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
                <div className="homeBannerButtons">
                    <button className='homeBannerPlay' ><i className="fa-solid fa-play"></i>  Play</button>
                    <button className='homeBannerInfo'><i className="fa-solid fa-circle-info"></i>  More Info</button>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;