
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {

  return (

    <div className="navBar pb-2 pt-1">
      
      <Link to="/user" className="navBarLink ms-2 me-2"> User Page </Link>
        {' | '} 
      <Link to="/admin" className="navBarLink ms-2 me-2"> Admin Page </Link>
        {' | '} 
      <Link to="/" className="navBarLink ms-2 me-2"> Homepage </Link>



      {/* <Navbar>
          <Nav>
            <Nav.link href='/'>Homepage</Nav.link>
            <Nav.link href='/user'>User Page</Nav.link>
            <Nav.link href='/admin'>Admin Page</Nav.link>
          </Nav>
      </Navbar> */}
    </div>


  )
}