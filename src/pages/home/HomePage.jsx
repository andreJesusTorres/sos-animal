import Navbar from '../../components/Navbar';
import Testimonials from '../../components/home/Testimonials';
import Hero from '../../components/home/Hero';
import Collaborations from '../../components/home/Collaborations';
import Info from '../../components/home/Info';
import Historia from '../../components/home/Historia';
import Valores from '../../components/home/Valores';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Info />
        <Historia />
        <Collaborations />
        <Valores />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
