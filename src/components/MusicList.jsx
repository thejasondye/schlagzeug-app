import React, { useState } from 'react';
import MusicListItem from './MusicListItem';
import useStore from '../zustandStore';

import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MusicList(props) {

  // global state
  const musicList = useStore(state => state.musicList);
  const setCurrentMusic = useStore(state => state.setCurrentMusic);
  // handler functions
  const handleListItemClick = (index) => {
    setCurrentMusic(musicList[index]);
  };

  return (
    <Grid
      container
      item
      px={'12px'}
    >
      <Box
        sx={{ justifyContent: 'flex-start', height: 'auto' }}
      >
        <Typography variant="h5" color="secondary" align="left" pb="15px">
          In this collection:
        </Typography>
        <Grid
          container
          item
          spacing={1}
          sx={{
            height: '70%',
            overflow: 'scroll'
          }}
        >
          { musicList.map((exerpt, index) => {
            return (
              <Grow
                in={true}
                timeout={(index + 1) * 300}
                style={{ transformOrigin: '0 0 0' }}
                key={exerpt.title}
              >
                <Grid item xs={12}>
                  <MusicListItem
                    index={index}
                    exerpt={exerpt}
                    handleListItemClick={handleListItemClick}
                  />
                </Grid>
              </Grow>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}
