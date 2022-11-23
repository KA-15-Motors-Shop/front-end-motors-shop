import React from 'react';
import Footer from '../../components/footer/index';
import Navbar from '../../components/navbar/index';
import FormRegister from '../../components/form_register/index';
import { Container } from './styles';
import { useState } from 'react';
import Sidebar from '../../components/siderbar/index';

const Register = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Container>
        <FormRegister />
      </Container>
      <Footer />
    </>
  );
};

export default Register;
