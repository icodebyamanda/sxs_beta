import React, { useEffect, useState }  from "react";
import './App.css';
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() { 
    
  

  return (
    
    <div className="App">

    <Router> 

      <div>

        <Switch>

          <Route path="/admin"> 

            <AdminView />

          </Route>

          <Route path="/user"> 

            <UserView />

          </Route>

          <Route path="/"> 

            <Homepage />

          </Route>

        </Switch>

          <nav className="footerApp">
            <ul className="no-bullet">
              <li>
                <Link to="/user" > User Page </Link>
              </li>
              <li>
                <Link to="/admin" > Admin Page </Link>
              </li>
              <li>
                <Link to="/" > Homepage </Link>
              </li>
            </ul>
          </nav>

      </div>
        
    </Router>

    </div>

  );
  

}

export default App;
