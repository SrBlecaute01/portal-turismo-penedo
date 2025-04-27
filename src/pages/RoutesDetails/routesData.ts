interface Section {
  image: string;
  title: string;
  description: string;
  period?: "manhã" | "tarde" | "noite";
}

interface Day {
  id: number;
  title: string;
  sections: Section[];
}

interface RouteData {
  id: number;
  title: string;
  description: string;
  days: number[];
}

type DaysDataType = {
  [key: number]: Day;
}

type RoutesDataType = {
  [key: number]: RouteData;
}

// Banco de dados de dias individuais que podem ser reutilizados em diferentes roteiros
export const daysData: DaysDataType = {
  1: {
    id: 1,
    title: "Dia 1 - História e Cultura",
    sections: [
      {
        image: "src/assets/tourism/24.jpg",
        title: "Museu do Paço Imperial",
        description: "Comece seu dia no coração do centro histórico. O Museu Paço Imperial, instalado em um antigo palácio, abriga relíquias do período colonial, com destaque para móveis, quadros e objetos que remontam aos tempos do Império. O prédio em si é uma viagem ao passado, com janelas amplas e vista privilegiada para o Rio São Francisco.",
        period: "manhã"
      },
      {
        image: "src/assets/tourism/11.png",
        title: "Igreja das Correntes",
        description: "Logo ao lado, está a deslumbrante Igreja Nossa Senhora das Correntes. De fachada barroca e interior ricamente decorado, ela é um dos cartões-postais da cidade. Azulejos portugueses originais, altares entalhados em madeira dourada e pinturas no teto fazem da visita um verdadeiro mergulho na história e na fé do povo penedense.",
        period: "manhã"
      },
      {
        image: "src/assets/tourism/22.jpg",
        title: "Praça Barão de Penedo",
        description: "Depois do almoço, caminhe até a Praça Barão de Penedo, ponto central da cidade que abriga monumentos históricos e é rodeada por casarões coloridos. Ideal para fotos, para sentar e observar o ritmo tranquilo da cidade.",
        period: "tarde"
      },
      {
        image: "src/assets/tourism/12.jpg",
        title: "Theatro Sete de Setembro",
        description: "Em seguida, conheça o Theatro Sete de Setembro, um dos mais antigos teatros em funcionamento do Brasil. Com arquitetura encantadora, o espaço oferece visitas guiadas, onde se pode conhecer o palco, os camarotes e a história cultural do município.",
        period: "tarde"
      },
      {
        image: "src/assets/tourism/29.png",
        title: "Jantar no Forte da Rocheira",
        description: "Para encerrar o dia, vá até o restaurante Forte da Rocheira, que fica em uma construção histórica próxima ao rio. Com vista para o Velho Chico, o local serve pratos da culinária nordestina com toques sofisticados. Experimente o peixe ao molho de camarão ou o tradicional sururu.",
        period: "noite"
      },
    ],
  },
  2: {
    id: 2,
    title: "Dia 2 - Cultura Ribeirinha",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-2.jpeg",
        title: "Passeio de Barco pelo Rio São Francisco",
        description: "Comece o dia com um passeio de barco pelo Rio São Francisco. Os barqueiros locais oferecem passeios que mostram a beleza do rio e contam histórias sobre a importância dele para a região. Você terá a oportunidade de ver a cidade a partir de uma perspectiva diferente e entender por que o rio é chamado de 'Velho Chico'.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-3.jpeg",
        title: "Almoço com Culinária Ribeirinha",
        description: "Experimente os pratos típicos da região ribeirinha em um dos restaurantes à beira do rio. O surubim, peixe característico do São Francisco, é uma ótima pedida, assim como o pirão de peixe e o camarão de água doce.",
        period: "tarde"
      },
    ],
  },
  3: {
    id: 3,
    title: "Dia 3 - Artesanato e Tradições",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-1.jpeg",
        title: "Mercado de Artesanato",
        description: "Visite o mercado de artesanato local, onde você encontrará obras em madeira, cerâmica, palha e outros materiais que representam a rica cultura regional. Converse com os artesãos e descubra as histórias por trás de cada peça única.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-2.jpeg",
        title: "Oficina de Artesanato",
        description: "Participe de uma oficina onde você poderá aprender técnicas tradicionais de artesanato com mestres locais. É uma experiência enriquecedora que permite uma conexão mais profunda com a cultura penedense.",
        period: "tarde"
      },
    ],
  },
  4: {
    id: 4,
    title: "Dia 4 - Gastronomia Local",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-3.jpeg",
        title: "Tour Gastronômico",
        description: "Faça um tour pelos estabelecimentos tradicionais da cidade, experimentando iguarias como o bolo de macaxeira, cocadas, e outros doces típicos que representam a doçaria portuguesa adaptada aos ingredientes locais.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-1.jpeg",
        title: "Aula de Culinária Regional",
        description: "Participe de uma aula de culinária com chefs locais que ensinarão receitas tradicionais passadas de geração em geração. Aprenda a preparar pratos como a moqueca de peixe ou o arroz de cuxá.",
        period: "tarde"
      },
    ],
  },
  5: {
    id: 5,
    title: "Dia 5 - Natureza e Aventura",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-2.jpeg",
        title: "Trilha Ecológica",
        description: "Participe de uma trilha guiada pela mata ciliar do Rio São Francisco, onde você conhecerá a flora e fauna nativas e aprenderá sobre os esforços de conservação da região.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-3.jpeg",
        title: "Canoagem no Rio",
        description: "À tarde, experimente a canoagem em trechos tranquilos do Rio São Francisco, uma atividade que proporciona contato direto com a natureza e vistas deslumbrantes das margens do rio.",
        period: "tarde"
      },
    ],
  },
  6: {
    id: 6,
    title: "Dia 6 - Fazendas Históricas",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-1.jpeg",
        title: "Visita a Engenho de Cana",
        description: "Conheça um antigo engenho de cana-de-açúcar e aprenda sobre a importância dessa cultura para o desenvolvimento econômico da região. Veja como funcionavam os processos de produção de açúcar e derivados no passado.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-2.jpeg",
        title: "Almoço na Fazenda",
        description: "Desfrute de um almoço típico servido em uma fazenda histórica, com produtos frescos colhidos na propriedade. A experiência inclui a degustação de cachaças artesanais produzidas seguindo métodos tradicionais.",
        period: "tarde"
      },
    ],
  },
  7: {
    id: 7,
    title: "Dia 7 - Festas e Tradições Populares",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-3.jpeg",
        title: "Apresentação de Reisado",
        description: "Assista a uma apresentação de Reisado, manifestação cultural típica do nordeste brasileiro que mistura música, dança e teatro em uma celebração colorida e vibrante.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-1.jpeg",
        title: "Roda de Samba de Coco",
        description: "Participe de uma roda de Samba de Coco, ritmo tradicional da região que combina percussão, canto e dança em uma celebração comunitária onde todos são convidados a participar.",
        period: "tarde"
      },
    ],
  },
  8: {
    id: 8,
    title: "Dia 8 - Cidades Vizinhas",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-2.jpeg",
        title: "Visita a Piranhas",
        description: "Conheça a cidade histórica de Piranhas, também às margens do São Francisco, que preserva um importante conjunto arquitetônico do século XIX e foi cenário de eventos importantes da história do cangaço.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-3.jpeg",
        title: "Passeio pelo Cânion do São Francisco",
        description: "Faça um passeio de barco pelo impressionante Cânion do São Francisco, formação geológica de tirar o fôlego que pode ser acessada a partir da cidade de Piranhas.",
        period: "tarde"
      },
    ],
  },
  9: {
    id: 9,
    title: "Dia 9 - Relaxamento e Bem-estar",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-1.jpeg",
        title: "Massagem com Ervas Locais",
        description: "Experimente uma sessão de massagem terapêutica que utiliza óleos essenciais extraídos de plantas da região, uma prática que combina conhecimentos tradicionais com técnicas modernas de bem-estar.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-2.jpeg",
        title: "Pôr do Sol no Mirante",
        description: "Termine o dia apreciando o espetacular pôr do sol no Mirante do São Francisco, um momento de contemplação que oferece vistas panorâmicas do rio e da cidade iluminada pelos últimos raios de sol.",
        period: "tarde"
      },
    ],
  },
  10: {
    id: 10,
    title: "Dia 10 - Compras e Despedida",
    sections: [
      {
        image: "src/assets/carousel/routes/slider-3.jpeg",
        title: "Compras no Comércio Local",
        description: "Visite as lojas do centro histórico para comprar lembranças, artesanato e produtos típicos como doces, licores e itens decorativos que representam a rica cultura de Penedo.",
        period: "manhã"
      },
      {
        image: "src/assets/carousel/routes/slider-1.jpeg",
        title: "Jantar de Despedida",
        description: "Despeça-se da cidade com um jantar especial em um dos restaurantes tradicionais, relembrando os momentos especiais passados em Penedo e planejando seu retorno a este lugar encantador.",
        period: "noite"
      },
    ],
  },
};

