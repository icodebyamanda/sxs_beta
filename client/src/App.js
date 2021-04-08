import React, { useEffect, useState }  from "react";
import './App.css';
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import Homepage from "./components/Homepage";

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

          <Route path="/"> 

            <Homepage />

          </Route>

        </Switch>

        <div className="footer">

          <nav>
            <ul>
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

      </div>
        
    </Router>

  );
  

}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
