
import { Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div className="navBar">

      <nav>

      <span className="inlineSpacing"> <Link to="/"> Homepage </Link> </span>
      <span className="inlineSpacing"> <Link to="/user"> User Tab </Link> </span>
      <span className="inlineSpacing"> <Link to="/admin"> Admin Tab </Link> </span>
      
      </nav>


    </div>


  )
}