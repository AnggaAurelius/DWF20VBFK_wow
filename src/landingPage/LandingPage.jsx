import React, {useState}from 'react';
import bg from './bgland.png';
import wow from './wow.png';
import { Button, Form } from 'react-bootstrap';


const LandingPage = () => {
    const [signUpModal, setDisplayModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const switchh = (yoo) =>{
    setSignInModal(yoo);
    setDisplayModal(!yoo);
    }
    const setOverlay = () => {
        setSignInModal(false);
        setDisplayModal(false);
    }
    return (
        <div className="bg ">
            <img className="img" src={bg} alt=""/>       
            <img className="wow" src={wow} alt="" />
            <p className="desc">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
            <Button className="sign mrh avenir " variant="danger" onClick={() => setDisplayModal(!signUpModal)}>Sign Up</Button>
            <button className="sign sign-in avenir bold"  onClick={() => setSignInModal(!signInModal)}>Sign In</button>
            <div className={`Modal ${signUpModal ? "Show" : ""}`}>
                <h3 className="mgtop">Sign Up</h3><br/>
                <button
                className="Close"
                onClick={() => setDisplayModal(!signUpModal)}
                >
                x
                </button>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formFullName">
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <br/>
                    <Button className="w00 mrh" variant="danger" type="submit">Submit</Button>
                    <div><br/>
                        <p>Already have an account ? <a className="text-dark" href="#" onClick={() => switchh(true)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
                
            </div>
            <div className={`avenir w p-5 Modal ${signInModal ? "Show" : ""}`}>
                <h3 className="mgtop">Sign In</h3><br/>
                <button
                className="Close"
                onClick={() => setSignInModal(!signInModal)}
                >
                x
                </button>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group><br/>
                    <Button  className="w00 mrh"  variant="danger" type="submit">Submit</Button>
                    <div><br />
                        <p>Don't have an account ? <a className="text-dark" href="#" onClick={() => switchh(false)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
                
            </div>
            <div className={`Overlay ${signUpModal || signInModal ? "Show" : ""}`}
                onClick={() => setOverlay()} />

        </div>
    );
}

export default LandingPage;