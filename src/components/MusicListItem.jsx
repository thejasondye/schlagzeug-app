import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const MusicListItem = (props) => {

  const { musicItem, handleListItemClick, index } = props;

  // convert to Zustand Store??
  const [borderGlow, setBorderGlow] = useState('grey');

  return (
      <Card
        className="music-item"
        id={ index }
        style={{ borderColor: borderGlow }}
        onClick={ (e) => handleListItemClick(e) }
        onMouseEnter={ () => setBorderGlow('blue') }
        onMouseLeave={ () => setBorderGlow('grey') }
      >
        <CardHeader style={{ fontSize: "18px", fontWeight: "600", cursor: "pointer" }}>
          {musicItem.title}
        </CardHeader>
        <CardContent>
          <Typography style={{ padding: "12px 0 0 0", fontSize: "12px", fontWeight: "400", cursor: "pointer" }}>
            {musicItem.instrument}
          </Typography>
          <Typography style={{ padding: "0", margin: "2px", fontSize: "12px", cursor: "pointer" }}>
            Tempo: {musicItem.tempo}
            <br/>
            {`${ musicItem.style } ${ musicItem.category }`}
          </Typography>
        </CardContent>
      </Card>
  )
}

export default MusicListItem;