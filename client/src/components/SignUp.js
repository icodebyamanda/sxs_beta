import React, { useState } from "react";
import Footer from './Footer';

export default function SignUp() {

  const [signUpDetails, setSignUp] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [confirmationMessage, setConfirmation] = useState(false);

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
    displayConfirmationMessage();
  }

  const clearForm = () => {
    setSignUp({
      email: '',
      username: '',
      password: '',
    });
  };

  const displayConfirmationMessage = () => {
    setConfirmation(true);
  };

  const registerUser = () => {

    fetch('/users/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpDetails),
    })
    .then(() => setSignUp(signUpDetails))
    .then(() => clearForm())
    .catch((error) => { 
      return error;
    });
  };




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
          type="password"
          name="password"
          value={signUpDetails.password}
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

      </div>

      {confirmationMessage && (
        <div>
        <div> Thank you for signing up!</div>
        <div> Please log in to access your personal space </div>
        </div>
      )}

      <div><Footer /></div>

    </div>

  );

}