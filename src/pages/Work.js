import { Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import meetIO from "../images/MeetIOProject.png";
import yodaTranslate from "../images/YodaProject.png";
import glazedAndConfused from "../images/GlazedAndConfused.png"

export const Work = () => {
  const styles = {
    background: {
      backgroundColor: "#212529",
      height: "100vh",
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: "25px",
    },
    alignment: {
        fontSize: "20px"
    },
    card: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "5%",
    },
    cardPanel: {
      borderRadius: '5px'
    },
    linkLogo: {
      color: "#1E3050",
      paddingRight: "5px",
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
    },
    containerStyle: {
        border: '2px groove',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '3px 3px 12px 8px #d8b65c'
    },
    caption: {
      marginBottom: '160px',
    },
    captionAdjust: {
      marginBottom: '140px',
    },
    captionAdjustTwo: {
      marginBottom: '110px'
    }
  };
  return (
    <div style={styles.background}>
      <Container>
        <Carousel style={styles.containerStyle}>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={yodaTranslate}
              alt="First slide"
              style={styles.cardPanel}
            />
              <h5 style={styles.text}>Yoda Translate Application</h5>
              <hr style={styles.text}></hr>
              <p style={styles.text}>
                This unique application utilizes two API's that when combined,
                produce an inspirational quote from the widely known character,
                Yoda!
              </p>
            <Carousel.Caption style={styles.caption}>
              <div style={styles.footer}>
                <a
                  href="https://github.com/Morralytics/Yoda-Translator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    size= '3x'
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
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src={meetIO} alt="Second slide" 
              style={styles.cardPanel}
            />
              <h5 style={styles.text}>Meet-IO Workplace Application</h5>
              <hr style={styles.text}></hr>
              <p style={{...styles.text, ...styles.alignment}}>An application that is designed for any team/family/or simply someone with a busy schedule to track what they need to get done and with whom via a live chat function utilzing websockets!</p>
            <Carousel.Caption style={styles.captionAdjust}>
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
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src={glazedAndConfused} alt="Third Slide" 
              style={styles.cardPanel}
            />
              <h5 style={styles.text}>Glazed & Confused</h5>
              <hr style={styles.text}></hr>
              <p style={{...styles.text, ...styles.alignment}}>An application that is designed for a flavorful and new Donut Shop that takes the user through a fantastic donut shopping experience!</p>
            <Carousel.Caption style={styles.captionAdjustTwo}>
              <div style={styles.footer}>
                <a
                  href="https://github.com/Morralytics/Glazed-and-Confused"
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
                <br></br>
                <a
                  href="https://glazed-and-confused.herokuapp.com/"
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
