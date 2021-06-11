import React, { useState } from "react";
import axios from "axios";
import Footer from './Footer';

export default function LogIn() {

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    // e.persist();
    setLogin((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const clearForm = () => {
    setLogin({
      email: '',
      username: '',
      password: '',
    });
  };

  const logUserIn = () => {

    // when using syntax axios.post, data isn't used and second param is state's variable
    axios.post('/users/login', loginDetails)
    .then((result) => {
      //store it locally - setItem a method of storage
      localStorage.setItem("token", result.data.token);
      console.log(result.data.message, result.data.token);
    })
    .then(() => clearForm())
    .catch((error) => console.log(error));
  };


  return (

    <div>
      
        <label>
          <div>Email</div>
          <input
            type="text"
            name="email"
            value={loginDetails.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <div>Password</div>
          <input
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
        </label>

        <button onClick={logUserIn}> Log In</button>

    <div><Footer /></div>

    </div>

  );


}