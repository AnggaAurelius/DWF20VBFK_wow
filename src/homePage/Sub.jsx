import React from 'react';
import wow from './image/ow.png';
import file from './image/Attache.png';
import SideBar from '../component/SideBar';
// import { Button, Form } from 'react-bootstrap';

export const Sub = () => {
    return (
        <div className="bg full row pt-4">
            <SideBar/>
            <div className="col-md-7 text-center centerd" >
                <h1 className="mb-5" ><strong>Premium</strong></h1>
                <p>Pay now and access all the latest books from  <img className="smpic" src={wow} alt=""/></p>
                <p><img className="smpic" src={wow} alt=""/> : <strong>0981312323 </strong></p>
                <form  className="sub">
                <div className="form-group formsub">
                    <input type="text" className="w00 formsub pl-3" id="uname" placeholder="Input Your Account Number" name="uname" />
                </div>
                <div className="form-group">
                    <input type="file" id="actual-btn" hidden/>
                    <label for="actual-btn" ><img className="flbtn" src={file} alt=""/></label>
                </div>
                <button  className="w00 mt-4  btn-red bold subtn avenir "  type="submit" >Send</button>
                <br/>
            </form>
            </div>
        </div>
    )
}

export default Sub;