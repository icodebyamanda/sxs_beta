import React, { useEffect, useState }  from "react";
import './App.css';
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() { 
    
  

  return (
    
    <div className="App">

    <Router> 

      <div>

        <Switch>

          <Route path="/admin" component={AdminView} /> 

          <Route path="/user" component={UserView} />

          <Route path="/" component={Homepage} />

        </Switch>

        <div className="footerApp"> <Navigation /> </div>

      </div>
        
    </Router>

    </div>

  );
  

}

export default App;
