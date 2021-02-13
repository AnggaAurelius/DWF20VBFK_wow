import React, { useRef, useContext } from "react";
import wow from '../landingPage/img/wow.png';
import foto from '../../component/image/Profile.png';
import "./dropStyles.css";
import { useDetectOutsideClick } from "./overlay";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppContext } from "../../component/GlobalContext";

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
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
                    <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`} >
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
        </div>
        
    )
}

export default Navbar;
