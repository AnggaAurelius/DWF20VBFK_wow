import React, { useState, useContext } from "react";
import { AppContext } from "../../component/GlobalContext";
import wow from "./image/ow.png";
import file from "./image/Attache.png";
import SideBar from "../../component/SideBar";
import ImageUploading from "react-images-uploading";
import { API } from "../../config/api";

import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";

export const Sub = () => {
  const history = useHistory();
  const history2 = createBrowserHistory();
  const path = history2.location.pathname;
  const [, dispatch] = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const premium = () => {
    setModal(true);
    dispatch({
      type: "premium",
    });
  };

  const closeModal = () => {
    setModal(false);
    history.push(`/loading${path}`);
  };
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChangeImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const [form, setForm] = useState({
    thumbnail: null,
  });
  const [filee, setFile] = useState();

  const onChange = (e) => {
    const updateForm = { ...form };
    updateForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm(updateForm);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const { thumbnail } = form;

  const submitImage = async (e) => {
    e.preventDefault();

    try {
      const body = new FormData();

      body.append("thumbnail", thumbnail);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await API.post("/add-transaction", body, config);

      setForm({
        thumbnail: null,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg  row pt-4">
      <SideBar />
      <div
        className={`p-4  text-center green fs-18 Modalsub ${
          modal ? "Show" : ""
        }`}
      >
        <p>
          Thank you for subscribing to premium, your premium package will be
          active after our admin approves your transaction, thank you
        </p>
      </div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChangeImg}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          <div className="col-md-7 text-center centerd">
            <h1 className="mb-5 timesNew">
              <strong>Premium</strong>
            </h1>
            <p className="fs-18">
              Pay now and access all the latest books from{" "}
              <img className="smpic" src={wow} alt="" />
            </p>
            <p className="fs-18">
              <img className="smpic" src={wow} alt="" /> :{" "}
              <strong>0981312323 </strong>
            </p>

            <form className="sub" onSubmit={(e) => submitImage(e)}>
              <div className="form-group formsub">
                <input
                  type="text"
                  className="w00 formsub pl-3"
                  id="uname"
                  placeholder="Input Your Account Number"
                  name="uname"
                  require
                />
              </div>
              <div className="upload__image-wrapper">
                <div className="form-group">
                  <input
                    type="file"
                    id="actual-btn"
                    name="thumbnail"
                    onChange={(e) => onChange(e)}
                    // onClick={onImageUpload}
                    hidden
                  />
                  <label for="actual-btn">
                    <img className="flbtn" src={file} alt="" />
                  </label>
                </div>
              </div>
              <button
                className="w00 mt-4  btn-red bold subtn avenir "
                type="submit"
                onClick={premium}
              >
                Send
              </button>
              <br />
              <img src={filee} alt="" width="299" className="mt-3 mb-3" />
            </form>
            {imageList.map((image, index) => (
              <div key={index} className="image-item pt-5 pb-5">
                <img src={image.data_url} alt="" width="299" />
                <div className="image-item__btn-wrapper mt-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <div className={`Overlay ${modal ? "Show" : ""}`} onClick={closeModal} />
      <div className="bgland" />
    </div>
  );
};

export default Sub;
