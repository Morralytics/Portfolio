import { Container, FloatingLabel, Form } from "react-bootstrap";

export const Contact = () => {
    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh'
        },
        text: {
            color: 'black',
            textAlign: 'center',
        },
        form: {
            paddingTop: '20%'
        }
    }
    return (
        <div style={styles.background}>
            <Container>
                <div className="form" style={{...styles.text, ...styles.form}}>
                    <>
                    <FloatingLabel
                            controlId="nameInput"
                            label="Your name"
                            className="mb-3"
                        >
                            <Form.Control as="textarea"  placeholder="Name Name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="emailInput"
                            label="E-mail"
                            className="mb-3"
                        >
                            <Form.Control type="email"  placeholder="your-email@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="commentInput" label="What would you like to say?">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </>
                </div>
            </Container>
        </div>
    )
}