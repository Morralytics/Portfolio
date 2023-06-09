import React from "react";
import ProjectFooter from '../components/ProjectFooter';
import { Container } from "react-bootstrap";

import { QUERY_PHOTOGRAPHS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PhotoList from "../components/PhotoList";

export const About = () => {
    const styles = {
        listStyle: {
            lineHeight: '30px',
            listStyleType: 'none',
        },
    };

    const { data } = useQuery(QUERY_PHOTOGRAPHS);
    const photographs = data?.photographs || [];

    console.log(photographs)
    return (
        <>
        
            <div className="photographyPage" style={styles.background}>
            <br></br>
                <Container className="photographyContainer" style={styles.background}>
                    <div className="photographyText" style={styles.textHeader}>
                        <p>
                            Photography is a hobby of mine where I can fully express an eye for design and placement of objects. Similar to constructing a website, certain characteristics can be the highlight while supporting elements create the final piece.
                        </p>
                    </div>
                    <br></br>
                    <br></br>
                    <PhotoList
                        photographs={photographs}
                    />
                    <br></br>
                    <br></br>
                    <div className="photographyBackupText" style={styles.secondaryText}>
                        <p>
                            Each role of a Software Engineer is incredibly import for the stability of the application being worked on. The skills that need to be brought to the table now is more than just a simple webpage and the skills I have allow me to create some wonderful projects of my own.
                        </p>
                    </div>
                </Container>
                <br></br>
            </div>
            <ProjectFooter />
        </>
    )
}