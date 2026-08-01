import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "../styles/navbar.css";
import logo from "../assets/Lottus.png";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Impede rolagem quando o menu estiver aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const fecharMenu = () => setMenuOpen(false);

  return (
    <header className={scroll ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <a href="#inicio" onClick={fecharMenu}>
            <img src={logo} alt="Lottus Studio" />
          </a>
        </div>

        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <a href="#inicio" onClick={fecharMenu}>
                Início
              </a>
            </li>

            <li>
              <a href="#sobre" onClick={fecharMenu}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#servicos" onClick={fecharMenu}>
                Serviços
              </a>
            </li>

            <li>
              <a href="#galeria" onClick={fecharMenu}>
                Galeria
              </a>
            </li>

            <li>
              <a href="#contato" onClick={fecharMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        <a
          href="https://wa.me/553492740707?text=Olá!%20🌿%0A%0AGostaria%20de%20agendar%20uma%20experiência%20na%20Lottus%20Studio."
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar
        </a>
      </div>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={fecharMenu}
        />
      )}
    </header>
  );
}

export default Navbar;