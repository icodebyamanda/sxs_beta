import React, { useState } from "react";
import Footer from './Footer';

export default function LogIn() {

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setLogin((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logUserIn();
  };

  const logUserIn = () => {

    fetch('/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
    .then(() => setLogin(loginDetails))
    .catch((error) => { 
      return error;
    });
  };


  return (

    <div>

      <form onSubmit={handleSubmit}> 
      
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

        <label>
          <input 
            type="submit" 
            value="submit"
          />
        </label>
      
      </form>

    <div><Footer /></div>

    </div>

  );


}