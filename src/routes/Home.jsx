import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';

import MusicList from '../components/MusicList';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';

import { Typography, Container, Grid, Box, Paper, Button } from '@mui/material';


export default function Home() {

  const images = [];
  const importAll = (r) => {
    r.keys().forEach((key) => images.push('./lib/images/home' + key.replace('.', '')));
  };
  importAll(require.context('../../dist/lib/images/home', false, /\.png$/));

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    let next = index === images.length - 1 ? 0 : index + 1;
    setIndex(next);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  });

  return (
    <Grid container sx={{
      height: 'auto',
      width: 'auto',
      m: '10%'
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          borderRadius: '10px'
        }}
      >
        <Box
          sx={{
            transform: `translateX(-${index * 100}%)`,
            whiteSpace: 'nowrap',
            transition: 'transform 0.3s'
          }}
        >
          {images.map(image => {
            return (
              <Box
                sx={{
                  display: 'inline-flex',
                  width: '100%'
                }}
                key={image}
              >
                <img src={image} alt="percussion images" width="100%" height="100%" />
              </Box>
            )}
          )}
        </Box>
      </Box>
    </Grid>
  );
}
