import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './zustandStore';
import { Link, Outlet } from 'react-router-dom';

import MusicList from './components/MusicList';
import AudioPlayer from './components/AudioPlayer';
import NavBar from './components/NavBar';

import { Typography, Container, Grid, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#306678',
      contrastText: '#9AB3BA',
    },
    secondary: {
      main: '#9AB3BA'
    },
    warning: {
      main: '#FDCB0B'
    },
  },
  typography: {
    fontFamily: "'Avenir', 'Georgia', 'Helvetica', sans-serif"
  }
});


export default function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters sx={{ height: '100vh', mx: '0px' }}>
        <NavBar />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

