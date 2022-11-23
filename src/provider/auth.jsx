import React from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      {props.children}
    </AuthContext.Provider>
  );
};
