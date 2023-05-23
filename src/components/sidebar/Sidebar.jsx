import React from "react";
import sidebar from "./side.module.css";
import logo from "../../assets/Images/logo.png";
import avatar from "../../assets/Images/download.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Sidebar() {
  return (
    <React.Fragment>
      <div className={`${sidebar.sidebar_nav}`}>
        <Link to="/">
          <img className="sidebar_logo" src={logo} alt="logo" />
        </Link>
        <div className="flex items-center flex-col">
          {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-30"></hr> */}
          <div className={sidebar.sidebar_separate}></div>
          <div className="sidebar_avtar mb-5">
            <img src={avatar} alt="avtar" className={sidebar.sidebar_avtar} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Sidebar;
