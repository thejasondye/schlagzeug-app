import React, { useState } from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Card} from 'react-bootstrap';

const MusicListItem = (props) => {

  const { musicItem, handleListItemClick, index } = props;

  const [borderGlow, setBorderGlow] = useState('grey');

  return (
    <Card
      className="music-item"
      id={ index }
      style={{ borderColor: borderGlow }}
      onClick={ (e) => handleListItemClick(e) }
      onMouseEnter={ () => setBorderGlow('blue') }
      onMouseLeave={ () => setBorderGlow('grey') }
    >
    <Row>
      <Card.Header style={{ fontSize: "18px", fontWeight: "600", cursor: "pointer" }}>
        {musicItem.title}
      </Card.Header>
    </Row>

      <Card.Title style={{ padding: "12px 0 0 0", fontSize: "12px", fontWeight: "400", cursor: "pointer" }}>
        {musicItem.instrument}
      </Card.Title>

    <Card.Body style={{ padding: "0 0 8px" }}>

      <Card.Text style={{ padding: "0", margin: "2px", fontSize: "12px", cursor: "pointer" }}>
        Tempo: {musicItem.tempo}
        <br/>
        {`${ musicItem.style } ${ musicItem.category }`}
      </Card.Text>

    </Card.Body>

    </Card>
  )
}

export default MusicListItem;