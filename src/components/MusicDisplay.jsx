import React, { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';


const MusicDisplay = (props) => {

  const { currentMusic } = props;

  return (
    <Row style={{ height: "720px", overflow: "scroll" }}>
      <Image src={ currentMusic.url } fluid />
    </Row>

  )

}

export default MusicDisplay;