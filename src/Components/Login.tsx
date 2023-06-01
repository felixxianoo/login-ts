import React, { useState } from "react";
import './styles.css';
import axios from "axios";

function Login() {

  interface User {
    email: string
    password: string
  }

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const submit = async (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/', {
        email, password
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
      <h1 className="title">Login</h1>
      <form className="form" action="POST" >
        <div>
          <input type="email" id="email" placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}/>
          <input type="checkbox" />
        </div>
        <a href="/forgot-password">Forgot Password?</a>
        <br />
        <button className="submit" type="submit">Login</button>
      </form>
      <h5>Not a member? <a href="/register">Register</a></h5>
      </div>
    </div>
  );
}

export default Login;
