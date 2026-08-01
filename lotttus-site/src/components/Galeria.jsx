import "../styles/galeria.css";

import Ambiente from "../assets/Ambiente.avif";
import Ayuverda from "../assets/Galeria1.avif";
import Detalhes from "../assets/Detalhes.avif"
import Terapeuta from "../assets/Terapeuta.avif";
import Naturais from "../assets/Naturais.avif";

const imagens = [
  {
    src: Ambiente,
    alt: "Ambiente LÓTTUS",
  },
  {
    src: Ayuverda,
    alt: "Massagem ayurvédica",
  },
  {
    src: Detalhes,
    alt: "Detalhes da clínica",
  },
  {
    src: Terapeuta,
    alt: "Momento de relaxamento",
  },
  {
    src: Naturais,
    alt: "Produtos naturais",
  },
];

function Galeria() {
  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-header">
        <span>Nosso Espaço</span>

        <h2>
          Um ambiente para
          <br />
          <i>desacelerar.</i>
        </h2>

        <p>
          Cada detalhe foi pensado para proporcionar uma experiência de
          acolhimento, equilíbrio e bem-estar.
        </p>
      </div>

      <div className="gallery-grid">
        {imagens.map((imagem, index) => (
          <div
            className={`gallery-item item-${index + 1}`}
            key={index}
          >
            <img
              src={imagem.src}
              alt={imagem.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;