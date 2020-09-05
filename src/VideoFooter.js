import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({user, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter-Text">
                <h3>{user}</h3>
                <p>{description}</p>
                <div className="musicIcon">
                    <MusicNoteIcon className="musicNoteIcon"></MusicNoteIcon>
                    <Ticker mode="smooth">
                        {({index}) =>(
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter;
