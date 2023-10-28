import React from "react";
import logo from "../../assets/Images/logo.png";
import avatar from "../../assets/Images/download.jpg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between rounded-e-3xl		 flex-col bg-gray-600 fixed bottom-0 left-0 top-0 w-full z-10 max-w-fit ">
        <Link to="/">
          <img className="sidebar_logo" src={logo} alt="logo" />
        </Link>
        <div className="flex items-center flex-col">
          <div className="bg-gray-200 w-24 h-px mb-7"></div>
          <div className="sidebar_avtar mb-5">
            <img
              src={avatar}
              alt="avtar"
              className="w-10 h-10  object-cover object-center rounded-full"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Sidebar;
