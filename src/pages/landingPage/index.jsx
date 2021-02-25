import React, {useState, useContext, useEffect}from 'react';
import { AppContext } from "../../component/GlobalContext"
import './style.css';
import bg from './img/bgland.png';
import wow from './img/wow.png';
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { API, setAuthToken } from "../../config/api";


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
    // console.log(state);
    // useEffect(() => {
    //     if (!state.loading && state.isLogin) history.push("/beranda");
    //  }, [state]);
    // //
    // Login
    //
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password:"",
    });
    

    const { email, password } = loginFormData;

    const handleLogin = (e) =>{
        setLoginFormData({...loginFormData, [e.target.name]:e.target.value});
    };
 
    const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        email,
        password,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/login", body, config);
      const result = user.data.data.user;

      if (result.role === "ADMIN"){
            dispatch({
                type: "ADMIN",
                payload: result,
            });
        history.push("/list");
      } else {
            dispatch({
                type: "Login_sukses",
                payload: result,
            });
        history.push("/beranda");
      }
      setAuthToken(result.token);

    } catch (error) {
      console.log(error);
    }
  };

    //
    // Register
    //
    const [formDataRegister, setFormDataRegister] = useState({
        email2: "",
        password2 : "",
        fullname : "",
    });
    const {email2, password2, fullname} = formDataRegister;
    const handleChangeRegister=(e)=> {
        setFormDataRegister({
            ...formDataRegister, [e.target.name]: e.target.value
        });
    }
    const registerSubmit = async (e) => {
        e.preventDefault();

        try {
      const body = JSON.stringify({
        email: email2,
        password: password2,
        fullName: fullname,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/register", body, config);

      dispatch({
        type: "Login_sukses",
        payload: user.data.data.user,
      });

      setAuthToken(user.data.data.user.token);

      history.push("/beranda");
    } catch (error) {
      console.log(error);
    }
    }
    return (
        <div className="bg">
            <img className="img" src={bg} alt=""/>       
            <img className="wow" src={wow} alt="" />
            <p className="desc">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
            <button className="sign  avenir btn-red " variant="danger" onClick={() => setSignUpModal(!signUpModal)}>Sign Up</button>
            <button className="sign sign-in avenir bold"  onClick={() => setSignInModal(!signInModal)}>Sign In</button>
            {/* Modal Sign up */}
            <div className={`pl-5 pr-5 Modal ${signUpModal ? "Show" : ""}`}>
                <h3 className="mgtop pt-4 bold">Sign Up</h3><br/>
                <Form  onSubmit={(e)=>registerSubmit(e)}>
                    <Form.Group controlId="formBasicEmail" className=" form">
                        <Form.Control  className="p-3 form" type="email" placeholder="Email" name="email2" value={email2} onChange={(e)=>handleChangeRegister(e)} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="form"  >
                        <Form.Control  className="form" type="password" placeholder="Password" name="password2" value={password2} onChange={(e)=>handleChangeRegister(e)} required/>
                    </Form.Group>
                    <Form.Group controlId="formFullName" className=" form">
                        <Form.Control  className="form" type="text" placeholder="Full Name" name="fullname" value={fullname} onChange={(e)=>handleChangeRegister(e)} required/>
                    </Form.Group><br/>
                    <div className="">
                    <button className="w00 btn-red"  type="submit">Sign Up</button>
                        <p className="mt-4 text-center">Already have an account ? <a className="text-dark" href="/#" onClick={()=>switching(true)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
            </div>
            {/* Modal Sign In */}
            <div className={` pl-5 pr-5 p-4 Modal ${signInModal ? "Show" : ""}`}>
                <h3 className="mgtop bold">Sign In</h3><br/>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group controlId="formBasicEmail"  className="form" >
                        <Form.Control  className="form" type="email" placeholder="Email"
                        name="email" value={email} onChange={(e)=>handleLogin(e)} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword"  className="form" >
                        <Form.Control  className="form" type="password" placeholder="Password"
                         name="password" value={password} onChange={(e)=>handleLogin(e)} required/>
                    </Form.Group><br/>
                    <button  className="w00 btn-red" type="submit">Sign in</button>
                    <div><br />
                        <p className="text-center">Don't have an account ? <a className="text-dark" href="/#" onClick={()=>switching(false)}><strong > Klik Here</strong></a></p>
                    </div>
                </Form>
            </div>
            {/* Overlay */}
            <div className={`Overlay ${signUpModal || signInModal ? "Show" : ""}`}
                onClick={() => setOverlay()} />
            <div className="bgland" />
        </div>
    );
}

export default LandingPage;