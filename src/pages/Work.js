import { Container, Card } from "react-bootstrap";
import meetIO from "../images/MeetIOProject.png"

export const Work = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'white',
            textAlign: 'center',
        }
    }
    return (
        <div style={styles.background}>
            <Container>
                <div style={styles.text}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={meetIO} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Meet-IO</Card.Title>
                            <Card.Text>
                                Sample Text
                            </Card.Text>
                            <Card.Text>Secondary Text</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Container>
        </div>
    )
}