import "../styles/experiencia.css";

const diferenciais = [
  {
    titulo: "Tradição Ayurvédica",
    descricao:
      "Técnicas milenares inspiradas no Ayurveda para promover equilíbrio, relaxamento e conexão entre corpo e mente.",
    icone: "🌿",
  },
  {
    titulo: "Atenção aos detalhes",
    descricao:
      "Cada etapa da experiência é pensada para acolher você em um momento de pausa e reconexão.",
    icone: "✨",
  },
  {
    titulo: "Momento de Relaxamento",
    descricao:
      "Um ambiente acolhedor criado para desacelerar, renovar as energias e proporcionar bem-estar.",
    icone: "🌸",
  },
  {
    titulo: "Bem-estar Integral",
    descricao:
      "Uma abordagem que une terapias corporais, estética e equilíbrio emocional.",
    icone: "🤍",
  },
];

function Experiencia() {
  return (
    <section className="experience-section">

      <div className="experience-header">

        <span>
          Experiência LÓTTUS
        </span>

        <h2>
          Mais que uma massagem,
          <br />
          <i>um momento para você.</i>
        </h2>

        <p>
          Na LÓTTUS, cada detalhe é pensado para proporcionar
          uma experiência de cuidado, equilíbrio e reconexão.
        </p>

      </div>


      <div className="experience-grid">

        {diferenciais.map((item) => (
          <article
            className="experience-card"
            key={item.titulo}
          >

            <div className="experience-icon">
              {item.icone}
            </div>

            <h3>
              {item.titulo}
            </h3>

            <p>
              {item.descricao}
            </p>

          </article>
        ))}

      </div>


    </section>
  );
}

export default Experiencia;