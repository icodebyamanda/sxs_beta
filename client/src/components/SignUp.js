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

    <div className="grid-container">

      <header className="header OverlapOnHeader"> 
        <h3 className="homepageText">Register and step into a positive routine</h3>
      </header>

      <div className="left"></div>

      <div className="core adminCore">
        <div className="userxCore">

      <form className="AdminForm SmallerForm">

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

      </form>

      </div>

      {confirmationMessage && (
        <div>
        <p className="spanHomepage"> Thank you for signing up!</p>
        <p> Please <p><Link to='/Login'> log in </Link></p> to access your personal space </p>
        </div>
      )}

      <div><Footer /></div>

      </div>

      <div className="right"></div>

    </div>

  );

}