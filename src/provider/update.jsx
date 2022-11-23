import React from 'react';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/index';
import { toast } from 'react-toastify';
import { UseLoginProvider } from '../provider/login';

const UpdateContext = createContext([]);

export const UpdateProvider = ({ children }) => {
  const { handleLogin, setUser } = UseLoginProvider();

  const id = JSON.parse(localStorage.getItem('@kenzieMotors:id')) || [];

  const handleUpdate = async (data) => {
    const response = await api
      .patch(`users/${id}`, data)
      .then((response) => {
        localStorage.setItem(
          '@kenzieMotors:user',
          JSON.stringify(response.data)
        );

        console.log(response.data);
      })
      .catch((err) => {
        toast.error('Email ou senha inválidos');
        console.log(err);
      });
  };

  return (
    <UpdateContext.Provider value={{ handleUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
};

export const UserUpdateProvider = () => useContext(UpdateContext);
