import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';

import MusicList from '../components/MusicList';
import AudioPlayer from '../components/AudioPlayer';

import { Typography, Container, Grid, Box, Paper, Button, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


export default function Music(props) {

  // global state
  const setMusicList = useStore(state => state.setMusicList);
  const currentMusic = useStore(state => state.currentMusic);
  // local state
  const [isLoading, setIsLoading] = useState(true);

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
            <MusicList />
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
              <Grid item sm={12} p={'5px 0 5px'} >
                <Button variant="contained" endIcon={<DownloadIcon />} href={currentMusic.url} download>
                  Download Sheet Music
                </Button>
              </Grid>
              <Grid item sm={12} mt="15px" sx={{ height: '30%' }}>
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
                <Typography variant="h5" color="primary" fontWeight="bold" align="center">
                  Please make a selection from the Collection List
                </Typography>
              </Box>
            </Grid>
          }

        </Grid>
  );
}
