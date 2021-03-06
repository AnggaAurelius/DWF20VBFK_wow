import React, { useContext, useState, useEffect } from "react";
import wow from "../pages/landingPage/img/wow.png";
import icon from "./image/iconp.png";
import sub from "./image/sub.png";
import logout from "./image/logout.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppContext } from "./GlobalContext";
import { API } from "../config/api";

export const SideBar = () => {
  const [state, dispatch] = useContext(AppContext);
  const subscribe = state.subscribe;
  const user = state.user;

  const [data, setData] = useState([]);
  const getUser = async () => {
    try {
      const mydata = await API.get(`/user`);
      setData(mydata.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogOut = () => {
    dispatch({
      type: "Logout",
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="col-md-3 ">
      <Link to="/beranda" as={Link}>
        <img className="logowow mx-auto d-block" src={wow} alt="" />
      </Link>
      <br />
      <img
        className="foto mx-auto d-block"
        src={`http://localhost:5000/uploads/${data.avatar}`}
        alt=""
      />
      <div>
        <h3 className="text-center font-weight-bold mt-5 mb-4">
          {user.fullName}
        </h3>
        {subscribe ? (
          <p className="text-center green bold mt-3 fs-20">Subscribed</p>
        ) : (
          <p className="text-center red bold mt-3">Not Subscribtion Yet</p>
        )}
        <div className="  ">
          <hr className="line mt-4" />
          <div className=" mtop ">
            <Link to="/profile" as={Link} className="linkSide">
              <img className="mini float-left" src={icon} alt="" />
              <p className="linkSide">&nbsp;&nbsp;Profile</p>
            </Link>
          </div>
          <div className=" mtop mbot ">
            <Link to="/sub" as={Link} className="linkSide">
              <img className="mini float-left" src={sub} alt="" />
              <p className="">&nbsp;&nbsp;Subscribe</p>
            </Link>
          </div>
          <hr className="line" />
          <div className=" mtop ">
            <Link className="linkSide" onClick={handleLogOut}>
              <img className="mini float-left" src={logout} alt="" />
              <p className="">&nbsp;&nbsp;Logout</p>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
