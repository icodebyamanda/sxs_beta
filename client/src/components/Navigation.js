
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div>
      <div className="header"></div>
      <div className="left"></div>
      <div className="core"></div>
      <div className="right"></div>
      <div className="footer"></div>

      <div className="footerApp">
        <nav>

        {/* <a href="/"> Homepage </a>
        {' | '} 
        <a href="/user"> User Page </a>
        {' | '} 
        <a href="/admin"> Admin Page </a> */}
        
        <a> <Link to="/user" > User Page </Link>  </a>
        {' | '} 
        <a> <Link to="/admin" > Admin Page </Link> </a>
        {' | '} 
        <a> <Link to="/" > Homepage </Link>  </a>

        </nav>
      </div>

    </div>


  )
}