import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import CardLeilao from '../../components/card_leilao/index';
import CardCarros from '../../components/card_carros';
import CardMotos from '../../components/card_motos';
import Sidebar from '../../components/siderbar/index';
import { api } from '../../service/index';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('@kenzieMotors:token')) {
      navigate('/profile');
    }
  });

  return (
    <div>
      <Sidebar />
      <Header />
      <CardLeilao />
      <CardCarros />
      <CardMotos />
      <Footer />
    </div>
  );
}
export default Home;
