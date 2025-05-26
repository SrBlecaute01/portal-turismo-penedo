import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import RatingCard from "../../components/RatingCard/RatingCard.tsx";
import styles from "./Tourism.module.css";
import Footer from "../../components/Footer/Footer.tsx";
import SliderCard from "../../components/SliderCards/SliderCards.tsx";

const tourismImages = Object.values(import.meta.glob('../../assets/tourism/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const tourismImagesMap = new Map<string, string>(
  tourismImages.map((module) => {
    const path = module.default;
    const parts = path.split('/');
    return [parts[parts.length - 1].split("-")[0].replace(/\D/g, ""), path];
  })
);

console.log(tourismImagesMap);

const tourismCarousel = Object.values(import.meta.glob('../../assets/carousel/tourism/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const tourismContent = [
  {
    id: 43,
    title: "Galpão Zureta",
    to: "#",
    description:
      <span>
        O Galpão Zureta é um espaço cultural e turístico localizado no Centro Histórico de Penedo, Alagoas. O local abriga obras de mais de 40 artistas locais, promovendo a cultura penedense e regional. Além de funcionar como loja de artesanato, o Galpão Zureta conta com uma fábrica própria, onde realiza a produção de materiais com recorte a laser, oferecendo peças personalizadas e inovadoras. Sua importância está na promoção da cultura penedense, geração de renda e valorização do património histórico do município.
        <br/><br/>
        Para acompanhar as novidades e conhecer mais sobre o trabalho realizado, acesse o Instagram oficial
        <a
          href="https://www.instagram.com/galpaozuretaa"
          target="_blank" rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            color: "#1D85D9"
          }}
        >
          &nbsp;@galpaozuretaa
        </a>
      </span>
  },
  {
    id: 0,
    title: "Mercado Público",
    to: "#",
    description: "O Mercado Público de Penedo, inaugurado em 1898, localizado na Avenida Floriano Peixoto é um importante patrimônio histórico e cultural da cidade de Penedo, Alagoas. Destaca-se por sua arquitetura do século XIX, com uma imponente platibanda. Originalmente voltado ao comércio local, passou por reformas e tornou-se um espaço multifuncional. Atualmente, abriga cinco ilhas temáticas (Praça de Alimentação, Artesanato, Vestuário, Bijuterias e Importados), além de lojas e boxes diversos. É um símbolo da identidade local e atrai visitantes pela arquitetura e variedade de produtos."
  },
  {
    id: 1,
    title: "Mercado da Farinha",
    to: "#",
    description: "O Mercado Municipal da Farinha, ou Pavilhão da Farinha, teve sua construção iniciada em 1929 e foi inaugurado em 15 de março de 1932. Localizado na Rua Sabino Romariz, foi criado para a venda de cereais e produtos típicos. Originalmente, contava com 16 botecos laterais que serviam refeições regionais. Reformado entre 2010 e 2012, os botecos foram substituídos por quiosques modernos. Hoje, é um centro comercial ativo, que beneficia comerciantes e atrai consumidores pela variedade e tradição."
  },
  {
    id: 2,
    title: "Mercado do Artesanato",
    to: "#",
    description: "O Mercado do Artesanato de Penedo funciona em um prédio histórico de 1938, localizado na Avenida Beira Rio, às margens do Rio São Francisco. Inicialmente voltado ao comércio, foi transformado em espaço de valorização do artesanato local. Há mais de 15 anos, promove a economia criativa e a cultura penedense. O mercado reúne produtos como esculturas, cerâmicas, bordados e peças em fibras naturais. Tornou-se um importante ponto turístico, unindo arte, tradição e história."
  },
  {
    id: 3,
    title: "Igreja Santa Cruz dos Curtume",
    to: "#",
    description: "A Igreja de Santa Cruz dos Curtumes foi construída em 1818, no antigo terreiro africano do Bairro do Curtume, atual Santa Cruz, com o intuito de exorcizar o local. Está localizada na Rua Joaquim Nabuco, no Centro Histórico. Abriga a imagem milagrosa do Bom Jesus dos Navegantes, esculpida por Cesário Procópio dos Mártyres. Essa imagem é central na maior festa profano-religiosa do Baixo São Francisco. O destaque do evento é a grandiosa procissão fluvial."
  },
  {
    id: 4,
    title: "Círculo Operário",
    to: "#",
    description: "O Círculo Operário de Penedo ocupa um edifício construído em 1843, originalmente uma residência com estrutura de pedra e cal e fachada com estátuas de barro. Em 1946, foi adquirido para sediar atividades voltadas à classe trabalhadora, oferecendo assistência e promovendo eventos culturais. O espaço foi importante para a vida social dos operários durante décadas. Com o fechamento das fábricas, entrou em declínio e ficou inativo a partir da década de 1970. Posteriormente, foi restaurado pelo IPHAN. Atualmente, abriga a Escola de Santeiros, o Memorial da Classe Operária e serve como espaço cultural."
  },
  {
    id: 5,
    title: "Igreja Nossa Senhora da Conceição",
    to: "#",
    description: "A Igreja Nossa Senhora da Conceição, localizada em Penedo, Alagoas, foi construída no século XVIII por fiéis em devoção à padroeira do Brasil. Sua arquitetura barroca e fachada imponente refletem a religiosidade e o processo de urbanização da época. A igreja sempre foi um centro de fé e convivência comunitária. Com o tempo, passou por restaurações que preservaram sua estrutura e elementos artísticos. Também guarda tradições religiosas transmitidas por gerações. Hoje, é um importante símbolo histórico, cultural e turístico da cidade."
  },
  {
    id: 6,
    title: "Igreja Nossa Senhora da Corrente",
    to: "#",
    description: "A Igreja de Nossa Senhora da Corrente foi iniciada em 1764 e concluída em 1790, após várias interrupções, sendo um marco da arquitetura religiosa de Alagoas. Com influência barroca, rococó e neoclássica, destaca-se por sua fachada sóbria e interior ricamente decorado, incluindo azulejos portugueses e retábulos entalhados. A igreja também teve papel histórico como refúgio de escravos durante o abolicionismo. Sua devoção é popular, embora não oficial no calendário litúrgico. Tombada pelo IPHAN, é considerada uma obra-prima da arte luso-brasileira."
  },
  {
    id: 7,
    title: "Igreja de Nossa Senhora do Rosário dos Pretos",
    to: "#",
    description: "A Igreja de Nossa Senhora do Rosário dos Pretos foi iniciada no século XVII, com a construção de uma capela pelos escravizados. Com elementos barrocos e neoclássicos, a igreja foi concluída em etapas, sendo a nave finalizada em 1790 e a fachada em 1816. Foi dedicada à Nossa Senhora do Rosário dos Homens Pretos e tornou-se um importante símbolo de devoção. A igreja preserva marcos históricos como a instalação de uma máquina de gás e a construção da Via Sacra. Sua fachada e interior refletem um estilo simples e elegante, com altares e detalhes neoclássicos."
  },
  {
    id: 8,
    title: "Oratório da Forca",
    to: "#",
    description: "O Oratório da Forca, construído no século XVIII, está localizado na Praça Barão de Penedo e está ligado às execuções públicas da cidade durante o período colonial. Usado como local de vigília para os condenados à forca, permitia-lhes rezar e aguardar a execução no \"Alto da Forca\". Além de seu papel religioso, o oratório também servia para celebrações de missas, com a participação de soldados e da população. Os prisioneiros, que ficavam na cadeia pública próxima, assistiam às cerimônias antes de sua execução. O local mantém sua estrutura original, sendo um ponto histórico relevante de Penedo. Hoje, o oratório é um importante símbolo da história da cidade."
  },
  {
    id: 9,
    title: "Igreja Conventual de Santa Maria dos Anjos",
    to: "#",
    description: "A Igreja Conventual de Santa Maria dos Anjos, começou a ser construída em 1660, sendo concluída em 1759, como parte do Complexo Franciscano. O local reúne igreja, convento, capela e museu, tendo sido um centro religioso e educacional. Sua arquitetura colonial portuguesa possui influências barrocas e rococós. O interior é ricamente decorado com entalhes dourados e altares artísticos do século XVIII. Em 1941, foi tombada pelo IPHAN por seu valor histórico. Passou por restauração em 2011, revelando detalhes ocultos. Hoje, é um dos maiores patrimônios religiosos de Alagoas."
  },
  {
    id: 10,
    title: "Igreja Santa Luzia",
    to: "#",
    description: "A Igreja de Santa Luzia, no bairro de mesmo nome em Penedo (AL), teve sua pedra fundamental lançada em 1920 pelo Padre Batista Wanderlei. Após várias interrupções e trocas de párocos, Cônego Odilon Lôbo assumiu a obra e decidiu construir um templo maior, prevendo o crescimento do bairro. A inauguração ocorreu em 28 de setembro de 1941, com bênção litúrgica e celebração da primeira missa. A imagem de Santa Luzia foi doada por uma mãe em agradecimento pela cura da filha. O templo destaca-se por sua arquitetura simples e elegante. Posteriormente, foi elevado à Matriz sob a gestão do Padre Aldo de Melo Brandão."
  },
  {
    id: 11,
    title: "Praça 12 de abril",
    to: "#",
    description: "O desenvolvimento de Penedo começou na atual Praça Comendador José da Silva Peixoto, antiga Rua da Praia, às margens do Rio São Francisco. O comércio cresceu rapidamente, e sobrados foram construídos. Um trecho nobre foi chamado Largo Imperial da Corrente, com destaque para a Igreja da Corrente, o Paço Imperial e o Colégio Anchieta. Em 1736, o local recebeu um obelisco e passou a se chamar Praça 12 de Abril. Em 1800, proibiu-se construir perto do rio para facilitar o transporte fluvial. Essa medida preservou o espaço hoje usado pela população ribeirinha."
  },
  {
    id: 12,
    title: "Theatro Sete de Setembro",
    to: "#",
    description: "O Theatro Sete de Setembro, localizado em Penedo (AL), foi inaugurado em 1884 e é o mais antigo teatro de Alagoas. Sua construção começou em 1865 e durou 19 anos, com projeto do arquiteto italiano Luigi Lucarini. De estilo neoclássico, possui formato em ferradura e abriga 330 espectadores. A fachada é adornada com quatro musas gregas: Euterpe, Calíope, Melpômene e Terpsícore. Destaca-se pela excelente acústica e por ter sido sede da Imperial Sociedade Filarmônica, com título concedido por Dom Pedro II. O teatro passou por restaurações, sendo a última em 2017. Hoje, é tombado pelo IPHAN e administrado pela prefeitura local."
  },
  {
    id: 13,
    title: "Casa de Aposentadoria",
    to: "#",
    description: "A Casa de Aposentadoria Velha foi construída entre 1781 e 1782, sob a ordem do ouvidor José de Mendonça de Matos Moreira, e localizada no piso superior da Cadeia Pública de Penedo. Inicialmente, serviu como hospedagem para os Ouvidores coloniais, com administração de Jacinto Soares de Sousa. Com o tempo, tornou-se inadequada para esse fim, sendo substituída pela Casa de Aposentadoria Nova. Em 1933, após reformas, abrigou o Grupo Escolar Gabino Besouro e, mais tarde, a Escola São Tarcísio. Passou por restauração na gestão do prefeito Raimundo Marinho, preservando suas características coloniais e, atualmente, abriga setores administrativos da Prefeitura Municipal."
  },
  {
    id: 14,
    title: "Igreja Catedral Nossa Senhora do Rosário",
    to: "#",
    description: "A Igreja Matriz de Nossa Senhora do Rosário, atualmente Catedral Diocesana de Penedo, foi iniciada em 1690, no local da antiga Capela de Santo Antônio, e construída em etapas, com o estilo Barroco-Colonial. A Capela-Mor, estreita e profunda, foi a primeira parte a ser erguida, e a igreja foi concluída em 1850, com torres altas e vitrais franceses. Em 1808, o frontispício foi reformado, com uma cruz de pedra da Rocheira, e, em 1899, um relógio foi instalado na torre. A igreja passou por modificações ao longo dos anos, incluindo a construção da Capela do Santíssimo Sacramento, em 1902. Ela mantém importantes relíquias históricas, como imagens de Santo Antônio e Nossa Senhora do Rosário das Vitórias"
  },
  {
    id: 15,
    title: "Igreja Santo Antônio dos Pobres",
    to: "#",
    description: "Em 1906, os moradores do Bairro de Santo Antônio iniciaram a construção de uma capela dedicada a Santo Antônio dos Pobres. O Cônego Theotônio Ribeiro foi nomeado capelão em 1907 e criou a obra caridosa \"Pão de Santo Antônio\". A igreja possui uma fachada simples com uma imagem de Santo Antônio em terra-cota e passou por modificações internas ao longo dos anos. A torre, localizada nos fundos, reflete influência romântica. O Cônego Ribeiro foi sepultado no templo, e a capela abriga duas imagens de Santo Antônio de grande importância."
  },
  {
    id: 16,
    title: "Igreja São Gonçalo Garcia",
    to: "#",
    description: "A Igreja de São Gonçalo Garcia dos Homens Pardos, em Penedo, foi construída entre 1758 e 1759 e destaca-se por sua arquitetura imponente e interiores neoclássicos. Possui três portas principais, duas laterais, e um conjunto de janelas. O templo abriga a imagem “Ecce Homo”, a mais antiga da cidade, inicialmente cultuada em um nicho na antiga Rua da Praia. A imagem, considerada deformada, causava pavor até ser restaurada pelo escultor Atônito Pedro, ganhando uma feição mais harmoniosa. O altar contém tesouros artísticos, incluindo dois púlpitos e vários altares."
  },
  {
    id: 17,
    title: "Praça Dr. Clementino do Monte",
    to: "#",
    description: "A Praça Dr. Manoel Clementino do Monte, antiga Praça do Cajueiro Grande, é histórica por ser o local da vitória dos penedenses sobre os holandeses em 1645, conhecida como \"Openeda\". Para comemorar essa vitória, foi erguida uma Cruz de Pedra, que passou por diversas mudanças ao longo dos anos. Em 1857, uma capela simples foi construída no local, onde a cruz foi colocada. Após vandalismo em 1941 e a demolição da capela em 1970, uma réplica da cruz foi colocada no altar da nova igreja. A cruz original foi restaurada na década de 1960 e reinstalada na praça, preservando sua memória histórica e simbólica.\n"
  },
  {
    id: 18,
    title: "Praça Marechal Deodoro",
    to: "#",
    description: "A Praça Marechal Deodoro da Fonseca localizada no Centro Histórico de Penedo, recebeu este nome como forma de homenagem ao Marechal Deodoro, o local reúne importantes marcos arquitetônicos e históricos, refletindo a rica herança cultural de Penedo. Entre os edifícios destaca-se o Tiro de Guerra, Cine Penedo e Igreja Nossa Senhora do Rosário dos Pretos."
  },
  {
    id: 19,
    title: "Praça Jacomé Calheiros",
    to: "#",
    description: "A Praça Jácome Calheiros, conhecida como \"Praça do Coreto\", é um dos encantos de Penedo, Alagoas. Fundada no início do século XX, fica na Rua João Pessoa, em frente ao Colégio Imaculada Conceição e à Rádio Rio São Francisco. Com ambiente agradável, é cercada por locais como a Sorveteria SorveShow, o restaurante Boca Cheia, Y'spetos Grill e Dunelli."
  },
  {
    id: 20,
    title: "Fundação Casa do Penedo",
    to: "#",
    description: "A Fundação Casa do Penedo, localizada em Penedo, Alagoas, foi criada em 26 de setembro de 1992 pelo médico e historiador Francisco Alberto Sales. A instituição visa preservar a história e a cultura local, funcionando em um sobrado histórico no centro da cidade. Seu acervo inclui salas temáticas, objetos antigos, fotografias e documentos. A fundação também conta com uma biblioteca com mais de 20 mil livros e um rico acervo iconográfico. Além disso, promove exposições, palestras e eventos culturais. É um importante espaço de valorização da memória penedense."
  },
  {
    id: 21,
    title: "Forte da Rocheira",
    to: "#",
    description: " O nome Penedo originou-se de ter a povoação erguida sobre uma rocha à margem esquerda do Rio São Francisco. Essa extensão compactada de rocha recebeu o nome de Rocheira. No lado esquerdo de quem chega, localizado  a Rua do Banheiro local onde, na época, funcionava o banheiro público. No lado direito, na parte baixa, a rua mais antiga, a Rua do Sol, onde se encontrava com o histórico e misterioso Bairro do Barro Vermelho, início da povoação da Vila do Penedo, detentor de excelente olaria."
  },
  {
    id: 22,
    title: "Praça Barão de Penedo ",
    to: "#",
    description: "O logradouro foi chamado de Largo do Pelourinho, anteriormente, Praça Rui Barbosa e atualmente Praça Barão de Penedo, porém, frequentemente a população o identifica como Praça da Matriz e/ou Praça da Catedral, visto que ao redor dela estar o templo, mais importante da cidade, a Igreja Matriz de Nossa Senhora do Rosário (Catedral Diocesana). Localizada sobre o rochedo que deu nome a municipalidade, a Praça Barão de Penedo, em que estão estabelecidos, compõem um dos mais belos Conjuntos Arquitetônicos. Frente à Catedral, fica a Sede da Prefeitura Municipal, no sobrado que, a princípio, funcionou a Casa de Aposentadoria Nova."
  },
  {
    id: 23,
    title: "Pousada Colonial",
    to: "#",
    description: "Construído em 1734, o sobrado em estilo colonial conserva sua fachada original e está localizado no Centro Histórico de Penedo, às margens do Rio São Francisco, ao lado da Igreja de Nossa Senhora da Corrente. O edifício foi sede do Colégio Anchieta, contribuindo para a vida cultural da cidade. Em 1983, foi adquirido pelo empresário Carlos Hora e transformado na Pousada Colonial, ganhando nova função sem perder o valor histórico. A pousada mantém elementos arquitetônicos preservados e oferece vista privilegiada do rio, com 12 quartos confortáveis. É um exemplo de reutilização patrimonial, unindo tradição, turismo e preservação da memória local."
  },
  {
    id: 24,
    title: "Museu Paço Imperial",
    to: "#",
    description: "O Paço Imperial de Penedo, localizado na Praça Doze de Abril, 2 - Centro Histórico, Penedo - AL, é um importante patrimônio histórico de Alagoas. Construído em 1826, serviu como residência oficial dos governadores da Província. Durante o Império, foi palco de eventos como a visita de Dom Pedro II em 1859. Com a Proclamação da República, perdeu sua função administrativa e foi abandonado. Na década de 1980, foi restaurado e transformado em museu, preservando a história da Província e a arquitetura do século XIX. Hoje, é um marco cultural de Penedo e de Alagoas."
  },
  {
    id: 25,
    title: "Cais do Porto de Penedo",
    to: "#",
    description: "O Cais do Porto de Penedo, às margens do Rio São Francisco, foi inaugurado em 1905, após obras iniciadas em 1902 sob a supervisão de Luiz Lucarinni Filho. Sua construção contou com a colaboração da comunidade local, que forneceu barro vermelho para o aterro necessário. O cais foi vital para o comércio e transporte fluvial, conectando Penedo a outras regiões. Enchentes em 1906 e 1926 danificaram sua estrutura, exigindo reconstruções. Hoje, o cais é um símbolo histórico e turístico da cidade."
  },
  {
    id: 26,
    title: "Passeio na Foz do Rio São Francisco",
    to: "#",
    description: "A Foz do Rio São Francisco é um dos principais atrativos naturais do Nordeste, situada na divisa entre Alagoas e Sergipe. O encontro do rio com o mar forma um cenário deslumbrante, cercado por dunas, manguezais e vegetação nativa. O Rio São Francisco nasce em Minas Gerais e percorre 2.830 km até desaguar no Oceano Atlântico. O acesso à foz é feito apenas por passeios de barco, partindo de Piaçabuçu (AL), pois a região é protegida e não possui rodovias. Para preservar o ecossistema, passeios de buggy e quadriciclo são proibidos. A visita proporciona contato com a natureza e com comunidades ribeirinhas. É um destino de ecoturismo e contemplação. A foz se destaca como um patrimônio natural e cultural do Brasil."
  },
  {
    id: 27,
    title: "Dunas douradas",
    to: "#",
    description: "As Dunas Douradas, localizadas em Piaçabuçu, Alagoas, são formações naturais impressionantes que se estendem entre o rio São Francisco e o Oceano Atlântico. Com areias finas e tons dourados, o local encanta pela beleza e tranquilidade. É um dos principais pontos turísticos da região, ideal para passeios de buggy, caminhadas e contemplação do pôr do sol."
  }
]

function Tourism() {
  return (
    <div className={styles.tourismContainer}>
      <Navbar/>
      <Carousel
        text = 'Principais Destinos'
        images={tourismCarousel.map(image => image.default)}
      />
      <div className={styles.tourismContent}>
        <SliderCard
          text="Mais procurados"
          cards={tourismContent.map(tourism => {
            return (
              <RatingCard
                text={tourism.title.length <= 25 ? tourism.title : tourism.title.substring(0, 25) + "..."}
                to={tourism.to}
                image={{
                  title: "Imagem do " + tourism.title,
                  image: String(tourismImagesMap.get(String(tourism.id)))
                }}
              />
            )
          })}
        />
        <div className={styles.cardsContainer}>
          {tourismContent.map((tourism) =>
            <div key ={tourism.id}>
              <RatingCard
                text={tourism.title}
                image={{
                  title: "Imagem do " + tourism.title,
                  image: String(tourismImagesMap.get(String(tourism.id)))
                }}
                info={{
                  title: tourism.title,
                  description: tourism.description
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Tourism;