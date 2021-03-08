import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../component/GlobalContext";
import frame from "./image/Frame.png";
import SideBar from "../../component/SideBar";
import { useHistory } from "react-router-dom";
import { API } from "../../config/api";

export const HomePage = () => {
  const history = useHistory();
  const [state] = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const isSubscribe = state.subscribe;
  const subscribe = (bookId) =>
    isSubscribe ? history.push(`/detail/${bookId}`) : setModal(true);

  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      setLoading(true);
      const books = await API.get("/books");
      setLoading(false);
      setBooks(books.data.data.books);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return loading ? (
    <h1></h1>
  ) : (
    <div className="bg row pt-4">
      <SideBar />
      <div
        className={`p-4 text-center red fs-18 Modalsub ${modal ? "Show" : ""}`}
      >
        <p>please make a payment to read the latest books</p>
      </div>
      <div className="col-md-9">
        <div className="col">
          <img className="frame" src={frame} alt="" />
          <h1 className="mt-5 mb-5 timesNew">List book</h1>
        </div>
        <div className=" row col">
          {books.map((Books) => (
            <div className="col-md-3 " key={Books.id}>
              <img
                className="lbook flink"
                src={Books.thumbnail}
                alt=""
                onClick={() => subscribe(Books.id)}
              />
              <h3 className="mt-3  timesNew text-truncate">{Books.title} </h3>
              <p className="gray mb-5">{Books.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`Overlay ${modal ? "Show" : ""}`}
        onClick={() => setModal(false)}
      />
      <div className="bgland" />
    </div>
  );
};

export default HomePage;
