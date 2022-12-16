import React, { useEffect, useState } from "react";
import "./Feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const postsCollectionRef = collection(db, "posts");

  //play with data.docs
  //id: doc.id,
  //data: doc.data(),
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(
        query(postsCollectionRef, orderBy("timestamp", "desc"))
      );
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //console.log(data.docs);
    };
    getPosts();
  }, [posts]);

  const sendPost = async (e) => {
    //e.preventDefault();

    await addDoc(postsCollectionRef, {
      name: "Jesus",
      description: "I is",
      message,
      timestamp: serverTimestamp(),
      photoUrl: "",
    });
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
          <InputOption Icon={SubscriptionsIcon} color="#70B5F9" title="Video" />
          <InputOption Icon={EventNoteIcon} color="#70B5F9" title="Event" />
          <InputOption
            Icon={CalendarViewDayIcon}
            color="#70B5F9"
            title="Write article"
          />
        </div>
      </div>

      {/* <Post name="Jesus" description={"I am"} message={"I really am."} /> */}
      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          description={post.description}
          message={post.message}
          //photoUrl={post.photoUrl}
          //timestamp={post.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
