import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import openedEye from '../assets/icons/openedEye.png';
import closedEye from '../assets/icons/closedEye.png';
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
          <div className="formTitle">Email</div>
          <input
          type="text"
          name="email"
          value={signUpDetails.email}
          onChange={handleChange}
          />
        </label>

        <label>
          <div className="formTitle">Username</div>
          <input
          type="text"
          name="username"
          value={signUpDetails.username}
          onChange={handleChange}
          />
        </label>

        <label>
          <div className="formTitle">Password</div>
          <div className="pwd-container">
            <input
            type={passwordShown ? "text" : "password"}
            name="password"
            value={signUpDetails.password}
            onChange={handleChange}
            />
            <img
              title={passwordShown ? "Hide" : "Show"}
              src={passwordShown ? closedEye : openedEye}
              onClick={togglePassword}
            />
          </div>
        </label>

        <button onClick={RegisterUser} className="SmallSubmitButton"> Submit</button>

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