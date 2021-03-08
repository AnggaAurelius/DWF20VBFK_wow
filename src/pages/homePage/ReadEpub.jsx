import React, { useState, useEffect } from "react";
import { ReactReader } from "react-reader";
import "./read.css";
import wow from "../landingPage/img/wow.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";

const ReadEpub = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const findBook = await API.get(`/book/${id}`);
      console.log(findBook);
      setBook(findBook.data.data.book);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="bg full">
      <div className="nav">
        <Link to="/beranda" as={Link}>
          <img className="logoo" src={wow} alt="" />
        </Link>
      </div>
      <div className="reader">
        <div style={{ position: "relative", height: "80%" }}>
          {" "}
          <ReactReader
            url={book.epubFile}
            title={book.title}
            location={"epubcfi(/6/2[cover]!/6)"}
            locationChanged={(epubcifi) => console.log(epubcifi)}
          />
        </div>
      </div>
    </div>
  );
};
export default ReadEpub;
