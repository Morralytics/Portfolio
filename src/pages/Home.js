import React from "react";
import { Container } from "react-bootstrap";

export const Home = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'white',
            textAlign: 'center',
        }
    }
    return (
        <div style={styles.background}>
            <Container>
                <div style={styles.text}>
                    
                </div>
            </Container>
        </div>
    )
}