import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/Lottus.png";

function Navbar() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScroll(window.scrollY > 50);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={scroll ? "navbar active" : "navbar"}>

      <div className="container">

        <div className="logo">
          <a href="#inicio">
            <img src={logo} 
            alt="Lottus Studio" />
          </a>
        </div>

        <nav>

          <ul>

            <li><a href="#inicio">Início</a></li>

            <li><a href="#sobre">Sobre</a></li>

            <li><a href="#servicos">Serviços</a></li>

            <li><a href="#galeria">Galeria</a></li>

            <li><a href="#contato">Contato</a></li>

          </ul>

        </nav>

        <a
          href="https://wa.me/5534999999999"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Agendar
        </a>

      </div>

    </header>

  );

}

export default Navbar;