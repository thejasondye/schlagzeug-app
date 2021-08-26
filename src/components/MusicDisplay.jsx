import React, { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';


const MusicDisplay = (props) => {
/*style={{ height: "720px", overflow: "scroll" }}*/
  const { currentMusic } = props;
    return (
      <Row style={{ height: "750px", overflow: "scroll" }}>
        <Image src={ currentMusic.url } fluid />
      </Row>
    )
}

export default MusicDisplay;
