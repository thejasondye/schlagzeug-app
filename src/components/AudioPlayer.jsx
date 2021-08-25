import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {


  return (
    <Row style={{ height: "80px" }}>
      <ReactAudioPlayer src="./lib/recordings/Equinox.mp3" controls={true} />
    </Row>

  )

}

export default AudioPlayer;