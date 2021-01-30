import React from 'react';
import wow from '../landingPage/wow.png';
import foto from './image/Profile.png';
import icon from './image/iconp.png';
import sub from './image/sub.png';
import logout from './image/logout.png';

export const SideBar = () => {
    return (
        <div className="col-md-3 " >
                <img className="logowow mx-auto d-block"  src={wow} alt=""/>
                <br/>
                <img className="foto mx-auto d-block"  src={foto} alt=""/>
                <div >
                    <h3 className="text-center font-weight-bold mt-5">Egi Ganteng</h3>
                    <p className="text-center text-danger font-weight-bold mt-3">Not Subscribtion Yet</p>
                    <div  className="  ">
                        <hr className="line" />
                        <div className=" mtop ">
                            <img className="mini float-left"  src={icon} alt=""/><p>&nbsp;&nbsp;Profile</p>
                        </div>
                        <div className=" mtop mbot ">
                         <img className="mini float-left"  src={sub} alt=""/><p>&nbsp;&nbsp;Subscribe</p>
                        </div>
                        <hr className="line" />
                        <div className=" mtop ">
                            <img className="mini float-left"  src={logout} alt=""/><p className="" >&nbsp;&nbsp;Logout</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SideBar;