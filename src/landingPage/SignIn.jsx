import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const SignIn = (props) => {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   <strong>Sign In</strong> 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group><br/>
                    <Button  className="w00"  variant="danger" type="submit">Submit</Button>
                    <div><br />
                        <p>Don't have an account ? <strong> Klik Here</strong></p>
                    </div>
                    
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignIn;