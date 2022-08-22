import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import CardLeilao from '../../components/card_leilao/index';
import CardCarros from '../../components/card_carros';
import CardMotos from '../../components/card_motos';

function Home() {
  return (
    <div>
      <Header />
      <CardLeilao />
      <CardCarros />
      <CardMotos />
      <Footer />
    </div>
  );
}
export default Home;
