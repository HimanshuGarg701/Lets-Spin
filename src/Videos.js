import React, {useRef, useState} from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter.js';
import VideoSidebar from './VideoSidebar';

function Videos({url, user, description, song, likes, shares, messages}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onClickAction = () =>{
        console.log("OnClickAction");
        if(playing){
            videoRef.current.pause();
            setPlaying = false;
        }else{
            videoRef.current.play();
            setPlaying = true;
        }
    };

    return (
        <div className="video">
            <video loop className="video-player" ref={videoRef} 
            src={url}>

            </video>
            <VideoFooter user={user} song={song} description={description}/>
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
    )
}

export default Videos;
