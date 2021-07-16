import React, { useState } from "react";
import useAuth from '../hooks/useAuth';
import { useHistory } from "react-router-dom";
import Footer from './Footer';

function LogIn() {

  const auth = useAuth();
  const history = useHistory()

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  const [userConfirmation, setUserConfirmation] = useState(false)


  const handleChange = (e) => {
    // e.persist();
    setLogin((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const clearForm = () => {
    setLogin({
      email: '',
      password: '',
    });
  };

  const displayConfirmationMessage = () => {
    setUserConfirmation(true);
  }

  const logUserIn = () => {

    // full request went to useProvideAuth.js file, here using a modular function keeping context
    auth.signin(loginDetails)
    history.push('/home')
    clearForm()
    displayConfirmationMessage()

  };


  return (

    <div>

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

        <button type="button" onClick={logUserIn}> Log In</button>

        </div>

        {userConfirmation && (
          <div>
            <div> Great! You are now logged in. </div>
          </div>
        )}


    <div><Footer /></div>

    </div>

  );


}

export default LogIn;