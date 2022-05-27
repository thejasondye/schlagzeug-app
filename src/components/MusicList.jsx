import React, { useState } from 'react';
import MusicListItem from './MusicListItem';
import useStore from '../zustandStore';

import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

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
    <Grid
      container
      item
      px={'12px'}
    >
      <Box>
        <Typography variant="h5" color="secondary" align="left" pb="15px">
          Collection Title
        </Typography>
        {/* <FormControl error fullWidth mb="15px">
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
        </FormControl> */}
        <Grid
          container
          item
          spacing={1}
          justifyContent="start"
          sx={{
            height: '70%',
            overflow: 'scroll'
          }}
        >
          { musicList.map((exerpt, index) => {
            return (
              <Grow
                in={true}
                timeout={(index + 1) * 300}
                style={{ transformOrigin: '0 0 0' }}
                key={exerpt.title}
              >
                <Grid item xs={12}>
                  <MusicListItem
                    index={index}
                    exerpt={exerpt}
                    handleListItemClick={handleListItemClick}
                  />
                </Grid>
              </Grow>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}
