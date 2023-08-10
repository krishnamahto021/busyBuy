import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function useUserContextValue() {
  const value = useContext(userContext);
  return value;
}

export const CustomUserContext = ({ children }) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);

  return (
    <>
      <userContext.Provider value={{ isAuthenticated,setIsAuthenticated}}>
        {children}
      </userContext.Provider>
    </>
  );
};
