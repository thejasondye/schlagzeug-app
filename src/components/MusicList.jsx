import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import MusicListItem from './MusicListItem.jsx';

const MusicList = (props) => {

  const {musicList, handleListItemClick} = props;

  return (
    <React.Fragment>
      <Row className="musicListTitle">
        In this collection:
      </Row>
      <Row id="music-list" style={{height: "900px", overflow: "scroll", borderColor: "light grey", borderWidth: "2px"}} >
        {musicList.map((musicItem, index) => {
          return (
            <MusicListItem key={musicItem.title} index={index} title={musicItem.title} musicItem={musicItem} handleListItemClick={handleListItemClick} />
          );
        })}
      </Row>
    </React.Fragment>
  );

}

export default MusicList;