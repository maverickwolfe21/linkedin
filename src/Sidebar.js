import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  var name = "jeff";
  var email = "jeffbezos@gmail.com";

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* <h1>Jesus!</h1> */}
      <div className="sidebar_top">
        <img
          className="sidebar_image"
          src="https://media.istockphoto.com/photos/defocused-blurred-motion-abstract-background-picture-id851414010?b=1&k=20&m=851414010&s=170667a&w=0&h=i8B821ztG1_FfLxk0yc9G10wOU3X3UXmreTVCHcxEog="
          alt="Covenant"
        />
        <Avatar className="sidebar_avatar" />
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">45,432,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">45,432,544</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>
          Recent
          {recentItem("Jesus")}
          {recentItem("softwaredevelopment")}
          {recentItem("softwareengineering")}
          {recentItem("codingmaster")}
          {recentItem("reactjs")}
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
