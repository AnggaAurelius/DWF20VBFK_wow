import React from 'react';
import '../App.css';
import bg from '../bgland.png';
import wow from '../wow (2).png';
import { Button, Modal, Form } from 'react-bootstrap';



function SignUp(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <strong>Sign Up</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formFullName">
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <br/>
                    <Button className="w00" variant="danger" type="submit">
                        Submit</Button>
                    <div><br /><p>Already have an account ? <strong> Klik Here</strong></p></div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

function SignIn(props) {
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
                    <Button className="w00" variant="danger" type="submit">
                        Submit</Button>
                    <div><br /><p>Don't have an account ? <strong> Klik Here</strong></p></div>
                    
                </Form>
            </Modal.Body>
        </Modal>
    );
}

function LandingPage() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <div className="bg">
            <img className="img" src={bg} alt=""/>       
            <img className="wow" src={wow} alt="" />
            {/* <img className="wow2" src={window} alt="" /> */}
            <p className="desc">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
           
            <Button className="sign" variant="danger" onClick={() => setModalShow2(true)}>Sign Up</Button>
           
            <button className="sign sign-in"  onClick={() => setModalShow(true)}>Sign In</button>
            <SignIn
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
             <SignUp
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </div>
    );
}

export default LandingPage;