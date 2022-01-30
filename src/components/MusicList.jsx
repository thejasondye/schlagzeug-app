import React, { useState } from 'react';
import MusicListItem from './MusicListItem';
import Grid from '@mui/material/Grid';

const MusicList = (props) => {

  const {musicList, handleListItemClick} = props;

  return (
    <Grid container item px={'12px'} sx={{ height: '100%' }}>
      <Grid item className="musicListHeader" mb="10px" sx={{ height: '10%' }}>
        In this collection:
      </Grid>
      <Grid
        container
        item
        id="music-list"
        spacing={1}
        sx={{ height: '90%', overflow: 'scroll' }}
      >
        { musicList.map((musicItem, index) => {
          return (
            <Grid item key={musicItem.title} xs={12} >
              <MusicListItem index={index} title={musicItem.title} musicItem={musicItem} handleListItemClick={handleListItemClick} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default MusicList;