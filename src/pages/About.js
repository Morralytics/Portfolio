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
            gap: '15px',
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
        }
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
                    <Card>
                        <Card.Img variant="top" src={Bridge} />
                        <Card.Body>
                            <Card.Title>Sample Title</Card.Title>
                            <Card.Text>
                                Text content
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Supporting text</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Car} />
                        <Card.Body>
                            <Card.Title>Sample Title</Card.Title>
                            <Card.Text>
                                Text content
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Supporting text</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Water} />
                        <Card.Body>
                            <Card.Title>Sample Title</Card.Title>
                            <Card.Text>
                                Text content
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Supporting text</small>
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