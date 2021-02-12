import React from "react";
import { ReactReader } from "react-reader";
import list from './alicet.epub';
import './read.css';
import wow from '../landingPage/img/wow.png';
import { BrowserRouter as Router, Link } from "react-router-dom";

const ReadEpub = () => {

    return (
        <div className="bg full">
            <div className="nav">
                <Link to="/beranda" as={Link} >
                    <img className="logoo" src={wow} alt=""/>
                </Link>
            </div>
            <div className="reader">
                <div  style={{ position: "relative", height: "80%", }}>
                    {" "}
                    <ReactReader
                        url={list}
                    title={"Alice in wonderland"}
                    location={"epubcfi(/6/2[cover]!/6)"}
                    locationChanged={epubcifi => console.log(epubcifi)}
                    />
                </div>
        </div></div>
    );
  
}
export default ReadEpub