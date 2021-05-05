
import { Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div className="navBar">

      <nav>

      <Link to="/"> Homepage </Link>
      {' | '} 
      <Link to="/user"> User Tab </Link>
        {' | '} 
      <Link to="/admin"> Admin Tab </Link>
      
      </nav>


    </div>


  )
}