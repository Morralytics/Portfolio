import { Container, Card } from "react-bootstrap";
import meetIO from "../images/MeetIOProject.png";
import yodaTranslate from "../images/YodaProject.png";

export const Work = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'white',
            textAlign: 'center',
        },
        card: {
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '5%'
        },
        img: {
            height: '270px',
            width: '100%',
        }
    }
    return (
        <div style={styles.background}>
            <Container>
                <div className="meetIO-card" style={{...styles.text, ...styles.card}}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={meetIO} style={styles.img} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Meet-IO</Card.Title>
                            <Card.Text>
                                Sample Text
                            </Card.Text>
                            <Card.Text>Secondary Text</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="yodaTranslate-card" style={{...styles.text, ...styles.card}}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={yodaTranslate} style={styles.img} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Yoda Translate</Card.Title>
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