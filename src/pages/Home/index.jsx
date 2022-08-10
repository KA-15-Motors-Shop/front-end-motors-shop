import Footer from '../../components/footer/footer';
import Header from '../../components/Header/index';
import CardLeilao from '../../components/CardLeilao/index';
import CardCarros from '../../components/CardCarros';

function Home() {
  return (
    <div>
      <Header />
      <CardLeilao />
      <CardCarros />
      <Footer />
    </div>
  );
}
export default Home;
