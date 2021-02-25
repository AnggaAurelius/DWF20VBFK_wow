import React, { useContext, useState } from "react";
import wow from '../landingPage/img/wow.png';
import foto from '../../component/image/Profile.png';
import add from './image/addBook.png';
import logOut from './image/logoutRed.png';
import list from './image/list.png';
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
                    <img className="logowow mt-5 sticky right mr-5" src={foto} alt=""/>
                    </button>
                    <nav className={`menu ${isActive ? "active" : ""}`} >
                        <ul>
                            <li>
                            <Link to="/add" as={Link} className="bold">
                                <img  className="mr-3" src={add} alt="" width="35px"/>
                                Add Book</Link>
                            </li>
                            <li>
                            <Link to="/list" as={Link} className="bold">
                               <img  className="mr-3" src={list} alt="" width="35px"/>
                                Transaction</Link>
                            </li>
                            <li>
                             <Link to="/" as={Link} onClick={handleLogOut} className="bold">
                                <img  className="mr-3" src={logOut} alt="" width="35px"/>
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
