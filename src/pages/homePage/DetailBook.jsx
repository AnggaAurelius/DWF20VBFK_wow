import React, { useState, useEffect } from "react";
import list from "./image/myList.png";
import SideBar from "../../component/SideBar";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../config/api";
import { Button, Modal } from "react-bootstrap";

export const Detailbook = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Successfully added book");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      setLoading(true);
      const findBook = await API.get(`/book/${id}`);

      setBook(findBook.data.data.book);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const addList = async () => {
    try {
      setLoading(true);
      const addBook = await API.post(`/addlist/${id}`);
      if (addBook.data.status === "Error") {
        setText(addBook.data.message);
      }
      setLoading(false);
      handleShow();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
    window.scrollTo(0, 0);
  }, []);

  const readEpub = () => history.push(`/read/${id}`);

  return loading ? (
    <h1></h1>
  ) : (
    <div className="bg row pt-4">
      <SideBar />
      <div className="col-md-8">
        <img
          className="cover mt-5 float-left mr-5"
          src={book.thumbnail}
          alt=""
        />
        <p className="mt-5 timesNew fs-50">{book.title}</p>
        <h1 className="gray fs-25">{book.author}</h1>
        <div className="mt-5">
          <h3 className="bold">Publication date</h3>
          <p className="gray">{book.publicationDate}</p>
          <h3 className="mt-4 bold">Pages</h3>
          <p className="gray">{book.pages}</p>
          <h3 className="mt-4 red bold">ISBN</h3>
          <p className="gray">{book.isbn}</p>
        </div>
        <br />
        <h2 className="detxt timesNew mb-4">About this book</h2>
        <p className="gray text-justify pb-5">{book.about}</p>
        <br />
        <button className="btn-red bwhkn2 mb-3" onClick={() => addList()}>
          Add My list <img className="ml-3" src={list} alt="" />
        </button>
        <button className="sign-in bwhknn mb-3" onClick={() => readEpub()}>
          Read Book {" >"}
        </button>
      </div>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Body>
          <h4 className="bold green text-center">{text}</h4>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Detailbook;
