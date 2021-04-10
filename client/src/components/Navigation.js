
import { Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div>
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


  )
}