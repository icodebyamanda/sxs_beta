
import { Link } from "react-router-dom";


export default function Navigation() {

  return (

    <div>

      <nav>

      <span className="inlineSpacing"> <Link to="/"> Homepage </Link> </span>
      <span className="inlineSpacing"> <Link to="/user"> Your Routine </Link> </span>
      <span className="inlineSpacing"> <Link to="/admin"> Add an inspiration </Link> </span>
      <span className="inlineSpacing"> <Link to="/login"> Login </Link> </span>
      <span className="inlineSpacing"> <Link to="/register"> Register </Link> </span>
      </nav>


    </div>


  )
}