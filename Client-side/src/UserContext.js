import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', auth: false, id: 0 });

    const login = (name, id) => {
      setUser((user) => ({
        name: name,
        auth: true,
        id: id
      }));
    };
  
    const logout = () => {
      setUser((user) => ({
        name: '',
        auth: false,
        id: 0
      }));
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };


