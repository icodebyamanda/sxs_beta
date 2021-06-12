// component using useProvideAuth custom hook which provide sign and sign out
// auth is using the context provider coming from the hook
// so it will know the user and if the user is sign in or sign out

import useProvideAuth from '../hooks/useProvideAuth';
// import authContext from './contexts/auth';
//import { authContext } from './contexts/auth';
import authContext from "../contexts/auth";

export default function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}