import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import onda from "../assets/Onda.png";
import video from "../assets/Lottus.mp4";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zoom suave do banner
  const imageScale = Math.min(1 + scrollY * 0.0003, 1.08);

  // Fade apenas do conteúdo
  const textOpacity = Math.max(1 - scrollY * 0.002, 0);

  // Parallax apenas do conteúdo
  const textTransform = `translateY(${scrollY * 0.15}px)`;

  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Cabeçalho */}
        <div
          className="hero-header-grid"
          style={{
            opacity: textOpacity,
            transform: textTransform,
          }}
        >
          <div className="hero-text-block">
            <h1 className="hero-title" id="inicio">
              O Equilíbrio <br />
              <span className="hero-title-accent">
                Começa Aqui.
              </span>
            </h1>

            <p className="hero-description">
              Descubra uma nova definição de bem-estar na LÓTTUS.
              Massagens exclusivas e estética avançada para corpo
              e mente.
            </p>
          </div>

          <div className="hero-illustration-wrapper">
            <img
              src={onda}
              alt="Ilustração de flor de lótus e onda LÓTTUS"
              className="hero-illustration"
            />
          </div>
        </div>

        {/* Botões */}
        <div
          className="hero-actions"
          style={{
            opacity: textOpacity,
            transform: textTransform,
          }}
        >
          <a
            href="https://wa.me/553492740707?text=Olá!%20🌿%0A%0AConheci%20a%20Lottus%20Studio%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20experiência.%0A%0APoderia%20me%20informar%20os%20horários%20disponíveis?%0A%0AMuito%20obrigado!"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Experiência
          </a>

          <a href="#servicos" className="btn-secondary">
            Conhecer Tratamentos
          </a>
        </div>

        {/* Banner */}
        <div
          className="hero-banner-wrapper"
          style={{
            transform: `scale(${imageScale})`,
          }}
        >
          <video
            className="hero-banner-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className="hero-banner-overlay" />
        </div>
      </div>
    </section>
  );
}

export default Hero;