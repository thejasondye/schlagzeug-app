import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function AudioPlayer (props) {

  const { recordings } = props;
  if (recordings) {
    return (
      <>
        {recordings.map((recording) => {
          return (
            <div id="recording-item" className="center container" key={recording.title}>
              <div className="item">
                <div className="recording-title">
                  {recording.title}
                </div>
              </div>
              <div className="item">
                <ReactAudioPlayer src={ recording.url } controls={ true } />
              </div>
            </div>
          )
        })}
      </>
    )
  } else {
    return null;
  }
}
