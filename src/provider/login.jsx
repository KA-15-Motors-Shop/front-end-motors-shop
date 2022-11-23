import React from 'react';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/index';
import { toast } from 'react-toastify';

const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('@kenzieMotors:user')) || 'vazia'
  );
  console.log(user);

  const navigate = useNavigate();
  const handleLogin = async (data) => {
    const response = await api
      .post('login', data)
      .then((response) => {
        // toast.success('Login feito com sucesso!');
        localStorage.setItem(
          '@kenzieMotors:token',
          JSON.stringify(response.data.token)
        );
        console.log(response.data);
        localStorage.setItem(
          '@kenzieMotors:id',
          JSON.stringify(response.data.userId)
        );
        getUser();
        navigate('/profile');
      })
      .catch((err) => {
        toast.error('Email ou senha inválidos');
        console.log(err);
      });
  };

  const getUser = async () => {
    const merda = JSON.parse(localStorage.getItem('@kenzieMotors:id') || []);
    console.log(merda);

    const response = await api
      .get(`users/${merda}`)
      .then((response) => {
        console.log('aqui', response.data);
        setUser(response.data);
        localStorage.setItem(
          '@kenzieMotors:user',
          JSON.stringify(response.data)
        );
        console.log('get user', user);
      })

      .catch((err) => {
        toast.error('Email ou senha inválidos');
        console.log(err);
      });
  };

  // const handleUpdate = async (data) => {
  //   const id = JSON.parse(localStorage.getItem('@kenzieMotors:id') || []);
  //   const response = await api
  //     .patch(`users/${id}`, data)
  //     .then((response) => {
  //       // setUser(response.data);
  //       // localStorage.setItem(
  //       //   '@kenzieMotors:user',
  //       //   JSON.stringify(response.data)
  //       // );
  //       navigate('/login');
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       toast.error('Email ou senha inválidos');
  //       console.log(err);
  //     });
  // };

  return (
    <LoginContext.Provider value={{ handleLogin, getUser, user }}>
      {children}
    </LoginContext.Provider>
  );
};

export const UseLoginProvider = () => useContext(LoginContext);
