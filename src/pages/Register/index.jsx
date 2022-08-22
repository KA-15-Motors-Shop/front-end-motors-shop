import React from 'react';
import Footer from '../../components/footer/index';
import Navbar from '../../components/navbar/index';
import FormRegister from '../../components/form_register/index';
import { Container } from './styles';

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <FormRegister />
      </Container>
      <Footer />
    </>
  );
};

export default Register;
