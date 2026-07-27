import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Beneficios from "../components/Beneficios";
import Galeria from "../components/Galeria";
import Depoimentos from "../components/Depoimentos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Beneficios />
      <Galeria />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}

export default Home;