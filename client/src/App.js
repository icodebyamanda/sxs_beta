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

import UserName from "./components/UserName";

import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import ProvideAuth from './components/ProvideAuth'; // all route use authentication context
import PrivateRoute from './components/PrivateRoute';


function App() { 
    
  

  return (
    

    <div className="App">

    <BrowserRouter>

      <ProvideAuth>

        <Router>
          
          <LogSignNavBar />
          <Navigation />
            
          <Switch>
          <Route path="/pro" component={UserName} /> 
            <Route path="/home" component={Homepage} /> 
            <Route path="/admin" component={AdminView} /> 
            <Route path="/user" component={UserView} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route exact path="/" component={HelloWorld} />
          </Switch>
        
        </Router>

      </ProvideAuth>
    
    </BrowserRouter>
      
      </div>


  );
  

}

export default App;
