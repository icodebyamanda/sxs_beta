import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from './Footer';

export default function SignUp() {

  const [signUpDetails, setSignUp] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const [confirmationMessage, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    setSignUp((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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

  const RegisterUser = () => {
    axios.post('/users/register', signUpDetails)
    .then(() => setSignUp(signUpDetails))
    .then(() => clearForm())
    .then(() => displayConfirmationMessage())
    .catch((error) => { return error});
  };


  return (

    <div>

      <div>

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
          type={passwordShown ? "text" : "password"}
          name="password"
          value={signUpDetails.password}
          onChange={handleChange}
          />
          <button onClick={togglePassword}>Show Password</button>
        </label>

        <button onClick={RegisterUser}> submit</button>

      </div>

      {confirmationMessage && (
        <div>
        <div> Thank you for signing up!</div>
        <div> Please <span><Link to='/Login'> log in </Link></span> to access your personal space </div>
        </div>
      )}

      <div><Footer /></div>

    </div>

  );

}