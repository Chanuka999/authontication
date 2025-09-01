import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handdleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      })
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handdleSubmit}>
        <h2>sign up</h2>
        <label htmlFor="username">username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="username">E mail</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="username">password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Sign up</button>
        <p>
          Have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
