import Footer from '../../components/footer/footer';
import Header from '../../components/Header/index';
import CardLeilao from '../../components/cardLeilao/index';
import CardCarros from '../../components/cardCarros';
import CardMotos from '../../components/cardMotos';

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
