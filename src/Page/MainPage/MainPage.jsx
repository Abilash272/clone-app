import React from "react";
import MainBanner from "../../Component/MainBanner/MainBanner";
import Navbar from "../../Component/Navbar/Navbar";
import MainContent from "../../Component/MainContent/MainContent";

function MainPage() {
    return(
        <div>
            <Navbar />

            <MainBanner />

            <MainContent />
        </div>
    )
}

export default MainPage;