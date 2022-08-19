import React from 'react';
import MainContentRow from '../MainContentRow/MainContentRow';
import "./MainContent.css";

function MainContent() {
    return (
        <div className="homeContent">
            <MainContentRow />
            <MainContentRow />
            <MainContentRow />
            <MainContentRow />
            <MainContentRow />
            <MainContentRow />
        </div>
    )
}

export default MainContent