import React, { useEffect, useState } from "react";
import Footer from './Footer';

export default function AdminView() {

  const [signUpDetails, setSignUp] = useState({
    email: '',
    username: '',
    password: '',
  });

  const registerUser = () => {

    fetch('/users/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpDetails),
    })
    .then(() => setSignUp(signUpDetails))
    .catch((error) => { 
      return error;
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setSignUp((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  }


  return (

    <div>

      <div>

        <form onSubmit={handleSubmit}>

        <label>
          <div>Email</div>
          <input
          type="text"
          name="email"
          value={signUpDetails.email}
          onChange={handleChange}
          />
        </label>

        <label>
          <div>Username</div>
          <input
          type="text"
          name="username"
          value={signUpDetails.username}
          onChange={handleChange}
          />
        </label>

        <label>
          <div>Password</div>
          <input
          type="text"
          name="password"
          value={signUpDetails.password}
          onChange={handleChange}
          />
        </label>

        <label>
          <input type="submit" value="submit" />
        </label>

        </form>

      </div>

      <div><Footer /></div>

    </div>

  );

}