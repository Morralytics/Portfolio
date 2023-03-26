import { Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import meetIO from "../images/MeetIOProject.png";
import yodaTranslate from "../images/YodaProject.png";

export const Work = () => {
  const styles = {
    background: {
      backgroundColor: "#212529",
      height: "100vh",
    },
    text: {
      color: "black",
      textAlign: "center",
      fontSize: "25px"
    },
    card: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "5%",
    },
    img: {
      height: "270px",
      width: "100%",
    },
    linkLogo: {
      color: "#1E3050",
      paddingRight: "5px",
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
    },
    edge: {
      backgroundColor: 'red',
    }
  };
  return (
    <div style={styles.background}>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yodaTranslate}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 style={styles.text}>Yoda Translate Application</h5>
              <hr style={styles.text}></hr>
              <p style={styles.text}>
                This unique application utilizes two API's that when combined,
                produce an inspirational quote from the widely known character,
                Yoda!
              </p>
              <div>
                <a
                  href="https://github.com/Morralytics/Yoda-Translator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    size="3x"
                    style={styles.linkLogo}
                  />
                  {' '}
                  <a
                  href="https://meetio-workspace.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                 <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={meetIO} alt="Second slide" />
            <Carousel.Caption>
              <h5 style={styles.text}>Meet-IO Workplace Application</h5>
              <hr style={styles.text}></hr>
              <p style={styles.text}>Sample text</p>
              <div style={styles.footer}>
                <a
                  href="https://github.com/Morralytics/Meet-IO"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>
                {' '}
                <a
                  href="https://meetio-workspace.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                 <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};
