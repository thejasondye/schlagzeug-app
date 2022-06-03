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

  /*
    <FormControl error fullWidth mb="15px">
      <FormHelperText>Instrument</FormHelperText>
      <InputLabel color="secondary" id="instrument-select">Instrument</InputLabel>
      <Select
        color="secondary"
        labelId="instrument-filter"
        id="instrument-filter"
        value={instrument}
        label="Instrument"
        onChange={handleInstrumentSelectChange}
      >
        <MenuItem value={'Marimba'}>Marimba</MenuItem>
        <MenuItem value={'Snare Drum'}>Snare Drum</MenuItem>
        <MenuItem value={'Ensemble'}>Ensemble</MenuItem>
      </Select>
    </FormControl>
  */

  return (
    <div id="music-list-cntnr" className="container">
      <div className="box">
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
    </div>
  );
}
