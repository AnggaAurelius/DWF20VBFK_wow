import React, {useState}from 'react';
import bg from './bgland.png';
import wow from './wow.png';
import { Form } from 'react-bootstrap';


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
    const [formDataRegister, setFormDataRegister] = useState({
        email: '',
        password : '',
        fullname : ''
    });
    
    const {email, password, fullname} = formDataRegister;

    const handleChangeRegister=(e)=> {
        setFormDataRegister({
            ...formDataRegister, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        
    }
    return (
        <div className="bg ">
            <img className="img" src={bg} alt=""/>       
            <img className="wow" src={wow} alt="" />
            <p className="desc">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
            <button className="sign  avenir btn-red " variant="danger" onClick={() => setDisplayModal(!signUpModal)}>Sign Up</button>
            <button className="sign sign-in avenir bold"  onClick={() => setSignInModal(!signInModal)}>Sign In</button>
            <div className={`pl-5 pr-5 Modal ${signUpModal ? "Show" : ""}`}>
                <h3 className="mgtop pt-4 bold">Sign Up</h3><br/>
                <Form  onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="p-3" type="email" placeholder="Email" name="email" value={email} onChanged={e => handleChangeRegister(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name="password" onChanged={e => handleChangeRegister(e)}/>
                    </Form.Group>
                    <Form.Group controlId="formFullName">
                        <Form.Control type="text" placeholder="Full Name" name="fullname" onChanged={e => handleChangeRegister(e)}/>
                    </Form.Group>
                    <br/>
                    <button className="w00 btn-red" type="submit">Sign Up</button>
                    <div><br/>
                        <p>Already have an account ? <a className="text-dark"  onClick={() => switchh(true)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
                
            </div>
            <div className={` pl-5 pr-5 p-4 Modal ${signInModal ? "Show" : ""}`}>
                <h3 className="mgtop bold">Sign In</h3><br/>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group><br/>
                    <button  className="w00 btn-red" type="submit">Submit</button>
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