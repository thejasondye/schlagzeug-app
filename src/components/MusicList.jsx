import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import MusicListItem from './MusicListItem.jsx';

const MusicList = (props) => {

  const {musicList} = props;

  return (
    <React.Fragment>
      <Row className="musicListTitle">
        In this collection:
      </Row>
      <Row id="music-list" style={{height: "800px", overflow: "scroll"}} >
        {musicList.map((musicItem) => {
          return (
            <MusicListItem key={musicItem.title} musicItem={musicItem} />
          );
        })}
      </Row>
    </React.Fragment>
  );

}

export default MusicList;