import React, { useState } from "react";
import Footer from './Footer';

export default function LogIn() {

  const [loginDetails, setLogIn] = usesState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {

  }

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

    </div>

  )


}