import { Container, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import Iframe from "react-iframe";

export const Resume = () => {
    const [isHover, setIsHover] = useState(false);

    const handleHoverIn = () => {
        setIsHover(true);
    };

    const handleHoverOut = () => {
        setIsHover(false);
    };

    const downloadFile = () => {
        window.location.href="https://docs.google.com/document/d/1n-tPFmSOjr8cUECOtYxSO2hdJiFesNsfgQl90tLT-R0/export?format=pdf"
    }

    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'white',
            textAlign: 'center',
        },
        btn: {
            color: '#212529',
            backgroundColor: 'white',
            border: '#212529',
        },
        hover: {
            backgroundColor: isHover ? '#45c490' : 'white',
            opacity: isHover ? '.8' : '1',
            boxShadow: isHover ? '2px 2px 25px 1px #45c490' : '',
        },
        flexDisplay: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px'
        },
    }
    return (
        <div style={styles.background}>
            <Container>
                <div style={styles.text}>
                    <Iframe src="https://docs.google.com/document/d/e/2PACX-1vTxNhQjKHQSrB3nJLq3zXaXEGgjzJvrJWjbm1PA1T2U6nQ0f3lSMLYFs1JZi4cVXM7UqQ8e4YiEV-Ol/pub?embedded=true" title="Resume" width='70%' height="900px" marginHeight="0"></Iframe>
                </div>
                <FloatingLabel style={styles.flexDisplay}>
                            <Button style={{ ...styles.btn, ...styles.hover }} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} onClick={downloadFile} as="input" type="submit" value="Download my Resume" />
                        </FloatingLabel>
            </Container>
        </div>
    )
}