import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {

  const { recordings } = props;
  if (recordings) {
    return (
      <>
        {recordings.map((recording) => {
          return (
            <Row key={ recording.title }>
              <Col sm={6} className="d-flex align-items-center justify-content-left recordingsTitle">
                {recording.title}
              </Col>
              <Col sm={6} className="d-flex align-items-center justify-content-right">
                <ReactAudioPlayer src={ recording.url } controls={ true } />
              </Col>
            </Row>
          )
        })}
      </>
    )
  } else {
    return null;
  }
}

export default AudioPlayer;