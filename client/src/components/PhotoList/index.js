import React from 'react'
import { Card } from 'react-bootstrap'

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
            {photographs && photographs.map((photograph) => (
                <Card style={styles.imgStyle} key={photograph.id}>
                    <Card.Img variant="top" src={`images/${photograph.image}`} />
                    <Card.Body>
                        <Card.Title>{photograph.title}</Card.Title>
                        <Card.Text>{photograph.content}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default PhotoList;