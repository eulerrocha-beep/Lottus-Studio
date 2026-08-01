import "../styles/servicos.css";

import Abhyanga from "../assets/Abhyanga.avif";
import Udvartana from "../assets/Udvartana.avif";
import Garshana from "../assets/Garshana.avif";
import Basti from "../assets/Basti.avif";
import Ventosaterapia from "../assets/Ventosaterapia.avif";
import Drenagem from "../assets/Drenagem.avif";
import Modeladora from "../assets/Modeladora.avif";
import Terapeutica from "../assets/Terapeutica.avif";

// Número do WhatsApp (55 + DDD + número, sem espaços ou símbolos)
const whatsapp = "553492740707";

const gerarLinkWhatsApp = (servico) => {
  const mensagem = `Olá! 🌿

Conheci a Lottus Studio pelo site e gostaria de agendar uma sessão de *${servico.titulo}*.

Poderia me informar os horários disponíveis?

Agradeço desde já! ✨`;

  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    mensagem
  )}`;
};

const servicos = [
  {
    titulo: "Abhyanga",
    categoria: "Ayurveda",
    descricao:
      "Massagem ayurvédica com óleos terapêuticos que promove relaxamento profundo, equilíbrio entre corpo e mente e sensação de bem-estar.",
    imagem: Abhyanga,
  },
  {
    titulo: "Udvartana",
    categoria: "Ayurveda",
    descricao:
      "Massagem realizada com pós naturais que auxilia na revitalização da pele, estimula a circulação e promove renovação corporal.",
    imagem: Udvartana,
  },
  {
    titulo: "Garshana",
    categoria: "Ayurveda",
    descricao:
      "Esfoliação terapêutica com luvas de seda natural que estimula a circulação, remove células mortas e revitaliza a pele.",
    imagem: Garshana,
  },
  {
    titulo: "Basti Externo",
    categoria: "Ayurveda",
    descricao:
      "Tratamento localizado com óleos medicinais mornos para aliviar tensões, nutrir tecidos e restaurar o equilíbrio energético.",
    imagem: Basti,
  },
  {
    titulo: "Ventosaterapia",
    categoria: "Terapia Corporal",
    descricao:
      "Técnica que utiliza ventosas para aliviar tensões musculares, estimular a circulação e favorecer o relaxamento.",
    imagem: Ventosaterapia,
  },
  {
    titulo: "Drenagem Linfática",
    categoria: "Estética Corporal",
    descricao:
      "Massagem suave que auxilia na redução da retenção de líquidos, melhora a circulação e proporciona sensação de leveza.",
    imagem: Drenagem,
  },
  {
    titulo: "Massagem Modeladora",
    categoria: "Estética Corporal",
    descricao:
      "Técnica manual intensa que auxilia na modelagem corporal, melhora a circulação e estimula os tecidos.",
    imagem: Modeladora,
  },
  {
    titulo: "Massagem Terapêutica",
    categoria: "Bem-estar",
    descricao:
      "Massagem voltada para aliviar tensões musculares, reduzir dores e proporcionar profundo relaxamento físico.",
    imagem: Terapeutica,
  },
];

function Servicos() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-header">
        <span>Nossos Tratamentos</span>

        <h2>
          Terapias para
          <br />
          <i>corpo e mente</i>
        </h2>

        <p>
          Experiências inspiradas em técnicas ancestrais e terapias corporais
          para restaurar o equilíbrio, o bem-estar e a conexão entre corpo,
          mente e energia.
        </p>
      </div>

      <div className="services-grid">
        {servicos.map((servico) => (
          <article className="service-card" key={servico.titulo}>
            <img
              src={servico.imagem}
              alt={servico.titulo}
              className="service-image"
              loading="lazy"
            />

            <div className="service-content">
              <span className="service-category">
                {servico.categoria}
              </span>

              <h3>{servico.titulo}</h3>

              <p>{servico.descricao}</p>

              <a
                href={gerarLinkWhatsApp(servico)}
                className="service-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar ${servico.titulo} pelo WhatsApp`}
              >
                Agendar experiência →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicos;