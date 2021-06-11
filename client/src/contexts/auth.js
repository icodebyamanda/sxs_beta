import  { createContext } from 'react';
import authContext from './contexts/auth';

// In conjunction with useAuth: https://usehooks.com/useAuth/

const authContext = createContext();

export default authContext;