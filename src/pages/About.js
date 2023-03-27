import React from "react";
import { Container, Card } from "react-bootstrap";
import Bridge from '../images/Bridge.JPEG';
import Car from '../images/Car.JPEG';
import Water from '../images/Water.JPEG';

export const About = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Open Sans',
        },
        textHeader: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '20px',
            width: '50%',
            marginLeft: "auto",
            marginRight: "auto",
        },
        cardStyle: {
            display: 'flex',
            gap: '30px',
        },
        secondaryText: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '20px',
            width: '70%',
            marginLeft: "auto",
            marginRight: "auto",
        },
        listStyle: {
            lineHeight: '30px'
        },
        imgStyle: {
            boxShadow: '3px 3px 12px 8px #d8b65c'
        },
    }
    return (
        <div style={styles.background}>
            <Container style={styles.background}>
                <div style={styles.textHeader}>
                    <p>
                        Photography is a hobby of mine where I can fully express an eye for design and placement of objects. Similar to constructing a website, certain characteristics can be the highlight while supporting elements create the final piece.
                    </p>
                </div>
                <br></br>
                <div style={{ ...styles.text, ...styles.cardStyle }}>
                    <Card style={styles.imgStyle}>
                        <Card.Img variant="top" src={Bridge} />
                        <Card.Body>
                            <Card.Title>Forward onto Freedom</Card.Title>
                            <Card.Text>
                                Taken off the Oregon Coast during a trip not planned
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">View the image on Instagram</small>
                        </Card.Footer>
                    </Card>
                    <Card style={styles.imgStyle}>
                        <Card.Img variant="top" src={Car} />
                        <Card.Body>
                            <Card.Title>Midnight Strider</Card.Title>
                            <Card.Text>
                                Car fanatic taken locally in Bend Oregon
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">View the image on Instagram</small>
                        </Card.Footer>
                    </Card>
                    <Card style={styles.imgStyle}>
                        <Card.Img variant="top" src={Water} />
                        <Card.Body>
                            <Card.Title>Rapid Growth</Card.Title>
                            <Card.Text>
                                Beautiful river hiding from those unfamiliar with Central Oregon
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">View the image on Instagram</small>
                        </Card.Footer>
                    </Card>
                </div>
                <br></br>
                <div style={styles.secondaryText}>
                    <p>
                        Each role of a Software Engineer is incredibly import for the stability of the application being worked on. The skills that need to be brought to the table now is more than just a simple webpage and the skills I have are as follows:
                    </p>
                    <ul style={styles.listStyle}>
                        <li>React.js</li>
                        <li>Packages through the Node Package Manager</li>
                        <li>Relational and Non-Relational Databases like MySQL and MongoDB</li>
                        <li>A background in Computer Science and the Python language</li>
                        <li>Websocket interactions like Socket.io</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}