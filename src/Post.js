import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

import InputOption from "./InputOption";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl, timestamp }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_title">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
      <div className="post_timestamp">{timestamp}</div>
    </div>
  );
}

export default Post;
