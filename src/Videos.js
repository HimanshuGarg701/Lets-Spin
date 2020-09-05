import React, {useRef, useState} from 'react';
import "./Video.css";

function Videos() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const onClickAction = () =>{
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
            <video loop className="video-player" ref={videoRef} onClick={onClickAction()}
            src="https://www.youtube.com/watch?v=TlpRsSvVCaw">

            </video>
        </div>
    )
}

export default Videos;
