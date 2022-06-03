import React, { useState } from 'react';
import useStore from '../zustandStore';
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@mui/material';

export default function MusicListItem(props) {

  const { exerpt, handleListItemClick, index } = props;
  const [shift, setShift] = useState('0px');

  return (
      <div
        id={index}
        class="card1"
        style={{ padding: '8px', transform: `translatex(${shift})` }}
        onClick={ () =>  handleListItemClick(index) }
        onMouseEnter={ () => setShift('10px') }
        onMouseLeave={ () => setShift('0px') }
      >
        <Typography variant="body1" fontWeight="bold">
          {exerpt.title}
        </Typography>
        <Typography variant="subtitle">
          {exerpt.instrument}
        </Typography>
        <Typography variant="body1">
          Tempo: {exerpt.tempo}
        </Typography>
        <Typography variant="caption">
          {`${ exerpt.style } ${ exerpt.category }`}
        </Typography>
      </div>
  )
}
