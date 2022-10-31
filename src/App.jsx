import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './zustandStore';
import { Link, Outlet } from 'react-router-dom';

import MusicList from './components/MusicList';
import AudioPlayer from './components/AudioPlayer';
import NavBar from './components/NavBar';


export default function App () {

  return (
    <div id="main">
      <NavBar />
      <Outlet />
    </div>
  );
}
