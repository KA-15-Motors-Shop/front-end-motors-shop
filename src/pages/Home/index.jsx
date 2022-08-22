import Footer from '../../components/footer/footer';
import Header from '../../components/Header/index';
import CardLeilao from '../../components/CardLeilao/index';
import CardCarros from '../../components/CardCarros';
import CardMotos from '../../components/CardMotos';

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
