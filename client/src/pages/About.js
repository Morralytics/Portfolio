import React from "react";
import { Container, Card } from "react-bootstrap";

import { QUERY_PHOTOGRAPHS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PhotoList from "../components/PhotoList";

export const About = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        textHeader: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '20px',
            width: '50%',
            marginLeft: "auto",
            marginRight: "auto",
        },
        secondaryText: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '20px',
            width: '70%',
            marginLeft: "auto",
            marginRight: "auto",
        },
        listStyle: {
            lineHeight: '30px',
            listStyleType: 'none',
        },
    };

    const { data } = useQuery(QUERY_PHOTOGRAPHS);
    const photographs = data?.projects || [];

    return (
        <div style={styles.background}>
            <Container style={styles.background}>
                <div style={styles.textHeader}>
                    <p>
                        Photography is a hobby of mine where I can fully express an eye for design and placement of objects. Similar to constructing a website, certain characteristics can be the highlight while supporting elements create the final piece.
                    </p>
                </div>
                <br></br>
                <PhotoList 
                    photographs={photographs}
                />
                <br></br>
                <div style={styles.secondaryText}>
                    <p>
                        Each role of a Software Engineer is incredibly import for the stability of the application being worked on. The skills that need to be brought to the table now is more than just a simple webpage and the skills I have are as follows:
                    </p>
                    <ul style={styles.listStyle}>
                        <li>React.js</li>
                        <li>Packages through the Node Package Manager</li>
                        <li>Relational and Non-Relational Databases like MySQL and MongoDB</li>
                        <li>A background in Computer Science and the Python language</li>
                        <li>Websocket interactions like Socket.io</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}