import "../styles/sobre.css";

import Ambiente from "../assets/Ambiente.avif";

function Sobre() {
  return (
    <section className="about-section" id="sobre">

      <div className="about-container">


        <div className="about-image">

          <img
            src={Ambiente}
            alt="Espaço LÓTTUS"
          />

        </div>



        <div className="about-content">

          <span>
            Sobre a LÓTTUS
          </span>


          <h2>
            Um caminho de
            <br />
            <i>equilíbrio e cuidado.</i>
          </h2>


          <p>
            A LÓTTUS nasceu com o propósito de proporcionar
            momentos de reconexão através de terapias
            corporais e práticas inspiradas na sabedoria
            milenar do Ayurveda.
          </p>


          <p>
            Cada atendimento é realizado de forma
            personalizada, respeitando a individualidade
            de cada pessoa e buscando promover
            bem-estar, relaxamento e equilíbrio.
          </p>



          <div className="about-features">


            <div className="about-feature">

              <span>
                🌿
              </span>

              <div>
                <h3>
                  Ayurveda
                </h3>

                <p>
                  Técnicas tradicionais para equilíbrio
                  do corpo e mente.
                </p>
              </div>

            </div>



            <div className="about-feature">

              <span>
                ✨
              </span>

              <div>
                <h3>
                  Atendimento Único
                </h3>

                <p>
                  Cada experiência pensada para você.
                </p>
              </div>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}


export default Sobre;