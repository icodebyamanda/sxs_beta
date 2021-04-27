
//import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {

  return (

    <div>
      <Navbar>
          <Nav>
            <Nav.link href='/'>Homepage</Nav.link>
            <Nav.link href='/user'>User Page</Nav.link>
            <Nav.link href='/admin'>Admin Page</Nav.link>
          </Nav>
      </Navbar>
    </div>


  )
}