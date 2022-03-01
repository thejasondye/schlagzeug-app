import React, { useState } from 'react';
import MusicListItem from './MusicListItem';

import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MusicList(props) {

  const {musicList, handleListItemClick} = props;

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
          { musicList.map((musicItem, index) => {
            return (
              <Grow
                in={true}
                timeout={(index + 1) * 300}
                style={{ transformOrigin: '0 0 0' }}
                key={musicItem.title}
              >
                <Grid item xs={12}>
                  <MusicListItem
                    index={index}
                    title={musicItem.title}
                    musicItem={musicItem}
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
