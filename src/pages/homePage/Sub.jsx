import React,  { useState, useContext} from 'react';
import { AppContext } from "../../component/GlobalContext"
import wow from './image/ow.png';
import file from './image/Attache.png';
import SideBar from '../../component/SideBar';
import ImageUploading from "react-images-uploading";
// import { Button, Form } from 'react-bootstrap';

export const Sub = () => {
    const [state, dispatch] = useContext(AppContext);
    const [modal, setModal]=useState(false);
    const premium = () => {
        setModal(true)
            dispatch({
                type: "premium"
            });
    };
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
    // data for submit 
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
    return (
        <div className="bg  row pt-4">
            <SideBar/>
            <div className={`p-4  text-center green fs-18 Modalsub ${modal ? "Show" : ""}`}>
                <p>Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</p>
            </div><ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url">
                    {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    }) => (
            <div className="col-md-7 text-center centerd" >
                <h1 className="mb-5 timesNew" ><strong>Premium</strong></h1>
                <p className="fs-18">Pay now and access all the latest books from  <img className="smpic" src={wow} alt=""/></p>
                <p className="fs-18"><img className="smpic" src={wow} alt=""/> : <strong>0981312323 </strong></p>
                
                    <form  className="sub">
                <div className="form-group formsub">
                    <input type="text" className="w00 formsub pl-3" id="uname" placeholder="Input Your Account Number" name="uname" />
                </div>
                    <div className="upload__image-wrapper">
                            <div className="form-group">
                        <input type="file" id="actual-btn" hidden onClick={onImageUpload}/>
                        <label for="actual-btn" ><img className="flbtn" src={file} alt=""/></label>
                    </div>
                    </div>
                <button  className="w00 mt-4  btn-red bold subtn avenir "  type="button" onClick={premium}>Send</button>
                <br/> 
            </form> 
            {imageList.map((image, index) => (
                        <div key={index} className="image-item pt-5 pb-5">
                            <img src={image.data_url} alt="" width="299" />
                            <div className="image-item__btn-wrapper mt-2">
                            <button className="btn btn-primary" onClick={() => onImageUpdate(index)}>Update</button>
                            <button className="btn btn-danger ml-2" onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </div>
                        ))}
            </div>
            )}
            </ImageUploading>
            <div className={`Overlay ${modal ? "Show" : ""}`}
                onClick={() => setModal(false)} />
            <div className="bgland" />
        </div>
    )
}

export default Sub;