import React, { useState } from 'react';
import MusicListItem from './MusicListItem';
import useStore from '../zustandStore';

export default function MusicList(props) {

  // global state
  const musicList = useStore(state => state.musicList);
  const setMusicList = useStore(state => state.setMusicList);
  const setCurrentMusic = useStore(state => state.setCurrentMusic);
  // handler functions
  const handleListItemClick = (index) => {
    setCurrentMusic(musicList[index]);
  };
  const [instrument, setInstrument] = useState('');
  const filterMusicList = (selection) => {
    let musicListCopy = [...musicList];
    setMusicList(musicListCopy.filter(item => item.instrument === selection));
  };
  const handleInstrumentSelectChange = (e) => {
    setInstrument(e.target.value);
    filterMusicList(e.target.value);
  };

  return (
    <div id="music-list-cntnr" className="container">
      <div id="music_list-hdr-txt">
        <h3 className="center">Collection Title</h3>
      </div>
      <ul id="music-list" className="container top">
        {musicList.map((exerpt, index) => {
          return (
            <li className="slide-in-fade-in music-list-item" key={exerpt.title}>
              <MusicListItem
                index={index}
                exerpt={exerpt}
                handleListItemClick={handleListItemClick}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
