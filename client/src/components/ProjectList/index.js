import React from 'react'
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ProjectList = ({ projects }) => {
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

    console.log(projects)
    if (!projects.length) {
        return <h3>No projects yet. Go make something!</h3>
    }

    return (
        <Carousel style={styles.containerStyle}>
            {projects && projects.map((project) => (
                <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={project.image}
                    alt={project.title}
                    style={styles.cardPanel}
                />
                <h5 style={styles.text}>{project.title}</h5>
                <hr style={styles.text}></hr>
                <p style={styles.text}>{project.content}</p>
                <Carousel.Caption style={styles.caption}>
                    <div style={styles.footer}>
                        <a
                            href={project.gitHubUrl}
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
                            href={project.liveUrl}
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
            ))}
        </Carousel>
    )
}

export default ProjectList;


