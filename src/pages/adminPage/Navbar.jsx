import React, { useRef } from "react";
import wow from '../landingPage/img/wow.png';
// import aksi from './image/aksi.png';
import foto from '../../component/image/Profile.png';
import add from '../../component/image/add.png';
import sub from '../../component/image/sub.png';
import "./dropStyles.css";
import { useDetectOutsideClick } from "./overlay";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
 
    return (
        <div className="">
            <img className="logowow ml-5 mt-5 sticky"  src={wow} alt=""/>
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
                            <a href="#">Saved</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;
