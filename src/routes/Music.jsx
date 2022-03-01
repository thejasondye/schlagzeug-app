import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';

import MusicList from '../components/MusicList';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';

import { Typography, Container, Grid, Box, Paper } from '@mui/material';


export default function Music(props) {

  // convert to Zustand Store
  const [musicList, setMusicList] = useState(['music list item 1', 'music list item 2', 'music list item 3']);
  const [currentMusic, setCurrentMusic] = useState();
  // this doesn't need to be in store ...
  const [isLoading, setIsLoading] = useState(true);
  // let isLoading = true;

  useEffect(() => {
    axios.get('http://localhost:3000/excerpts/')
      .then((res) => {
        setMusicList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`ERROR GETTING MUSIC LIST: ${ err }`);
      })
  }, []);

  const handleListItemClick = (index) => {
    setCurrentMusic(musicList[index]);
  };

  return (

      !isLoading &&
        <Grid
          container
          direction="row"
          sx={{ padding: '20px 20px', height: '90vh' }}
        >

          <Grid
            container
            item
            sm={3}
          >
            <MusicList musicList={ musicList } handleListItemClick={ handleListItemClick }/>
          </Grid>

          { currentMusic &&
            <Grid container p={'7px 0 0 15px'} item sm={9} sx={{ height: '100%' }}>

              <Grid
                item
                sm={12}
                sx={{
                  overflow: 'scroll',
                  height: '70%'
                }}
              >
                <Paper sx={{ padding: '20px' }} elevation={8}>
                  <img src={ currentMusic.url } width="100%" height="100%" />
                </Paper>
              </Grid>

              <Grid item mt="15px" sx={{ height: '30%' }}>
                <AudioPlayer recordings={ null || currentMusic.recordings } />
              </Grid>

            </Grid>
          }

          {!currentMusic &&
            <Grid
              item
              sm={9}
              display="flex"
              m="auto"
              alignContent="center"
              justifyContent="center"
            >
              <Box
                sx={{
                  backgroundColor: '#ede9f7',
                  borderRadius: '5px',
                  padding: '5px 16px',
                  width: '50%'
                }}
              >
                <Typography variant="h5" color="secondary" align="center">
                  Please make a selection from the Collection List
                </Typography>
              </Box>
            </Grid>
          }

        </Grid>
  );
}
