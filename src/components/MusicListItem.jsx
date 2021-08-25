import React, { useState } from 'react';
import { Row, Col, Button, Card} from 'react-bootstrap';

const MusicListItem = (props) => {

  const {musicItem} = props;

  return (
    <Card className="music-item">
    <Row>
      <Card.Header>
        <Row>
          //  THIS IS A MUSIC LIST ITEM
        </Row>
      </Card.Header>
    </Row>

      <Card.Title>
        // CARD TITLE HERE
      </Card.Title>

    <Card.Body>

      <Card.Text>
        // TEXT OR CONTENT HERE
      </Card.Text>

      <Card.Text>
        // MAYBE MORE INFO HERE
      </Card.Text>

      {/* <ListGroup>
        {recommend &&
          <ListGroupItem style={{backgroundColor: "rgb(240, 255, 248)"}}>
            <Card.Text>
              I recommend this product &#10003;
            </Card.Text>
          </ListGroupItem>
        }

        {response &&
          <ListGroupItem  style={{backgroundColor: "rgb(240, 250, 255)"}}>
            <b>Response from seller: </b> {response}
          </ListGroupItem>
        }
      </ListGroup> */}

    </Card.Body>

    <Row>
      <Card.Footer>
        // FOOTER INFORMATION HERE
      </Card.Footer>
    </Row>

    </Card>
  )
}

export default MusicListItem;