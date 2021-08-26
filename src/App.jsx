/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown, ListGroup, ListGroupItem } from 'react-bootstrap';
import MusicList from './components/MusicList.jsx';
import MusicDisplay from './components/MusicDisplay.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import NavBar from './components/NavBar.jsx';
import axios from 'axios';

const App = (props) => {

  const [musicList, setMusicList] = useState(['music list item 1', 'music list item 2', 'music list item 3']);
  const [currentMusic, setCurrentMusic] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/excerpts/')
      .then((res) => {
        setMusicList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`ERROR GETTING MUSIC LIST: ${ err }`);
      })
  }, []);

  const handleListItemClick = (e) => {
    const index =  e.target.offsetParent.id;
    setCurrentMusic(musicList[index]);

    // axios.get(`http://localhost:3000/excerpts/${ e.target.offsetParent.id }`)
    //   .then((res) => {
    //     setCurrentMusic(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(`ERROR GETTING EXCERPT: ${ err }`);
    //   })
  };

  if (isLoading) {
    return <h3> Loading ... </h3>;
  } else {
    return (
      <Container>

        <Row style={{ padding: "20px 0" }}>
          <h1>Schlagzeug!</h1>
        </Row>
        <Row style={{textAlign: "right"}}>
          <p>Hello, <b>User!</b></p>
        </Row>

        <NavBar />

        <Row style={{ padding: "20px 20px" }}>

          <Col sm={3}>
            <MusicList musicList={ musicList } handleListItemClick={ handleListItemClick }/>
          </Col>

            { currentMusic &&
              <Col sm={9}>

                <Row style={{padding: "0 0 25px"}}>
                  <MusicDisplay currentMusic={ currentMusic } />
                </Row>

                <Row>
                  <AudioPlayer recordings={ null || currentMusic.recordings } />
                </Row>

                {/* <Row>
                  <Col sm={4} className="d-grid">
                    <Button onClick={set}>
                      Previous
                    </Button>
                  </Col>
                  <Col sm={4}></Col>
                  <Col sm={4} className="d-grid">
                    <Button>
                      Next
                    </Button>
                  </Col>
                </Row> */}

              </Col>
            }
            {!currentMusic &&
              <Col sm={9} className="d-flex align-items-center justify-content-center">
                <Row>
                  <ListGroup className="noMusicSelectedMessage">
                      <ListGroupItem className="noMusicSelectedMessage" style={{ backgroundColor: "#ede9f7" }}>
                          Please make a selection from the Collection List
                      </ListGroupItem>
                  </ListGroup>
                </Row>
              </Col>
            }

        </Row>

      </Container>
    );
  }

};

export default App;