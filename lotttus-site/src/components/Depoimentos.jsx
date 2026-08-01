import "../styles/depoimentos.css";

const depoimentos = [
  {
    nome: "Mariana Oliveira",
    tratamento: "Massagem Ayurvédica Abhyanga",
    texto:
      "Uma experiência maravilhosa. O ambiente transmite muita paz e o atendimento foi extremamente acolhedor.",
  },
  {
    nome: "Camila Santos",
    tratamento: "Drenagem Linfática",
    texto:
      "A LÓTTUS trouxe um momento de cuidado que eu estava precisando. Saí renovada e muito satisfeita.",
  },
  {
    nome: "Fernanda Alves",
    tratamento: "Ventosaterapia",
    texto:
      "Profissional muito cuidadosa, explica cada etapa e proporciona uma experiência realmente especial.",
  },
];


function Depoimentos() {
  return (
    <section className="testimonials-section">

      <div className="testimonials-header">

        <span>
          Depoimentos
        </span>

        <h2>
          Histórias de
          <br />
          <i>bem-estar.</i>
        </h2>

        <p>
          Cada experiência é única. Veja o que nossas clientes
          compartilham sobre seus momentos na LÓTTUS.
        </p>

      </div>


      <div className="testimonials-grid">

        {depoimentos.map((item) => (

          <article
            className="testimonial-card"
            key={item.nome}
          >

            <div className="stars">
              ★★★★★
            </div>


            <p className="testimonial-text">
              "{item.texto}"
            </p>


            <div className="testimonial-author">

              <div className="author-avatar">
                {item.nome.charAt(0)}
              </div>


              <div>

                <h3>
                  {item.nome}
                </h3>

                <span>
                  {item.tratamento}
                </span>

              </div>

            </div>


          </article>

        ))}

      </div>


    </section>
  );
}


export default Depoimentos;