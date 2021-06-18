import useAuth from '../hooks/useAuth';
import { Link, useHistory } from "react-router-dom";

export default function LogSignNavBar() {

  const history = useHistory();
  const auth = useAuth();


  // const logout = () => {
  //   auth.signout(() => history.push("/login"));
  // }


  return (

    <div>

      <nav>
      {!auth.isLoggedIn && <span className="inlineSpacing"> <Link to="/"> Hello World </Link> </span>}
      {!auth.isLoggedIn && <span className="inlineSpacing"> <Link to="/login"> Login </Link> </span>}
      {!auth.isLoggedIn && <span className="inlineSpacing"> <Link to="/register"> Register </Link> </span>}
      
      </nav>


    </div>


  )
}