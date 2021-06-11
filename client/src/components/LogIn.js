import React, { useState } from "react";
import axios from "axios";
import Footer from './Footer';

export default function LogIn() {

  // const [loginDetails, setLogin] = useState({
  //   email: '',
  //   password: '',
  // });

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  // const handleChange = (e) => {
  //   e.persist()
    
  //   const value = e.target.value;

  //   setLogin((state) => ({
  //     ...state,
  //     [e.target.name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    // e.preventDefault();
    // e.persist();
    console.log(e.target.name, e.target.value)
    setLogin((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   logUserIn();
  // };

  const logUserIn = () => {

    // when using syntax axios.post, data isn't used and second param is state's variable
    axios.post('/users/login', loginDetails)
    .then((result) => {
      //store it locally - setItem a method of storage
      localStorage.setItem("token", result.data.token);
      console.log(result.data.message, result.data.token);
    })
    .catch((error) => console.log(error));
  };



  // const logUserIn = () => {

  //   axios('/users/login', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(loginDetails),
  //   })
  //   .then(() => setLogin(loginDetails))
  //   .catch((error) => { 
  //     return error;
  //   });
  // };


  return (

    <div>

      {/* <form onSubmit={handleSubmit}>  */}
      
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

        {/* <label>
          <input 
            type="submit" 
            value="submit"
          />
        </label> */}
      
      {/* </form> */}

    <div><Footer /></div>

    </div>

  );


}