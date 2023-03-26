import { Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import meetIO from "../images/MeetIOProject.png";
import yodaTranslate from "../images/YodaProject.png";
import CardFooter from "../components/ui/CardFooter";

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
        },
        linkLogoColor: {
            color: '#1E3050',
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
                            <h5>Yoda Translate Application</h5>
                            <p>This unique application utilizes two API's that when combined, produce an inspirational quote from the widely known character, Yoda!</p>
                            <CardFooter />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={meetIO}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Meet-IO Workplace Application</h5>
                            <CardFooter />
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}