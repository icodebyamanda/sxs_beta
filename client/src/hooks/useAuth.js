import { useContext } from 'react';
import authContext from '../contexts/auth';

// Will allow to know the authentication context of a user (logged in or not)
// Will be reused in PrivateRoute and Login.js
// This is a custom hooks
// In conjunction with auth.js

export default function useAuth() {
  return useContext(authContext);
}