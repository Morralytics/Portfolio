import React from 'react'

const PhotoList = ({ photographs }) => {
    const styles = {
        text: {
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Open Sans',
        },
        cardStyle: {
            display: 'flex',
            gap: '30px',
        },
        imgStyle: {
            boxShadow: '3px 3px 12px 8px #d8b65c'
        },
    }

    return (
        <div style={{ ...styles.text, ...styles.cardStyle }}>
            <Card style={styles.imgStyle}>
                <Card.Img variant="top" src="images/Bridge.JPEG" />
                <Card.Body>
                    <Card.Title>Forward onto Freedom</Card.Title>
                    <Card.Text>
                        Taken off the Oregon Coast during a trip not planned
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PhotoList;