import React, { useState } from "react";
import "./Login.css";

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // "shoots" into state

  const register = async (e) => {
    if (!name || !email || !password) {
      return alert("Please ensure all form fields are filled out.");
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(user, {
        displayName: name,
      });
      dispatch(
        login({
          email: user.user.email,
          uid: user.user.uid,
          displayName: name,
        })
      );
    } catch (e) {
      alert(e.message);
    }
  };
  const loginUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("Please ensure all form fields are filled out.");
    }

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        login({
          email: user.user.email,
          uid: user.user.uid,
          displayName: name,
        })
      );
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt=""
      />
      <form>
        <input
          placeholder="Full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login_signIn" type="submit" onClick={loginUser}>
          Sign In
        </button>
        <p>
          Not a member?{" "}
          <span className="login_register" onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