// Roteiros compostos por dias
export const routesData: RoutesDataType = {
  1: {
    id: 1,
    title: "1 dia em Penedo",
    description: "Conheça o essencial de Penedo em apenas um dia, visitando os principais pontos históricos e culturais da cidade.",
    days: [1]
  },
  2: {
    id: 2,
    title: "2 dias em Penedo",
    description: "Aproveite um fim de semana em Penedo explorando o centro histórico e a cultura ribeirinha, com experiências à beira do Rio São Francisco.",
    days: [1, 2]
  },
  3: {
    id: 3,
    title: "3 dias em Penedo",
    description: "Um final de semana prolongado para conhecer Penedo, combinando história, cultura ribeirinha e tradições locais.",
    days: [1, 2, 3]
  },
  5: {
    id: 5,
    title: "5 dias em Penedo",
    description: "Mergulhe na história e cultura de Penedo com tempo para explorar também as belezas naturais e a gastronomia local.",
    days: [1, 2, 3, 4, 5]
  },
  7: {
    id: 7,
    title: "7 dias em Penedo",
    description: "Uma semana completa para conhecer Penedo em profundidade, incluindo excursões para fazendas históricas e manifestações culturais.",
    days: [1, 2, 3, 4, 5, 6, 7]
  },
  10: {
    id: 10,
    title: "10 dias em Penedo",
    description: "Experiência completa que permite conhecer todos os aspectos de Penedo e região, com tempo para relaxar e aproveitar cada atração.",
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
};