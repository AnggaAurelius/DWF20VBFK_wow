import React, {useState}from 'react';
import '../App.css';
import bg from './bgland.png';
import wow from './wow.png';
import { Button} from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LandingPage = () => {
    const [signIn, setModalShow] = useState(false);
    const [signUp, setModalShow2] = useState(false);  
    return (
        <div className="bg">
            <img className="img" src={bg} alt=""/>       
            <img className="wow" src={wow} alt="" />
            <p className="desc">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
            <Button className="sign" variant="danger" onClick={() => setModalShow2(true)}>Sign Up</Button>
            <button className="sign sign-in"  onClick={() => setModalShow(!signIn)}>Sign In</button>
            <SignIn
                show={signIn}
                onHide={() => setModalShow(false)}
            />
             <SignUp
                show={signUp}
                onHide={() => setModalShow2(false)}
                
            
            />
        </div>
    );
}

export default LandingPage;