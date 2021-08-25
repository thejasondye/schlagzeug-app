import React, { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';


const MusicDisplay = (props) => {

  const { title } = props;

  return (
    <Row style={{ height: "720px", overflow: "scroll" }}>
      <Image src={ title } fluid />
    </Row>

  )

}

export default MusicDisplay;