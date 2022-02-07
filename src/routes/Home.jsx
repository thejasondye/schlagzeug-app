import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';

import MusicList from '../components/MusicList';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';

import { Typography, Container, Grid, Box, Paper } from '@mui/material';


export default function Home() {

  const images = [
    'https://drive.google.com/uc?export=view&id=111Yxsi_sidU2Gx4PezKAlf8VEGOQV-i7',
    'https://drive.google.com/uc?export=view&id=1Hyj88DnndnlDfPQP-ekJSANGW86y8zda',
    'https://drive.google.com/uc?export=view&id=1Bhh7nuqoSjyBE5bocI_G7XRCPrZJ43xi',
  ];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    let next = index === images.length - 1 ? 0 : index + 1;
    setIndex(next);
  };

  return (
    <button onClick={ () => nextImage() }>
      <img src={images[index]} alt="percussion images"/>
    </button>
  )
};