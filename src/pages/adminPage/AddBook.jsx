import React, { useState } from "react";
import file from "./image/AttacheBook.png";
import addBook from "./image/addBtn.png";
import AdminNavbar from "./Navbar";
import { API } from "../../config/api";

export const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    about: "",
    thumbnail: null,
    epubFile: null,
  });

  const onChange = (e) => {
    const updateForm = { ...form };
    updateForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm(updateForm);
  };

  const {
    title,
    publicationDate,
    pages,
    author,
    isbn,
    about,
    thumbnail,
    epubFile,
  } = form;

  const submitBook = async (e) => {
    e.preventDefault();

    try {
      const body = new FormData();

      body.append("title", title);
      body.append("publicationDate", publicationDate);
      body.append("pages", pages);
      body.append("author", author);
      body.append("isbn", isbn);
      body.append("about", about);
      body.append("thumbnail", thumbnail);
      body.append("epubFile", epubFile);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await API.post("/upload-book", body, config);

      setForm({
        title: "",
        publicationDate: "",
        pages: "",
        author: "",
        isbn: "",
        about: "",
        thumbnail: null,
        epubFile: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg">
      <AdminNavbar />
      <div className="mlr ">
        <h1 className="mbot timesNew">Add Book</h1>
        <form className="" onSubmit={(e) => submitBook(e)}>
          <div className="form-group formsub mt-5 avenir ">
            <input
              type="text"
              className="formsub w00 pl-3 fs-18"
              value={title}
              onChange={(e) => onChange(e)}
              placeholder="Title"
              name="title"
            />
          </div>
          <div className="form-group formsub mt-5">
            <input
              type="text"
              className="formsub w00 pl-3 fs-18"
              value={publicationDate}
              onChange={(e) => onChange(e)}
              placeholder="Publication Date"
              name="publicationDate"
            />
          </div>
          <div className="form-group formsub mt-5">
            <input
              type="text"
              className="formsub w00 pl-3 fs-18"
              value={pages}
              onChange={(e) => onChange(e)}
              placeholder="Pages"
              name="pages"
            />
          </div>
          <div className="form-group formsub mt-5">
            <input
              type="text"
              className="formsub w00 pl-3 fs-18"
              value={author}
              onChange={(e) => onChange(e)}
              placeholder="Author"
              name="author"
            />
          </div>
          <div className="form-group formsub mt-5">
            <input
              type="text"
              className="formsub w00 pl-3 fs-18"
              value={isbn}
              onChange={(e) => onChange(e)}
              placeholder="ISBN"
              name="isbn"
            />
          </div>
          <div className="form-group txtarea mt-5 ">
            <textarea
              type="text"
              className="txtarea w00 pl-3 pt-2 fs-18"
              value={about}
              onChange={(e) => onChange(e)}
              placeholder="About this book"
              name="about"
            />
          </div>
          <div className="form-group ">
            <input
              type="file"
              id="actual-btn"
              onChange={(e) => onChange(e)}
              name="epubFile"
              hidden
            />
            <label for="actual-btn" className="coverBtn bold">
              Attache Epub File
            </label>
          </div>
          <div className="form-group">
            <input
              type="file"
              id="actual-btn2"
              onChange={(e) => onChange(e)}
              name="thumbnail"
              hidden
            />
            <label for="actual-btn2" className="fladd">
              <img className="" src={file} alt="" />
            </label>
          </div>

          <button
            className=" mt-4 btn-red bold subtn avenir pl-3 float-right"
            type="submit"
          >
            Add Book
            <img className="ml-3" src={addBook} alt="" />
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddBook;
