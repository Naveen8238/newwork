import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextAPI = ({ children }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextAPI;
