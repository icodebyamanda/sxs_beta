//import React, { useHistory }  from "react";
import React from "react";
import useAuth from '../hooks/useAuth';
//import { useHistory } from "react-router";
import { Link } from "react-router-dom";


// Below print true so should not be problem
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

function Navigation() {
  //let history = useHistory();
  const auth = useAuth();
  

  // const logout = () => {
  //   auth.signout(() => history.push("/login")); 
  //   // above is using signout cb
  // };

  const logout = () => {
    auth.signout(); 

  };

  return (

    <div>

      <nav>

      <span className="inlineSpacing"> <Link to="/home"> Homepage </Link> </span>
      <span className="inlineSpacing"> <Link to="/user"> Your Routine </Link> </span>
      <span className="inlineSpacing"> <Link to="/admin"> Add an inspiration </Link> </span>
      <span className="inlineSpacing"> <button type="button" onClick={logout}> Log Out </button> </span>
      
      </nav>


    </div>


  )
}

export default Navigation;