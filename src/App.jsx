import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './zustandStore';
import { Link } from 'react-router-dom';

import MusicList from './components/MusicList';
import AudioPlayer from './components/AudioPlayer';
import NavBar from './components/NavBar';

import { Typography, Container, Grid, Box, Paper } from '@mui/material';
import textAlign from '@mui/system';


export default function App(props) {

  return (

    <Container sx={{ height: '75vh' }}>

      <NavBar />

    </Container>
  );
};

