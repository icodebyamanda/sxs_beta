import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from './Footer';

function LogIn() {

  // let history = useHistory();

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  // const [userConfirmation, setUserConfirmation] = useState(false)


  const handleChange = (e) => {
    // e.persist();
    setLogin((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // const clearForm = () => {
  //   setLogin({
  //     email: '',
  //     password: '',
  //   });
  // };

  // const displayConfirmationMessage = () => {
  //   setUserConfirmation(true);
  // }


  

  const logUserIn = () => {

    // when using syntax axios.post, data isn't used and second param is state's variable
    axios.post('/users/login', loginDetails)
    .then((result) => {
      //store it locally - setItem a method of storage
      localStorage.setItem("token", result.data.token);
      console.log(result.data.message, result.data.token);
    })
    // .then(() => clearForm())
    // .then(() => displayConfirmationMessage())
    // .then(() => { history.push('/')})
    .catch((error) => { return error });
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

        {/* {userConfirmation && (
          <div>
            <div> Great! You are now logged in. </div>
          </div>
        )} */}


    <div><Footer /></div>

    </div>

  );


}

export default LogIn;