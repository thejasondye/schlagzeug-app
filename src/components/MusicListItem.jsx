import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const MusicListItem = (props) => {

  // convert this to Zustand for sure, minus the musicItem (mapped from parent)
  const { musicItem, handleListItemClick, index } = props;

  // convert to Zustand Store??
  const [borderGlow, setBorderGlow] = useState('grey');

  return (
    <Box
    className="music-item"
    id={ index }
    sx={{
      border: '2px',
      borderColor: 'orange',
      cursor: 'pointer'
    }}
    >
      <Card
      variant="outlined"
      sx={{
        border: '2px',
        // borderColor: 'orange',
        backgroundColor: 'secondary',
        cursor: 'pointer'
      }}
      onClick={ () =>  handleListItemClick(index) }
      onMouseEnter={ () => setBorderGlow('blue') }
      onMouseLeave={ () => setBorderGlow('grey') }
    >
        <CardHeader title={musicItem.title} />
        <CardContent>
          <Typography>
            {musicItem.instrument}
          </Typography>
          <Typography>
            Tempo: {musicItem.tempo}
            <br/>
            {`${ musicItem.style } ${ musicItem.category }`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default MusicListItem;