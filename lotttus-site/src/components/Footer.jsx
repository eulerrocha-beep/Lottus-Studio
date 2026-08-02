import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">


        {/* Marca */}

        <div className="footer-brand">

          <h2>
            LÓTTUS
          </h2>

          <p>
            Um espaço dedicado ao equilíbrio,
            bem-estar e reconexão através
            de terapias corporais.
          </p>

        </div>



        {/* Navegação */}

        <div className="footer-links">

          <h3>
            Navegação
          </h3>

          <a href="#">
            Início
          </a>

          <a href="sobre">
            Sobre
          </a>

        </div>



        {/* Serviços */}

        <div className="footer-links">

          <h3>
            Tratamentos
          </h3>

          <a href="servicos">
            Abhyanga
          </a>

          <a href="servicos">
            Ventosaterapia
          </a>

          <a href="servicos">
            Drenagem Linfática
          </a>

          <a href="servicos">
            Massagem Modeladora
          </a>

        </div>



        {/* Contato */}

        <div className="footer-contact">

          <h3>
            Contato
          </h3>


          <a
            href="https://wa.me/553492740707"
            target="_blank"
            rel="noopener noreferrer"
            id="contato"
          >
            WhatsApp
          </a>


          <a href="https://www.instagram.com/lottus.___/" 
          target="_blank" 
          rel="noopener noreferrer">
            Instagram
          </a>


          <p>
            Reserve seu momento de cuidado
          </p>

        </div>


      </div>



      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} LÓTTUS.
          Todos os direitos reservados.
        </p>

      </div>


    </footer>
  );
}

export default Footer;