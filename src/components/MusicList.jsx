import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import MusicListItem from './MusicListItem.jsx';

const MusicList = (props) => {

  const {musicList} = props;

  return (
    <React.Fragment>
      <Row>
        // MUSIC LIST GOES HERE
      </Row>
      <Row id="music-list" style={{height: "800px", overflow: "scroll"}} >
        {musicList.map((musicItem) => {
          return (
            <MusicListItem key={musicItem} musicItem={musicItem} />
          );
        })}
      </Row>
    </React.Fragment>
  );

}

export default MusicList;