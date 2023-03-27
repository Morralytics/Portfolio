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
        },
        cardStyle: {
            display: 'flex',

        }
    }
    return (
        <div style={styles.background}>
            <Container>
                <div style={{...styles.text, ...styles.cardStyle}}>
                    <Card>
                        <Card.Img variant="top" src={Bridge}/>
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
            </Container>
        </div>
    )
}