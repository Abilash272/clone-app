import React from "react";
import "./MainBanner.css"

function MainBanner() {
    return(
        <div className="homeBanner" style={{backgroundImage: `linear-gradient(0deg, rgba(17,17,17,1) 0%,.603641285615808) 20%, rgba(17,17,17,0.4642856971890319) 40%, rgba(17,17,17,0.46) 60%, rgba(17,17,17,0.66) 80%, rgba(17,17,17,1) 100%), url("https://wallpapercave.com/wp/wp9001495.jpg")` }}>
            <img className='homeBannerImg' src="https://wallpapercave.com/wp/wp9001495.jpg" alt="" />
            <div className="homeBannerTextbox">
                <h1>GODZILLA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora suscipit a eius temporibus.</p>
                <div className="homeBannerButtons">
                    <button className='homeBannerPlay' ><i className="fa-solid fa-play"></i>  Play</button>
                    <button className='homeBannerInfo'><i className="fa-solid fa-circle-info"></i>  More Info</button>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;