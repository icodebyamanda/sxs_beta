import React, { useState } from "react";
import useAuth from '../hooks/useAuth';
import { useHistory } from "react-router-dom";
import openedEye from '../assets/icons/openedEye.png';
import closedEye from '../assets/icons/closedEye.png';
import Footer from './Footer';

function LogIn() {

  const auth = useAuth();
  const history = useHistory()

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setLogin((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const logUserIn = () => {

    // full request went to useProvideAuth.js file, here using a modular function keeping context
    auth.signin(loginDetails)
    history.push('/home')

  };


  return (

    <div>

      <div>
      
        <label>
          <div className="formTitle">Email</div>
          <input
            type="text"
            name="email"
            value={loginDetails.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <div className="formTitle">Password</div>
          <div className="pwd-container">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
            />
            <img
              title={passwordShown ? "Hide" : "Show"}
              src={passwordShown ? closedEye : openedEye}
              onClick={togglePassword}
            />
          </div>
        </label>

        <button type="button" onClick={logUserIn} className="SmallSubmitButton"> Log In</button>

        </div>


    <div><Footer /></div>

    </div>

  );


}

export default LogIn;