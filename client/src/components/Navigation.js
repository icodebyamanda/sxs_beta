//import React, { useHistory }  from "react";
import React from "react";
import useAuth from '../hooks/useAuth';
import { Link, useHistory } from "react-router-dom";


function Navigation() {
  const history = useHistory();
  const auth = useAuth();


  const logout = () => {
    auth.signout(() => history.push("/login"));
  }

  return (

    <div>

      <nav>

      {auth.isLoggedIn && <span className="inlineSpacing"> <Link to="/home"> Homepage </Link> </span>}
      {auth.isLoggedIn && <span className="inlineSpacing"> <Link to="/user"> Your Routine </Link> </span>}
      {auth.isLoggedIn && <span className="inlineSpacing"> <Link to="/admin"> Add an inspiration </Link> </span>}
      {auth.isLoggedIn && <span className="inlineSpacing"> <button type="button" onClick={logout}> Log Out </button> </span>}

      </nav>

    </div>


  )
}

export default Navigation;