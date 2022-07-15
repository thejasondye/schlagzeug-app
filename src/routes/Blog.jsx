import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';


export default function Blog(props) {

  return (

    <div className="container">
      <div className="item">
        <h2 variant="h2">This is the Blog Page</h2>
      </div>
    </div>
  );
};
