import React, { useState, useEffect } from 'react';
import "../styles/hero.css";
import onda from "../assets/Onda.png";

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageScale = Math.min(1 + scrollY * 0.0003, 1.08);
  const textOpacity = Math.max(1 - scrollY * 0.002, 0);

  return (
    <section className="hero-container">
      {/* Container de conteúdo */}
      <div
        className="hero-content"
        style={{
          opacity: textOpacity,
          transform: `translateY(${scrollY * 0.15}px)`
        }}
      >
        {/* Layout lado a lado do Título com a Ilustração */}
        <div className="hero-header-grid">
          <div className="hero-text-block">
            <h1 className="hero-title">
              O Equilíbrio <br />
              <span className="hero-title-accent">Começa Aqui.</span>
            </h1>
            <p className="hero-description">
              Descubra uma nova definição de bem-estar na LÓTTUS. Massagens exclusivas e estética avançada, para corpo e mente.
            </p>
          </div>

          {/* Ilustração da Onda com Flor de Lótus */}
          <div className="hero-illustration-wrapper">
            <img
              src={onda}
              alt="Ilustração de flor de lótus e onda LÓTTUS"
              className="hero-illustration"
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="hero-actions">
          <a href="#agendar" className="btn-primary">
            Agendar Experiência
          </a>
          <a href="#sobre" className="btn-secondary">
            Conhecer Tratamentos
          </a>
        </div>

        {/* Frame do Banner / Foto principal com Parallax */}
        <div
          className="hero-banner-wrapper"
          style={{ transform: `scale(${imageScale})` }}
        >
          <img
            src="/images/hero-massage-banner.jpg"
            alt="Sessão de massoterapia na clínica LÓTTUS"
            className="hero-banner-image"
          />
          <div className="hero-banner-overlay" />
        </div>
      </div>
    </section>
  );
}

export default Hero;