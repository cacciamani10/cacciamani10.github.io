import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export function Contact(props) {
    return (
        <>
        <style type="text/css">
            {`
            .modal-content {
                background-color: #3d5863;
                color: #ebc634;
            }

            .modal-header {
                border-bottom: 1px solid #333
            }
            .modal-footer {
                border-top: 1px solid #333
            }
            `}
        </style>
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="contact-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact Me!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="nameForm">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="emailForm">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="orginizationForm">
                        <Form.Label>Orginization</Form.Label>
                        <Form.Control type="text" placeholder="Enter orginization or company" />
                    </Form.Group>
                    <Form.Group controlId="messageForm">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter your message" />
                    </Form.Group>                  
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row>
                        <Col> 
                            <Button variant="warning" type="submit">
                                Send
                            </Button>
                        </Col>
                        <Col>
                            <Button className="float-right" variant="warning" onClick={props.onHide}>
                                Close
                            </Button>
                        </Col>
                    </Row>
                </Container>         
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Contact;