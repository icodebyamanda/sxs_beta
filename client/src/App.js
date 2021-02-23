import React, { useEffect, useState }  from "react";
import './App.css';
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
// import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() { 
    
  

  return (
    
    <Router> 

      <div className="App">

      <Switch>

        <Route path="/admin"> 

          <AdminView />

        </Route>

        <Route path="/user"> 

          <UserView />

        </Route>

        {/* <Route path="/"> 

          <Homepage />

        </Route> */}

      </Switch>

      </div>

      <div className="FooterMainPageData">

        <Link to="/user" > User Page </Link> 
        <span> | </span>
        <Link to="/admin" > Admin Page </Link>
        {/* <span> | </span>
        <Link to="/" > Home </Link> */}

      </div>
        
    </Router>


  );

}

export default App;
