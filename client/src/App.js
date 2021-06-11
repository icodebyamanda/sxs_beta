import React, { useEffect, useState }  from "react";
import './App.css';
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HelloWorld from "./components/HelloWorld";
import Navigation from "./components/Navigation";
import LogSignNavBar from "./components/LogSignNavBar";

import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";



function App() { 
    
  

  return (
    

      <div className="App">

        <Router>

        <Navigation />
        <LogSignNavBar />

        <Switch>
          <Route path="/admin" component={AdminView} /> 
          <Route path="/user" component={UserView} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/Home" component={Homepage} />
          <Route path="/" component={HelloWorld} />
        </Switch>

        </Router>
      </div>


  );
  

}

export default App;
