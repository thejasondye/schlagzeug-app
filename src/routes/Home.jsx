import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';

import MusicList from '../components/MusicList';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';


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
    <div className="container" style={{
      height: 'auto',
      width: 'auto',
      margin: '10%'
      }}
    >
      <div className="carousel-cntnr card2">
        <div
          className="carousel-content"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map(image => {
            return (
              <img
                className="carousel-image"
                key={image}
                src={image}
                alt="percussion images"
              />
            )}
          )}
        </div>
      </div>
    </div>
  );
}