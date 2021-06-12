// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}