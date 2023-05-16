import React from "react";
import { Container } from "react-bootstrap";
import ProfilePicure from "../images/ProfilePicture.jpg";

export const Home = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        textAlign: {
            textAlign: 'center',
        },
        textStyle: {
            color: 'white',
            fontFamily: 'Open Sans',
        },
        textHeader: {
            fontSize: "50px",
        },
        textContent: {
            fontSize: "25px",
        },
        imgAlign: {
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        imgStyle: {
            border: '2px groove',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: '3px 3px 12px 8px #d8b65c'
        },
    }
    return (
        <div style={styles.background}>
            <Container>
                <div style={{...styles.textAlign, ...styles.textStyle, ...styles.textHeader}}>
                    <p>
                        Hello and welcome!
                    </p>
                </div>
                <br></br>
                <div style={styles.imgAlign}>
                    <img
                        className="d-block w-100 img-fluid rounded-circle"
                        src={ProfilePicure}
                        alt="Profile"
                        style={styles.imgStyle}
                    />
                </div>
                <div style={{...styles.textAlign, ...styles.textStyle, ...styles.textContent}}>
                    <br></br>
                    <p>
                        My name is Nick Morris
                        <br></br>
                        I am a Full Stack Engineer based in beautiful Bend Oregon where I design and build websites for everyone to use! 
                    </p>
                </div>
            </Container>
        </div>
    )
}