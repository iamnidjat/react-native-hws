import axios from "axios";
import React, { createContext, useState, useContext } from "react";
 
const API = "https://todoservicestep.azurewebsites.net/auth/";
 
axios.defaults.baseURL = API;
 
interface AuthProp {
  authState: { token: string | null; isAuthenticated: boolean };
  onRegister: (name: string, email: string, password: string, token: string) => Promise<any>;
  onLogin: (email: string, password: string, token: string) => Promise<any>;
  onLogout: () => void;
}
 
const AuthContext = createContext<AuthProp>({} as AuthProp);
 
export const useAuth = () => {
  return useContext(AuthContext);
};
 
interface IAuthProvider {
  children: React.ReactNode;
}
 
export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    isAuthenticated: boolean;
  }>({ token: null, isAuthenticated: false });
 
  const register = async (name: string, email: string, password: string, token: string) => {
    try {
      const res = await axios.post("/register", { name, email, password });

      setAuthState({
        isAuthenticated: true,
        token,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  const login = async (email: string, password: string, token: string) => {
    try {
      const res = await axios.post("/login", { email, password });

      setAuthState({
        isAuthenticated: true,
        token,
      });
    } catch (error: any) {
        throw new Error(error);
    }
  };
  const logout = () => {
    setAuthState({
        isAuthenticated: false,
        token: null,
      });
  };
 
  const value = {
    authState,
    onLogin: login,
    onRegister: register,
    onLogout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};