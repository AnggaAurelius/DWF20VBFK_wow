import React from 'react';
import email from './image/email.png';
import gender from './image/gender.png';
import call from './image/call.png';
import map from './image/map.png';
import profil from './image/profil.png'
import cover from './image/detailbook.png';
import SideBar from '../component/SideBar';


export const HomePage = () => {
    return (
        <div className=" bg row pt-4">
            
            <SideBar/>
            <div className="col-md-8" >
                <div className="col" >
                    <h1 className="mt-5 mb-5 timesNew" >Profile</h1>
                    <div className="pp">
                        <div className="mt-5 ml-5" ><br/><br/>
                            <div className=" float-right pr-5">
                            <img  src={profil} alt=""/> <br/><br/>
                            <button className="w00 btn-red " type="">Edit profil</button></div>
                            <div>
                                <img className=" float-left pt-3" src={email} alt=""/>
                                <div className="ml-5 ">
                                    <h5 className="font-weight-bold">anggaaurelius@gmail.com</h5>
                                    <p>email</p>
                                </div>
                            </div>
                            <div className="pt-3" >
                                <img className=" float-left pt-3" src={gender} alt=""/>
                                <div className="ml-5">
                                    <h5 className="font-weight-bold">Male</h5>
                                    <p>Gender</p>
                                </div>
                            </div>
                            <div className="pt-3" >
                                <img className=" float-left pt-3" src={call} alt=""/>
                                <div className="ml-5">
                                    <h5 className="font-weight-bold">0838-8743-9399</h5>
                                    <p>Mobile Phone</p>
                                </div>
                            </div>
                            <div className="pt-3 pb-5" >
                                <img className=" float-left pt-3" src={map} alt=""/>
                                <div className="ml-5">
                                    <h5 className="font-weight-bold">Indonesia</h5>
                                    <p>Address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="timesNew pt-5 pb-5" >My List Book</h2>
                    <div className=" mr-3" >
                         <img className="lbook" src={cover} alt=""/>
                         <h3 className="mt-3 timesNew" >Tess on the Rosad</h3>
                         <p>Rachel Hartman</p>
                    </div>
                </div>
                
            </div>
             
        </div>
    )
}

export default HomePage;