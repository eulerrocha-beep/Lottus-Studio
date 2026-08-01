import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Beneficios from "../components/Beneficios";
import Galeria from "../components/Galeria";
import Depoimentos from "../components/Depoimentos";
import Experiencia from "../components/Experiencia";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicos />
      <Experiencia />
      <Galeria />
      <Sobre />
      <Beneficios />
      <Depoimentos />
      <Footer />
    </>
  );
}

export default Home;