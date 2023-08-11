import { createContext, useContext, useState } from "react";
import { CustomCartContext } from "./cartContext";

const userContext = createContext();

export function useUserContextValue() {
  const value = useContext(userContext);
  return value;
}

export const CustomUserContext = ({ children }) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [user,setUser] = useState({});

  return (
    <>
      <userContext.Provider value={{ isAuthenticated,setIsAuthenticated,user,setUser}}>
        {children}
      </userContext.Provider>

    </>
  );
};
