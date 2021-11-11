import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import createTheme from '@mui/material/styles';

// const theme = createTheme({});
// console.log(theme);
const MusicListItem = (props) => {

  // convert this to Zustand for sure, minus the musicItem (mapped from parent)
  const { musicItem, handleListItemClick, index } = props;

  // convert to Zustand Store??
  const [elevate, setElevate] = useState(1);

  return (
      <Card
        id={ index }
        className="music-item"
        elevation={elevate}
        border="10px"
        sx={{
          height: '100px',
          cursor: 'pointer',
          p: "8px"
        }}
        onClick={ () =>  handleListItemClick(index) }
        onMouseEnter={ () => setElevate(6) }
        onMouseLeave={ () => setElevate(2) }
      >

        <Typography variant="body1" fontWeight="bold">
          {musicItem.title}
        </Typography>
        <Typography variant="subtitle">
          {musicItem.instrument}
        </Typography>
        <Typography variant="body1">
          Tempo: {musicItem.tempo}
        </Typography>
        <Typography variant="caption">
          {`${ musicItem.style } ${ musicItem.category }`}
        </Typography>

      </Card>
  )
}

export default MusicListItem;