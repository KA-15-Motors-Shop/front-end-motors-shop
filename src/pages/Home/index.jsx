import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import CardLeilao from '../../components/card_leilao/index';
import CardCarros from '../../components/card_carros';
import CardMotos from '../../components/card_motos';
import Sidebar from '../../components/siderbar/index';
import React from 'react';
import { AuthContext } from '../../provider/auth';

function Home() {
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
