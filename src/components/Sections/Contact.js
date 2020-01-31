import React from 'react'
import EForm from './EForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        orginization: '',
        message: '',
        alert: false,
        formIsValidated: true
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Validating form...');
        if (this.state.email !== '' && this.state.message !== '') {
            this.setState({ formIsValidated: true, alert: true  });
            console.log('Form is valid', this.state);
            this.props.onHide();
            // Send message
            this.setState({ name: '', email: '', orginization: '', message: '' });
        }
        else {
            console.log('Form invalid');
            this.setState({ formIsValidated: false });
        }
    };

    closeAlert = () => {
        this.setState({ alert: false });
        console.log('closing alert');
    }

    render() {
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
            {  this.state.alert &&
                <Alert className="fixed-to-top" variant="warning" onClose={this.closeAlert} dismissible>
                    <Alert.Heading>Message Sent</Alert.Heading>
                    <p>
                    Thank you for contacting me. You should see an automatic reply in your inbox!
                    </p>
                </Alert>
            }
            <Modal
                {...this.props}
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
                    <EForm change={this.changeHandler} validated={this.state.formIsValidated}/>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col> 
                                <Button variant="warning" type="submit" onClick={this.submitHandler}>
                                    Send
                                </Button>
                            </Col>
                            <Col>
                                <Button className="float-right" variant="warning" onClick={this.props.onHide}>
                                    Close
                                </Button>
                            </Col>
                        </Row>
                    </Container>         
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default Contact;