
import { Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div>

      <nav>

      <span className="inlineSpacing"> <Link to="/"> Homepage </Link> </span>
      <span className="inlineSpacing"> <Link to="/user"> Your Routine </Link> </span>
      <span className="inlineSpacing"> <Link to="/admin"> Admin Space </Link> </span>
      
      </nav>


    </div>


  )
}