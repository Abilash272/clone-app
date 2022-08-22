import React from 'react';
import { SMALL_IMAGE_URL } from '../Constants';
import "./MainContentRow.css";
import { AppContext } from "../../Page/MainPage/MainPage";
import { useContext } from 'react';

function MainContentRow (props) {
    const {setWatch, setWatchData} = useContext(AppContext);
    return (
    <div className="homeContentRow">
        <h4>{props.title}</h4>
        <div className="homeContentPosters">
            {props.data.map((movie, index) => {
                return(
                    <img onClick={() => {
                        setWatchData(movie);
                        setWatch(true);
                    }} key={index} className={props.vertical? 'homeContentVerticalThumbnail' : 'homeContentThumbnail'} src={props.vertical? SMALL_IMAGE_URL+movie.poster_path : SMALL_IMAGE_URL+movie.backdrop_path} alt="" />
                )
            })}
        </div>                    
    </div>
  )
}

export default MainContentRow;