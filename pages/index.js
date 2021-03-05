import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Images from '../components/Images';
import Navigation from '../components/Navigation';
import Registration from '../components/Registration';
import Year from '../components/Year';

const Home = () => {
  return (<>
    <Navigation />
    <Hero />
    <Year />
    <Registration />
    <Images />
    <Footer />
  </>);
};

export default Home;
