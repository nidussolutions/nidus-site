
import React, { createContext, useContext } from 'react';

const AuthContext = createContext({
  user: null,
  session: null,
  loading: false,
  signIn: async () => ({ error: { message: "Admin functionality removed" } }),
  signOut: async () => {},
  signUp: async () => {},
});

export const AuthProvider = ({ children }) => {
  return <>{children}</>;
};

export const useAuth = () => ({
  user: null,
  session: null,
  loading: false,
  signIn: async () => ({ error: { message: "Admin functionality removed" } }),
  signOut: async () => {},
  signUp: async () => {},
});
