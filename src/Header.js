//Jesus
import React from "react";
import "./Header.css";

import HeaderOption from "./HeaderOption";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import ChatIcon from "@mui/icons-material/Chat";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    dispatch(logout());
    await signOut(auth);
  };

  return (
    <div className="header">
      <div className="header_left">
        {/* Image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          alt="LinkedIn Logo"
        />

        <div className="header_search">
          {/* search icon */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        {/* HeaderOption */}
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterOutlined} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          avatar="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          title="Me"
          onClick={logoutUser}
        />
      </div>
    </div>
  );
}

export default Header;
