import React from 'react'
import Form from 'react-bootstrap/Form';

export default class EForm extends React.Component {

    render() {
    return (
        <Form onKeyDown={e => e.stopPropagation()} validated={this.props.isValidated}>
            <Form.Group controlId="nameForm">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter name" onChange={this.props.change} />
            </Form.Group>
            <Form.Group controlId="emailForm">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.props.change} />
                {!this.props.validated && <div className="form-warning">Please enter a valid email.</div>}
            </Form.Group>

            <Form.Group controlId="orginizationForm">
                <Form.Label>Organization</Form.Label>
                <Form.Control name="orginization" type="text" placeholder="Enter orginization or company" onChange={this.props.change} />
            </Form.Group>
            <Form.Group controlId="messageForm">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows="3" onChange={this.props.change} />
                {!this.props.validated &&  <div className="form-warning">Please enter a message.</div>}
            </Form.Group>                  
        </Form>
    );
    }
}