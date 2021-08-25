import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {

  const { recordings } = props;

  return (
    <Row style={{ height: "80px" }}>
      {recordings.map((recording) => {
        return (
          <div key={ recording.title }>
            <ReactAudioPlayer src={ recording.url } controls={ true } />
          </div>
        )
      })}
    </Row>
  )
}

export default AudioPlayer;