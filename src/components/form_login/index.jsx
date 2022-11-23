import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ForgetPassword,
  InputWrapper,
  Wrapper,
  Cont,
  ContainerLogin,
  WrTitle,
  Title,
  EnterBtn,
  Question,
  SignInBtn,
} from './style';

import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Input from '../../components/InputText';
import { UseLoginProvider } from '../../provider/login';

const LoginForm = () => {
  const { handleLogin } = UseLoginProvider();
  const navigate = useNavigate();

  // if (localStorage.getItem('@kenzieMotors:token')) {
  //   navigate('/profile');
  // }

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email obrigatório.')
      .email('Insira um email válido.'),
    password: yup.string().required('Senha obrigatória.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Wrapper>
      <ContainerLogin>
        <WrTitle>
          <Title>
            <h1>Login</h1>
          </Title>
        </WrTitle>

        <Cont>
          <InputWrapper>
            <form onSubmit={handleSubmit(handleLogin)}>
              <Input
                label="Email"
                error={errors.email?.message}
                register={register}
                name={'email'}
                placeholder="Digitar usuário"
              />
              <Input
                label="Senha"
                error={errors.password?.message}
                register={register}
                autoComplete="on"
                name={'password'}
                type="password"
                placeholder="Digitar senha"
              />
              <ForgetPassword>Esqueci minha senha</ForgetPassword>
              <EnterBtn type="submit">Entrar</EnterBtn>
            </form>
          </InputWrapper>

          <Question>
            <span>Ainda não possui conta?</span>
          </Question>

          <SignInBtn to="/register">Cadastrar</SignInBtn>
        </Cont>
      </ContainerLogin>
    </Wrapper>
  );
};

export default LoginForm;
