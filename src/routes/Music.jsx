import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../zustandStore';

import MusicList from '../components/MusicList';
import AudioPlayer from '../components/AudioPlayer';


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

  // TODO: NEED TO IMPLEMENT CORRECT GRID SETUP

  return (

      !isLoading &&
        <div
          className="music-cntnr"
          style={{
            padding: '20px 20px',
            height: '90vh'
          }}
        >
          <MusicList />

          {currentMusic &&
            <div className="music-media container">
              <div className="music-disp-cntnr card3 item">
                <img
                  className="music-display"
                  src={currentMusic.url}
                  width="100%"
                  height="100%"
                />
              </div>

            {/* TODO: DOWNLOAD SHEET MUSIC BUTTON / ICON */}

              {/* <div style={ padding: '5px 0 5px' }>
                <button variant="contained" endIcon={<DownloadIcon />} href={currentMusic.url} download>
                  Download Sheet Music
                </button>
              </div> */}

              <div className="audio-player">
                <AudioPlayer recordings={ null || currentMusic.recordings } />
              </div>
            </div>
          }

          {!currentMusic &&
            <div className="music-media-blank">
              <div className="no-music-cntnr">
                <h5 className="no-music-selected-msg">
                  Please make a selection from the Collection List
                </h5>
              </div>
            </div>
          }

        </div>
  );
}
