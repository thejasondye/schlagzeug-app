import React, { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';


const MusicDisplay = (props) => {


  return (
    <Row style={{ height: "720px", overflow: "scroll" }}>
      <Image src="./lib/sheet_music/Equinox.png" fluid />
    </Row>

  )

}

export default MusicDisplay;