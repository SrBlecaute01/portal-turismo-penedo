interface Section {
  image: string;
  title: string;
  description: string;
  period?: "manhã" | "tarde" | "noite";
}

// Importa as URLs das imagens da pasta de assets.
const routeImageUrlsMap: Record<string, string> = import.meta.glob(
  '../../assets/routesDetailsImg/*.{png,jpg,jpeg,svg,webp}',
  { eager: true, as: 'url' }
);

// Retorna a URL processada de uma imagem com base no nome do arquivo.
const getRouteImageByName = (filename: string): string => {
  const searchSuffix = `/${filename}`;
  const foundKey = Object.keys(routeImageUrlsMap).find(path => path.endsWith(searchSuffix));
  return foundKey ? routeImageUrlsMap[foundKey] : '';
};

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
        image: getRouteImageByName("24.jpg"),
        title: "Museu do Paço Imperial",
        description: "Comece seu dia no coração do centro histórico. O Museu Paço Imperial, instalado em um antigo palácio, abriga relíquias do período colonial, com destaque para móveis, quadros e objetos que remontam aos tempos do Império. O prédio em si é uma viagem ao passado, com janelas amplas e vista privilegiada para o Rio São Francisco.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("11.png"),
        title: "Igreja das Correntes",
        description: "Logo ao lado, está a deslumbrante Igreja Nossa Senhora das Correntes. De fachada barroca e interior ricamente decorado, ela é um dos cartões-postais da cidade. Azulejos portugueses originais, altares entalhados em madeira dourada e pinturas no teto fazem da visita um verdadeiro mergulho na história e na fé do povo penedense.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("22.jpg"),
        title: "Praça Barão de Penedo",
        description: "Depois do almoço, caminhe até a Praça Barão de Penedo, ponto central da cidade que abriga monumentos históricos e é rodeada por casarões coloridos. Ideal para fotos, para sentar e observar o ritmo tranquilo da cidade.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("12.jpg"),
        title: "Theatro Sete de Setembro",
        description: "Em seguida, conheça o Theatro Sete de Setembro, um dos mais antigos teatros em funcionamento do Brasil. Com arquitetura encantadora, o espaço oferece visitas guiadas, onde se pode conhecer o palco, os camarotes e a história cultural do município.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("29.png"),
        title: "Jantar no Forte da Rocheira",
        description: "Para encerrar o dia, vá até o restaurante Forte da Rocheira, que fica em uma construção histórica próxima ao rio. Com vista para o Velho Chico, o local serve pratos da culinária nordestina com toques sofisticados. Experimente o peixe ao molho de camarão ou o tradicional sururu.",
        period: "noite"
      },
    ],
  },
  2: {
    id: 2,
    title: "Dia 2 - Natureza e Tradições",
    sections: [
      {
        image: getRouteImageByName("26.jpg"),
        title: "Passeio pela Foz do Rio São Francisco",
        description: "Acorde cedo e prepare-se para um dos momentos mais mágicos da viagem: o passeio de barco pela Foz do Rio São Francisco. Os catamarãs saem do cais da cidade e seguem rio abaixo até o ponto onde o São Francisco encontra o mar. Ao longo do trajeto, bancos de areia, dunas e vegetação de restinga formam um cenário cinematográfico. Há paradas para banho e tempo para contemplar a paisagem.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("25.jpg"),
        title: "Cais do Porto",
        description: "Ao retornar do passeio, caminhe pelo antigo Cais do Porto, que guarda memórias dos tempos em que Penedo era um dos principais polos comerciais da região. Os armazéns históricos e a vista para o rio fazem desse local um convite à contemplação.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("27.jpg"),
        title: "Dunas Douradas",
        description: "Depois, siga até as Dunas Douradas, um conjunto de formações arenosas que refletem o sol em tons alaranjados no fim da tarde. A paisagem parece saída de um cartão-postal e rende fotos incríveis.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("30.jpg"),
        title: "Jantar no Oratório",
        description: "Na segunda noite, o jantar é no Oratório, restaurante conhecido pela culinária criativa e ambiente acolhedor. Sabores regionais se misturam com pratos contemporâneos, em um espaço decorado com peças de artesanato local.",
        period: "noite"
      },
    ],
  },
  3: {
    id: 3,
    title: "Dia 3 - Cultura Local e Sabores da Terra",
    sections: [
      {
        image: getRouteImageByName("2.jpg"),
        title: "Mercado do Artesanato",
        description: "Comece o dia conhecendo o colorido Mercado do Artesanato, onde você encontra desde peças em barro e madeira até bordados e rendas produzidas por artesãos locais. Cada objeto tem uma história e representa o saber popular da região. ",
        period: "manhã"
      },
      {
        image: getRouteImageByName("1.png"),
        title: "Pavilhão da Farinha",
        description: "Ao lado, visite o Pavilhão da Farinha, uma construção antiga onde ainda hoje é possível ver a produção artesanal de farinha e seus derivados. É uma experiência viva da cultura alimentar local e um ótimo lugar para conversar com os moradores.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("31.jpg"),
        title: "Fundação Casa do Penedo",
        description: "A tarde reserva um passeio pela Fundação Casa do Penedo, um centro cultural instalado em um casarão histórico com vista para o rio. O acervo reúne documentos, mapas, obras de arte e exposições temporárias que ajudam a entender melhor a formação da cidade e a diversidade de seu povo.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("32.jpg"),
        title: "Eventos Culturais ou Noite Livre",
        description: "Se sua visita coincidir com alguma festividade como o Penedo Luz (dezembro) ou a Feira Literária, aproveite para mergulhar ainda mais na cultura local. As ruas ficam iluminadas, há apresentações de música e dança, além de barracas com comidas típicas. Caso não haja eventos no período, volte a um dos seus restaurantes favoritos e aproveite para se despedir com um brinde ao Velho Chico.",
        period: "noite"
      },
    ],
  },
  4: {
    id: 4,
    title: "Dia 4 - Fé e Patrimônio Religioso",
    sections: [
      {
        image: getRouteImageByName("7.jpg"),
        title: "Igreja Matriz Nossa Senhora do Rosário e Igreja da Penha",
        description: "Explore o lado espiritual da cidade com a visita à Igreja Matriz Nossa Senhora do Rosário, imponente e de arquitetura belíssima. Sua localização privilegiada oferece vista panorâmica do centro histórico. Em seguida, conheça a charmosa Igreja Nossa Senhora da Penha, mais discreta, mas igualmente rica em história e fé.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("9.jpg"),
        title: "Convento Franciscano e Igreja Santa Maria dos Anjos",
        description: "À tarde, visite o Convento Franciscano, um dos pontos religiosos mais antigos da região, fundado no século XVII. Seu interior abriga obras de arte e painéis de azulejos históricos. Em seguida, a Igreja Santa Maria dos Anjos completa o roteiro com sua simplicidade encantadora e atmosfera de paz.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("33.webp"),
        title: "Jantar no Prato Cheio",
        description: "Depois de um dia de introspecção e beleza, o jantar é no Prato Cheio, restaurante que serve pratos regionais bem servidos, em ambiente informal e acolhedor.",
        period: "noite"
      },
    ],
  },
  5: {
    id: 5,
    title: "Dia 5 - Cultura Popular e Expressões Urbanas",
    sections: [
      {
        image: getRouteImageByName("0.png"),
        title: "Mercado Público de Penedo",
        description: "No Mercado Público, você vivencia o dia a dia dos moradores. É o local ideal para experimentar frutas tropicais, doces caseiros e ouvir histórias locais.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("4.jpg"),
        title: "Círculo Operário",
        description: "A tarde segue com um passeio pelo histórico Círculo Operário, que já foi ponto de encontros sociais e culturais.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("34.jpg"),
        title: "Rua do Banheiro",
        description: "A Rua do Banheiro, com suas construções típicas, é outro charme escondido, cheia de memórias do cotidiano penedense.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("35.jpeg"),
        title: "Evento Cultural Noturno",
        description: "Aproveite eventos como o Festival de Cinema de Penedo ou apresentações na praça central. Uma boa pedida para quem gosta de arte, cinema e música ao vivo.",
        period: "noite"
      },
    ],
  },
  6: {
    id: 6,
    title: "Dia 6 - Praças, Relaxamento e Sabores Regionais",
    sections: [
      {
        image: getRouteImageByName("17.png"),
        title: "Praça Dr. Clementino do Monte",
        description: "Um dia mais leve começa com uma caminhada pela Praça Dr. Clementino do Monte, local tranquilo para relaxar, observar a cidade e tomar um café. Ideal para quem quer respirar fundo e absorver a essência local.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("36.png"),
        title: "Almoço no Silvas Brasas e sorvetes no Mister Shake",
        description: "Almoce no Silvas Brasas, conhecido por seu churrasco saboroso e ambiente familiar. Depois, experimente um açaí ou milk-shake no Mister Shake, muito popular entre os moradores.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("37.jpg"),
        title: "Yspetos Grill",
        description: "Para fechar o dia, saboreie espetinhos variados no Yspetos Grill",
        period: "noite"
      },
    ],
  },
  7: {
    id: 7,
    title: "Dia 7 - Natureza, Despedida e Agradecimento",
    sections: [
      {
        image: getRouteImageByName("3.jpg"),
        title: "Igrejas Santa Cruz dos Curtume e Santa Luzia",
        description: "Reserve o último dia para visitar igrejas mais afastadas, como a Santa Cruz dos Curtume e a singela Santa Luzia. Cada uma guarda histórias e particularidades que complementam a rica espiritualidade da cidade",
        period: "manhã"
      },
      {
        image: getRouteImageByName("38.jpg"),
        title: "Passeio de Barco ou Bar do Bode",
        description: "Escolha entre um último passeio de barco pelo São Francisco ou um almoço no rústico Bar e Restaurante do Bode, com pratos típicos de dar água na boca.",
        period: "tarde"
      },
    ],
  },
  8: {
    id: 8,
    title: "Dia 8 - A Natureza do Interior: Visita à Zona Rural",
    sections: [
      {
        image: getRouteImageByName("39.jpg"),
        title: " Itaporanga e Buraco Restaurante",
        description: "Saia da cidade e siga pela AL-110 até o povoado de Itaporanga (cerca de 15 minutos de carro ou 25 de van). Lá, visite o Bar e Restaurante do Buraco, cercado por natureza, lagos e plantações. A comida é feita no fogão à lenha e a recepção é calorosa.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("40.png"),
        title: "Jantar no Oushe Burguer",
        description: "De volta à cidade, experimente os hambúrgueres artesanais e as batatas crocantes do Oushe Burguer, com ambiente moderno e jovem.",
        period: "noite"
      },
    ],
  },
  9: {
    id: 9,
    title: "Dia 9 - Relaxamento e Bem-estar",
    sections: [
      {
        image: getRouteImageByName("slider-1.jpeg"),
        title: "Jardim de Eventos e interação com moradores",
        description: "Passeie pelo Jardim de Eventos, onde frequentemente acontecem feirinhas, apresentações de capoeira e rodas de samba. Converse com os locais e sinta-se parte da cidade.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("41.png"),
        title: "Atividades esportivas",
        description: "À tarde, pegue sua camisa e vá até o Estadio Alfredo Leahy, onde ocorrem os jogos do Sport Club Penedense. Se preferir, faça uma caminhada ou ande de bicicleta pela orla do rio, aproveitando a brisa fresca e a vista.",
        period: "tarde"
      },
      {
        image: getRouteImageByName("42.jpg"),
        title: "Jantar no Restaurante do Hotel São Francisco",
        description: "Para encerrar o dia, jante no restaurante do Hotel São Francisco, que oferece pratos da culinária local com um toque contemporâneo. O ambiente é acolhedor e a vista para o rio é deslumbrante.",
        period: "noite"
      }
    ],
  },
  10: {
    id: 10,
    title: "Dia 10 - Compras e Despedida",
    sections: [
      {
        image: getRouteImageByName("placeholder.jpg"),
        title: "Compras no Comércio Local",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        period: "manhã"
      },
      {
        image: getRouteImageByName("placeholder.jpg"),
        title: "Jantar de Despedida",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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