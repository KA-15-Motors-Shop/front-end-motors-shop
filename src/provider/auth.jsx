import React from 'react';
import { useState } from 'react';
import { api } from '../service/index';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('@Product') || 'null') || []
  );

  const [filterproducts, setFilterProduct] = useState(
    JSON.parse(localStorage.getItem('@Product') || 'null') || []
  );

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const refresh = () => {
  //   api.get('/products').then((response) => {
  //     setProducts(response.data);
  //   });
  // };

  return (
    <AuthContext.Provider
      value={{ isOpen, setIsOpen, toggle, products, filterproducts }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
