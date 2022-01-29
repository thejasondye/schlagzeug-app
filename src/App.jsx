import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './zustandStore';
import { Link } from 'react-router-dom';

import MusicList from './components/MusicList.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import NavBar from './components/NavBar.jsx';

import { Typography, Container, Grid, Box, Paper } from '@mui/material';
import textAlign from '@mui/system';


export default function App(props) {

  return (

    <Container sx={{ height: '75vh' }}>

      <Typography sx={{ padding: '20px 0', fontSize: '30px' }}>
        Schlagzeug!
      </Typography>
      <Typography sx={{ textAlign: 'right' }}>
        Hello, <b>User!</b>
      </Typography>

      <Link to="/">Root</Link>
      <br/>
      <Link to="/Home">Home</Link>
      <br/>
      <Link to="/Landing">Landing</Link>
      <br/>
      <NavBar />

    </Container>
  );
};

