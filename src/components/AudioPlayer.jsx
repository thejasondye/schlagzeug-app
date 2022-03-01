import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function AudioPlayer(props) {

  const { recordings } = props;
  if (recordings) {
    return (
      <>
        {recordings.map((recording) => {
          return (
            <Grid container key={recording.title} sx={{ alignItems: 'center' }}>
              <Grid item sm={6}>
                <Typography color="secondary" >
                  {recording.title}
                </Typography>
              </Grid>
              <Grid item sm={6}>
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
