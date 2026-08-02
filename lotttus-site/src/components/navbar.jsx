import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "../styles/navbar.css";
import logo from "../assets/Lottus.png";
import { NAV_LINKS, navigateToSection } from "../utils/scrollNavigation";

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

  const handleNavClick = (event, path, sectionId) => {
    fecharMenu();
    navigateToSection(event, path, sectionId);
  };

  return (
    <header className={scroll ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <a href="/" onClick={(event) => handleNavClick(event, "/", "inicio")}>
            <img src={logo} alt="Lottus Studio" />
          </a>
        </div>

        <nav className={menuOpen ? "open" : ""}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  onClick={(event) => handleNavClick(event, link.path, link.sectionId)}
                >
                  {link.label}
                </a>
              </li>
            ))}
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