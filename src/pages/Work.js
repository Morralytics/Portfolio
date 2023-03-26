import { Container, Carousel } from "react-bootstrap";
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
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={yodaTranslate}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Yoda Translate</h5>
                            <p>Sample Text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={meetIO}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Meet-IO</h5>
                            <p>Sample Text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}