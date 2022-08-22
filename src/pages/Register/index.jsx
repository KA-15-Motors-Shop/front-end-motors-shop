import React from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/Navbar/index';
import FormRegister from '../../components/formRegister/index';
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
