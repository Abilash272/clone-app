import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ANIMATION, FAMILY, HISTROY, MUSIC, POPULAR, SCIFI, TOP_RATED, TRENDING, UP_COMING } from '../Constants';
import MainContentRow from '../MainContentRow/MainContentRow';
import "./MainContent.css";

function MainContent(props) {
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const [popular, setPopular] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [family, setFamily] = useState([]);
    const [scifi, setScifi] = useState([]);
    const [histroy, setHistroy] = useState([]);
    const [music, setMusic] = useState([]);
    useEffect(async () => {
        setTrending((await axios.get(TRENDING)).data.results);
        setTopRated((await axios.get(TOP_RATED)).data.results);
        setAnimation((await axios.get(ANIMATION)).data.results);
        setUpComing((await axios.get(UP_COMING)).data.results);
        setPopular((await axios.get(POPULAR)).data.results);
        setFamily((await axios.get(FAMILY)).data.results);
        setScifi((await axios.get(SCIFI)).data.results);
        setHistroy((await axios.get(HISTROY)).data.results);
        setMusic((await axios.get(MUSIC)).data.results);
    },[])
    return (
        <div className="homeContent">
            <MainContentRow vertical={true} title={"Trending"} data={trending} />
            <MainContentRow title={"Top Rated"} data={topRated} />
            <MainContentRow title={"Animation"} data={animation} />
            <MainContentRow title={"Family"} data={family} />
            <MainContentRow title={"Science Fiction"} data={scifi} />
            <MainContentRow title={"Histroy"} data={histroy} />
            <MainContentRow title={"Latest"} data={upComing} />
            <MainContentRow title={"Popular"} data={popular} />
            <MainContentRow title={"Music"} data={music} />
        </div>
    )
}

export default MainContent