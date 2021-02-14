import React, { useContext, useState } from "react";
import wow from '../landingPage/img/wow.png';
import foto from '../../component/image/Profile.png';
import "./dropStyles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppContext } from "../../component/GlobalContext";

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const setOverlay = () => setIsActive(false);
  const onClick = () => setIsActive(!isActive);
  const handleLogOut = () => {
        dispatch({
            type: "Logout",
        });
    };
 
    return (
        <div className="">
            <Link to="/beranda" as={Link} >
            <img className="logowow ml-5 mt-5 sticky"  src={wow} alt=""/></Link>
            <div className="container">
                <div className="menu-container"> 
                     <button onClick={onClick} className="menu-trigger">
                    <img className="logowow mt-5 sticky right mr-5" src={foto} />
                    </button>
                    <nav className={`menu ${isActive ? "active" : ""}`} >
                        <ul>
                            <li>
                            <Link to="/add" as={Link} >
                                {/* <img  className="mr-3" src={add} alt=""/> */}
                                Add Book</Link>
                            </li>
                            <li>
                            <Link to="/list" as={Link} >
                                {/* <img  className="mr-3" src={sub} alt=""/> */}
                                Transaction</Link>
                            </li>
                            <li>
                             <Link to="/" as={Link} onClick={handleLogOut} >
                                {/* <img  className="mr-3" src={sub} alt=""/> */}
                                Log Out</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`Overlay ${isActive ? "Show" : ""}`}
                onClick={() => setOverlay()} />
        </div>
        
    )
}

export default Navbar;
