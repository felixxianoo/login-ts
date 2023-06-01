import React, { useState } from "react";
import "./styles.css";
import axios from "axios";


function Register() {

  type User = {
    name:string
    email:string
    password:string
  }

  const [name, setName] = useState<string>();
  const [email,setEmail] = useState<string>();
  const [password,setPassword] = useState<string>();

  const submit = async () => {
console.log('felix');

    try {
     axios.post('http://localhost:8001/register', {
        name, email, password
      })
      console.log('felix2');
      
    } catch (error) {
      console.log(error);
      console.log('felix3');
      
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
      <h1 className="title">Register</h1>
      <form className="form" >
        <div>
          <input type="text" id="name" placeholder="Name"
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <input type="email" id="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" id="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}/>
          <input type="checkbox" />
        </div>
        <button className="submit" type="submit"
        onClick={()=>submit()}>Register</button>
      </form>
      <a href="/">Login</a>
      </div>
    </div>
  );
}

export default Register;
