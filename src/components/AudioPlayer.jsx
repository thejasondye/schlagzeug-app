import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Grid from '@mui/material/Grid';

const AudioPlayer = (props) => {

  const { recordings } = props;
  if (recordings) {
    return (
      <>
        {recordings.map((recording) => {
          return (
            <Grid container key={ recording.title }>
              <Grid item sm={6} className="d-flex align-items-center justify-content-left recordingsTitle">
                {recording.title}
              </Grid>
              <Grid item sm={6} className="d-flex align-items-center justify-content-right">
                <ReactAudioPlayer src={ recording.url } controls={ true } />
              </Grid>
            </Grid>
          )
        })}
      </>
    )
  } else {
    return null;
  }
}

export default AudioPlayer;