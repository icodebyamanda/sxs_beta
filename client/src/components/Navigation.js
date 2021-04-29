
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {

  return (

    <div className="navBar">

        {/* <Navbar expand="lg" variant="light" bg="light">

      <footer>
      
      <Link to="/user" className="navBarLink ms-2 me-2"> User Page </Link>
        {' | '} 
      <Link to="/admin" className="navBarLink ms-2 me-2"> Admin Page </Link>
        {' | '} 
      <Link to="/" className="navBarLink ms-2 me-2"> Homepage </Link>
      
      </footer>

      </Navbar> */}


      

      <Navbar>
      <Container>
            <Navbar.Brand href='/'>Homepage</Navbar.Brand>
            <Navbar.Brand href='/user'>User Page</Navbar.Brand>
            <Navbar.Brand href='/admin'>Admin Page</Navbar.Brand>
      </Container>
      </Navbar>

      


    </div>


  )
}