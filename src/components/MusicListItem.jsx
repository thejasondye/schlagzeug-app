import React, { useState } from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Card} from 'react-bootstrap';

const MusicListItem = (props) => {

  const {musicItem} = props;
  return (
    <Card className="music-item">
    <Row>
      <Card.Header>
        <Row>
          {musicItem.instrument}
        </Row>
      </Card.Header>
    </Row>

      <Card.Title style={{padding: "12 0 0 0"}}>
        {musicItem.title}
      </Card.Title>

    <Card.Body>

      <Card.Text>
        Tempo: {musicItem.tempo}
      </Card.Text>

      <ListGroup>
          <ListGroupItem style={{backgroundColor: "rgb(240, 255, 248)"}}>
            <Card.Text>
              {`${musicItem.style} ${musicItem.category}`}
            </Card.Text>
          </ListGroupItem>
      </ListGroup>

    </Card.Body>

    </Card>
  )
}

export default MusicListItem;