import React, {useState, useContext}from 'react';
import { AppContext } from "../component/GlobalContext"
import './style.css';
import bg from './bgland.png';
import wow from './wow.png';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";


const LandingPage = () => {
    const history = useHistory();
    const [state, dispatch] = useContext(AppContext);
    const [signUpModal, setSignUpModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const switching = (stateModal) => {
    setSignInModal(stateModal);
    setSignUpModal(!stateModal);
    }
    const setOverlay = () => {
        setSignInModal(false);
        setSignUpModal(false);
    }
    const [title, info] = useContext(AppContext);
 
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password:"",
    });
    

    const { email, password } = loginFormData;

    const handleLogin = (e) =>{
        setLoginFormData({...loginFormData, [e.target.name]:e.target.value})
    };
 
    const onSubmit = (e) => {
        e.preventDefault();

        if( email === "anggaaurelius@gmail.com" && password === "123"){
            dispatch({
                type: "Login_sukses"
            });
            history.push("/beranda");
        } else {
            alert("salah");
            dispatch({
                type: "Logout"
            });
        }
    }
    const [formDataRegister, setFormDataRegister] = useState({
        email2: '',
        password2 : '',
        fullname : ''
    });
    const {email2, password2, fullname} = formDataRegister;
    const handleChangeRegister=(e)=> {
        setFormDataRegister({
            ...formDataRegister, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="bg">
            <img className="img" src={bg} alt=""/>       
            <img className="wow" src={wow} alt="" />
            <p className="desc">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
            <button className="sign  avenir btn-red " variant="danger" onClick={() => setSignUpModal(!signUpModal)}>Sign Up</button>
            <button className="sign sign-in avenir bold"  onClick={() => setSignInModal(!signInModal)}>Sign In</button>
            <div className={`pl-5 pr-5 Modal ${signUpModal ? "Show" : ""}`}>
                <h3 className="mgtop pt-4 bold">Sign Up</h3><br/>
                <Form  onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail" className=" form">
                        <Form.Control className="p-3 form" type="email" placeholder="Email" name="email2" value={email} onChanged={e => handleChangeRegister(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="form"  >
                        <Form.Control className="form" type="password" placeholder="Password" name="password2"  onChanged={e => handleChangeRegister(e)}/>
                    </Form.Group>
                    <Form.Group controlId="formFullName" className=" form">
                        <Form.Control  className="form" type="text" placeholder="Full Name" name="fullname" onChanged={e => handleChangeRegister(e)}/>
                    </Form.Group>
                    <br/>
                    <Link to="/beranda" as={Link}>
                    <button className="w00 btn-red"  type="submit">Sign Up</button></Link>
                    <div><br/>
                        <p>Already have an account ? <a className="text-dark" href="#" onClick={() => switching(true)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
                
            </div>
            <div className={` pl-5 pr-5 p-4 Modal ${signInModal ? "Show" : ""}`}>
                <h3 className="mgtop bold">Sign In</h3><br/>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group controlId="formBasicEmail"  className="form" >
                        <Form.Control  className="form" type="email" placeholder="Enter email"
                        name="email" value={email} onChange={(e)=>handleLogin(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword"  className="form" >
                        <Form.Control  className="form" type="password" placeholder="Password"
                         name="password" value={password} onChange={(e)=>handleLogin(e)}/>
                    </Form.Group><br/>
                    <button  className="w00 btn-red" type="submit">Submit</button>
                    <div><br />
                        <p>Don't have an account ? <a className="text-dark" href="#" onClick={() => switching(false)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
                
            </div>
            <div className={`Overlay ${signUpModal || signInModal ? "Show" : ""}`}
                onClick={() => setOverlay()} />
            <div className="bgland" />
        </div>
    );
}

export default LandingPage;