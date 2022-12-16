//Jesus is Lord!

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";

import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar.js";

import { onAuthStateChanged } from "firebase/auth";

import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        login({
          email: user.user.email,
          uid: user.user.uid,
          displayName: user.user.displayName,
        })
      );
      //logged in
    } else {
      //dispatch(logout());
      //logged out
    }
  });

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
