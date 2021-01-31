import React from 'react';
import wow from '../landingPage/wow.png';
import file from './image/AttacheBook.png';
import add from './image/addBook.png';
import foto from '../component/image/Profile.png';


export const AddBook = () => {
    return ( 
        <div className="" >
            <img className="logowow ml-5 mt-5 sticky"  src={wow} alt=""/>
            <img className="logowow mt-5 sticky right mr-4"  src={foto} alt=""/>
                <div className="mlr " >
                    <h1 className="mbot timesNew">Add Book</h1>
                    <form  className="">
                    <div className="form-group formsub mt-5 avenir ">
                        <input type="text" className="formsub w00 pl-3 fs-18" fs-18 id="uname" placeholder="Title" name="uname" />
                    </div>
                    <div className="form-group formsub mt-5">
                        <input type="text" className="formsub w00 pl-3 fs-18" id="uname" placeholder="Publication Date" name="uname" />
                    </div>
                    <div className="form-group formsub mt-5">
                        <input type="text" className="formsub w00 pl-3 fs-18" id="uname" placeholder="Pages" name="uname" />
                    </div>
                    <div className="form-group formsub mt-5">
                        <input type="text" className="formsub w00 pl-3 fs-18" id="uname" placeholder="Author" name="uname" />
                    </div>
                    <div className="form-group formsub mt-5">
                        <input type="text" className="formsub w00 pl-3 fs-18" id="uname" placeholder="ISBN" name="uname" />
                    </div>
                    <div className="form-group txtarea mt-5 ">
                        <textarea type="text" className="txtarea w00 pl-3 pt-2 fs-18" id="uname" placeholder="About this book" name="uname" />
                    </div>
                    <div className="form-group">
                        <input type="file" id="actual-btn" hidden/>
                        <label for="actual-btn" className="fladd"><img  className="" src={file} alt=""/></label>
                     </div>
                    <button  className=" mt-4 btn-red bold subtn avenir pl-3 float-right"  type="submit" >Add Book<img  className="ml-3" src={add} alt=""/></button>
                    <br/>
                    </form>
                </div>
            
        </div>
    )
}

export default AddBook;