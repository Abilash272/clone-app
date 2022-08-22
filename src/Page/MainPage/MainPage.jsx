import React, { useState } from "react";
import MainBanner from "../../Component/MainBanner/MainBanner";
import Navbar from "../../Component/Navbar/Navbar";
import MainContent from "../../Component/MainContent/MainContent";
import ReactPlayer from "react-player";
import "./MainPage.css";
import { useEffect } from "react";
import axios from "axios";
import { VIDEO_LIST_1, VIDEO_LIST_2 } from "../../Component/Constants";
import { createContext } from "react";

export const AppContext = createContext(null);

function MainPage() {
    
    const [watch, setWatch] = useState(false);
    const [watchData, setWatchData] = useState(null);
    const [videoURL, setVideoURL] = useState("");
        
    useEffect(async () => {
        if(watchData !== null){
            try{
                setVideoURL("https://www.youtube.com/watch?v="+(await axios.get(VIDEO_LIST_1+watchData.id+VIDEO_LIST_2)).data.results[0].key);
            }catch{
                setVideoURL(require("../../Components/videos/OTT.mp4"));
            }
        }
    },[watchData])

    return(
        <AppContext.Provider value={{setWatch, setWatchData}}>
            {
                watch?
                <div>
                    <div className="playMovieContainer">
                        <i onClick={() => setWatch(false)} className="fa-solid fa-xmark closeIcon"></i>
                        <ReactPlayer controls={true} width="100%" url={videoURL}/>
                        <h1>{watchData.title || watchData.name}</h1>
                        <p>{watchData.overview}</p>
                    </div>
                </div>:
                <div>
                    <Navbar />

                    <MainBanner />

                    <MainContent />
                </div>
            }
        </AppContext.Provider>
    )
}

export default MainPage;