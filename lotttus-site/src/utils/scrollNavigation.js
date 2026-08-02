const NAVBAR_OFFSET = 96;

export const NAV_LINKS = [
  { label: "Início", path: "/", sectionId: "inicio" },
  { label: "Sobre", path: "/sobre", sectionId: "sobre" },
  { label: "Serviços", path: "/servicos", sectionId: "servicos" },
  { label: "Galeria", path: "/galeria", sectionId: "galeria" },
  { label: "Contato", path: "/contato", sectionId: "contato" },
];

export const scrollToSection = (sectionId, behavior = "smooth") => {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return;
  }

  if (sectionId === "inicio") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const section = document.getElementById(sectionId);

  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior });
  }
};

export const navigateToSection = (event, path, sectionId) => {
  if (event) {
    event.preventDefault();
  }

  if (typeof window !== "undefined") {
    window.history.pushState({}, "", path);
    requestAnimationFrame(() => scrollToSection(sectionId));
  }
};

export const getSectionIdFromPath = (pathname) => {
  const currentLink = NAV_LINKS.find((link) => link.path === pathname);

  return currentLink ? currentLink.sectionId : null;
};
