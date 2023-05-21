import React from 'react'
import ProjectFooter from '../ProjectFooter';
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
            color: "white",
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
            boxShadow: '3px 3px 12px 8px #d8b65c',
            width: '75%',
            margin: 'auto'
        },
        carouselControl : {
            backgroundImage: 'none',
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
        <>
            <Carousel style={styles.containerStyle}>
                {projects && projects.map((project) => (
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={`images/${project.image}`}
                            alt={project.title}
                            style={styles.cardPanel}
                        />
                        <br></br>
                        <h5 className='projectText' style={styles.text}>{project.title}</h5>
                        <hr id='projectRuler' className='projectText' style={styles.text}></hr>
                        <p className='projectText' style={styles.text}>{project.content}</p>
                        <div style={styles.footer}>
                            <a
                                href={project.gitHubUrl}
                                title='GitHub Repository'
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    id='gitHub'
                                    icon={faSquareGithub}
                                    size='3x'
                                    style={styles.linkLogo}
                                />
                            </a>
                            {' '}
                            <a
                                href={project.liveUrl}
                                title='Live application'
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    id='linkedIn'
                                    icon={faSquareArrowUpRight}
                                    size="3x"
                                    style={styles.linkLogo}
                                />
                            </a>
                        </div>
                        <br></br>
                    </Carousel.Item>
                ))}
            </Carousel>
            <ProjectFooter />
        </>
    )
}

export default ProjectList;


