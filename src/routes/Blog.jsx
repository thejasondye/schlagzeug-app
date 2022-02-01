import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

import { Typography, Container, Grid, Box, Paper } from '@mui/material';
import textAlign from '@mui/system';


export default function Blog(props) {

  return (

    <Container>
      <Grid item>
        <Typography variant="h2">This is the Blog Page</Typography>
      </Grid>
    </Container>
  );
};
