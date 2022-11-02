import React, { useState } from 'react';
import useStore from '../zustandStore';

export default function MusicListItem(props) {

  const { exerpt, handleListItemClick, index } = props;
  const [shift, setShift] = useState('0px');

  return (
      <div
        id={index}
        className="music-list-card card1"
        style={{ padding: '8px', transform: `translatex(${shift})` }}
        onClick={ () =>  handleListItemClick(index) }
        onMouseEnter={ () => setShift('10px') }
        onMouseLeave={ () => setShift('0px') }
      >
        <p className="music-list-title">
          {exerpt.title}
        </p>
        <p className="music-list-text">
          {exerpt.instrument}
        </p>
        <p className="music-list-text">
          Tempo: {exerpt.tempo}
        </p>
        <p className="music-list-text">
          {`${ exerpt.style } ${ exerpt.category }`}
        </p>
      </div>
  )
}
