import { ProjectImage } from './types';

// NOTA: Para deploy na Vercel com Vite, mova a pasta 'imgs' para dentro de uma pasta chamada 'public' na raiz.
// Exemplo: /public/imgs/foto.jpg
// Os caminhos abaixo usam '/' na frente para indicar a raiz do site.

export const COMPANY_NAME = "Pergolife";
export const INSTAGRAM_URL = "https://www.instagram.com/willianrogerde?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
export const CONTACT_EMAIL = "contato@pergolife.com.br"; // Exemplo

export const PORTFOLIO_IMAGES: ProjectImage[] = [
  {
    id: 1,
    src: "/imgs/deck-piscina-lazer.jpg", 
    alt: "Deck de madeira com piscina e brinquedos",
    category: "Lazer"
  },
  {
    id: 2,
    src: "/imgs/construcao-vista.jpg",
    alt: "Construção de deck com vista para a natureza",
    category: "Obras"
  },
  {
    id: 3,
    src: "/imgs/area-lazer-completa.jpg",
    alt: "Área de lazer completa com piscina",
    category: "Lazer"
  },
  {
    id: 4,
    src: "/imgs/pergola-moderna.jpg",
    alt: "Pergolado em casa moderna cinza",
    category: "Residencial"
  },
  {
    id: 5,
    src: "/imgs/execucao-obra.jpg",
    alt: "Execução e pintura de pergolado",
    category: "Obras"
  },
  {
    id: 6,
    src: "/imgs/detalhe-madeira.jpg",
    alt: "Detalhe estrutural em madeira maciça",
    category: "Detalhes"
  },
  {
    id: 7,
    src: "/imgs/pergola-garagem.jpg",
    alt: "Pergolado cobrindo entrada de garagem",
    category: "Garagem"
  },
  {
    id: 8,
    src: "/imgs/deck-piscina-iluminada.jpg",
    alt: "Piscina moderna com deck de madeira",
    category: "Lazer"
  },
  {
    id: 9,
    src: "/imgs/jacuzzi-deck.jpg",
    alt: "Jacuzzi integrada ao deck à noite",
    category: "Lazer"
  }
];