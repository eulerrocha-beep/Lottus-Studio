import "../styles/beneficios.css";

const beneficios = [
  {
    titulo: "Relaxamento Profundo",
    descricao:
      "Técnicas terapêuticas que auxiliam na redução do estresse e proporcionam momentos de tranquilidade.",
    icone: "🌿",
  },
  {
    titulo: "Equilíbrio Corporal",
    descricao:
      "Cuidados personalizados para promover harmonia entre corpo, mente e bem-estar.",
    icone: "✨",
  },
  {
    titulo: "Bem-estar individualizado",
    descricao:
      "Uma abordagem que respeita seu corpo e acompanha suas necessidades.",
    icone: "🤍",
  },
];


function Beneficios() {
  return (
    <section className="benefits-section">

      <div className="benefits-header">

        <span>
          Benefícios
        </span>

        <h2>
          Cuidado que transforma
          <br />
          <i>sua experiência.</i>
        </h2>

      </div>


      <div className="benefits-grid">

        {beneficios.map((item) => (
          <article
            className="benefit-card"
            key={item.titulo}
          >

            <div className="benefit-icon">
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

export default Beneficios;