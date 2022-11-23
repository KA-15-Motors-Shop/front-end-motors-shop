import Footer from '../../components/footer/index';
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/siderbar/index';
import Input from '../../components/InputText';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LoginForm from '../../components/form_login';

import {
  ContainerLogin,
  Wrapper,
  Cont,
  Title,
  InputWrapper,
  SignInBtn,
  EnterBtn,
  Question,
  WrTitle,
} from './styles';

function Login() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
