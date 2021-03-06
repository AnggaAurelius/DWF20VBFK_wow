import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../component/GlobalContext";
import email from "./image/email.png";
import gender2 from "./image/gender.png";
import call from "./image/call.png";
import map from "./image/map.png";
import { Button, Modal, Form } from "react-bootstrap";

import SideBar from "../../component/SideBar";
import { useHistory } from "react-router-dom";
import { API } from "../../config/api";
import { createBrowserHistory } from "history";

const Profile = () => {
  const history = useHistory();
  const history2 = createBrowserHistory();
  const path = history2.location.pathname;
  const [state] = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const isSubscribe = state.subscribe;
  const [show, setShow] = useState(false);
  const [modal2, setModal2] = useState("");
  const handleClose = () => {
    setShow(false);
    setFile("");
  };
  const subscribe = (id) =>
    isSubscribe ? history.push(`/detail/${id}`) : setModal(true);
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const findBook = await API.get(`/mylist`);
      setBook(findBook.data.data.books);
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState([]);
  const getUser = async () => {
    try {
      const mydata = await API.get(`/user`);
      setData(mydata.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const [form, setForm] = useState({
    gender: "",
    phone: "",
    address: "",
  });
  const handleShow = () => {
    setModal2("Edit Profile");
    setShow(true);
    setForm({
      gender: data.gender,
      phone: data.phone,
      address: data.address,
    });
  };
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { gender, phone, address } = form;
  const submit = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        gender,
        phone,
        address,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await API.patch("/edit-user", body, config);
      getUser();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const imgProfile = () => {
    setModal2("Profile Picture");
    setShow(true);
  };
  const [form2, setForm2] = useState({
    imageFile: null,
  });
  const [filee, setFile] = useState();

  const onChange2 = (e) => {
    const updateForm = { ...form2 };
    updateForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;

    setForm2(updateForm);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const { imageFile } = form2;

  const submitImage = async (e) => {
    e.preventDefault();

    try {
      const body = new FormData();

      body.append("imageFile", imageFile);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await API.patch("/edit-pic", body, config);
      history.push(`/loading${path}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
    getUser();
  }, []);
  return (
    <div className=" bg row pt-4">
      {/* <div
        className={`p-4 text-center red fs-18 Modalsub ${modal ? "Show" : ""}`}
      >
        <p>please make a payment to read the book</p>
      </div> */}
      <SideBar />
      <div className="col-md-8">
        <div className="col">
          <h1 className="mt-5 mb-5 timesNew">Profile</h1>
          <div className="pp">
            <div className="mt-5 ml-5">
              <br />
              <br />
              <div className=" float-right pr-5">
                <img
                  src={`http://localhost:5000/uploads/${data.avatar}`}
                  alt=""
                  onClick={imgProfile}
                  className="pointer profilPic"
                />{" "}
                <br />
                <br />
                <button className="w00 btn-red " type="" onClick={handleShow}>
                  Edit profil
                </button>
              </div>
              <div>
                <img className=" float-left pt-3" src={email} alt="" />
                <div className="ml-5 ">
                  <h5 className="font-weight-bold">{data.email}</h5>
                  <p>email</p>
                </div>
              </div>
              <div className="pt-3">
                <img className=" float-left pt-3" src={gender2} alt="" />
                <div className="ml-5">
                  <h5 className="font-weight-bold">{data.gender}</h5>
                  <p>Gender</p>
                </div>
              </div>
              <div className="pt-3">
                <img className=" float-left pt-3" src={call} alt="" />
                <div className="ml-5">
                  <h5 className="font-weight-bold">{data.phone}</h5>
                  <p>Mobile Phone</p>
                </div>
              </div>
              <div className="pt-3 pb-5">
                <img className=" float-left pt-3" src={map} alt="" />
                <div className="ml-5">
                  <h5 className="font-weight-bold">{data.address}</h5>
                  <p>Address</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="timesNew pt-5 pb-5">My List Book</h2>
          <div className="row">
            {book.map((Books) => (
              <div
                className=" mr-3 ml-3 "
                style={{ width: 200 }}
                key={Books.id}
              >
                <img
                  className="lbook flink profilPic"
                  src={`http://localhost:5000/uploads/${Books.thumbnail}`}
                  alt=""
                  onClick={() => subscribe(Books.id)}
                />
                <h3 className="mt-3 timesNew text-truncate">{Books.title}</h3>
                <p className="gray">{Books.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`Overlay ${modal ? "Show" : ""}`}
        onClick={() => setModal(false)}
      />
      <div className="bgland" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modal2}</Modal.Title>
        </Modal.Header>
        {modal2 === "Edit Profile" ? (
          <Form onSubmit={(e) => submit(e)}>
            <Modal.Body>
              <h5>Gender</h5>
              <Form.Group controlId="" className="">
                <Form.Control
                  className=""
                  type="text"
                  placeholder={data.gender}
                  name="gender"
                  value={gender}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Form.Group>
              <h5>Phone</h5>
              <Form.Group controlId="" className="">
                <Form.Control
                  className=""
                  type="text"
                  placeholder={data.phone}
                  name="phone"
                  value={phone}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Form.Group>
              <h5>Address</h5>
              <Form.Group controlId="" className="">
                <Form.Control
                  className=""
                  type="text"
                  placeholder={data.address}
                  name="address"
                  value={address}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          <Form onSubmit={(e) => submitImage(e)}>
            <Modal.Body>
              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  name="imageFile"
                  onChange={(e) => onChange2(e)}
                  feedbackTooltip
                />
              </Form.Group>
              <img src={filee} alt="" className="preview2 mb-2" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Profile;
