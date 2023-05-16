import React from 'react'
import { Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ProjectList = ({
    projects
}) => {
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

    if (!projects.length) {
        return <h3>No projects yet. Go make something!</h3>
    }

    return (
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
                            size='3x'
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
    )
}

export default ProjectList;


