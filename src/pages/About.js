import { Container, Card, CardGroup } from "react-bootstrap"

export const About = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'black',
            textAlign: 'center',
        }
    }
    return (
        <div style={styles.background}>
            <Container>
                <div style={styles.text}>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
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
                            <Card.Img variant="top" src="holder.js/100px160" />
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
                            <Card.Img variant="top" src="holder.js/100px160" />
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
                    </CardGroup>
                </div>
            </Container>
        </div>
    )
}