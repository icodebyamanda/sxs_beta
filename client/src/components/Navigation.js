
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div>
      <nav className="footerApp">
        
        <a> <Link to="/user" > User Page </Link>  </a>
        {' | '} 
        <a> <Link to="/admin" > Admin Page </Link> </a>
        {' | '} 
        <a> <Link to="/" > Homepage </Link>  </a>

      </nav>
    </div>


  )
}