
import { Link } from "react-router-dom";


export default function LogSignNavBar() {

  return (

    <div>

      <nav>
      <span className="inlineSpacing"> <Link to="/"> Hello World </Link> </span>
      <span className="inlineSpacing"> <Link to="/login"> Login </Link> </span>
      <span className="inlineSpacing"> <Link to="/register"> Register </Link> </span>
      </nav>


    </div>


  )
}