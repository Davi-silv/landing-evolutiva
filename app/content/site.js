const configuredUrl =
  (import.meta.env && import.meta.env.VITE_SITE_URL) ||
  (typeof process !== "undefined" && process.env && process.env.VITE_SITE_URL) ||
  "https://evolutiva-tech.com.br";

export const siteUrl = configuredUrl.replace(/\/$/, "");

export const site = {
  name: "Evolutiva Tech",
  url: siteUrl,
  locale: "pt-BR",
  ogLocale: "pt_BR",
  area: "Cabo Frio e Região dos Lagos",
  description:
    "Software house que desenvolve sites, sistemas e automações para empresas.",
  phoneDisplay: "(22) 99751-8427",
  phoneE164: "+55-22-99751-8427",
  whatsappUrl:
    "https://wa.me/5522997518427?text=" +
    encodeURIComponent("Olá, vim pelo site da Evolutiva Tech e quero falar sobre um projeto."),
  emailNote:
    "O contato público é o WhatsApp (22) 99751-8427. Não há e-mail ou endereço físico publicados neste site.",
};

export const leadEndpoint =
  (import.meta.env && import.meta.env.VITE_LEAD_ENDPOINT) || "";

export const services = [
  {
    id: "landing-page",
    name: "Landing Page",
    priceLabel: "A partir de R$ 997",
    price: "997",
    unit: null,
    summary: "Uma página focada em uma oferta, para transformar visita em contato.",
    benefits: [
      "A visita fica concentrada em uma proposta",
      "A chamada para ação aparece com clareza",
      "Serve como página de campanha ou anúncio",
    ],
    features: [
      "Seções desenhadas para conversão",
      "Formulário ou botão de contato",
      "Layout adaptado ao celular",
      "SEO on-page dessa página",
    ],
  },
  {
    id: "site-institucional",
    name: "Site Institucional",
    priceLabel: "A partir de R$ 1.890",
    price: "1890",
    unit: null,
    summary: "Presença profissional, com páginas para apresentar a empresa e receber contatos.",
    benefits: [
      "Explica a empresa além de uma rede social",
      "Organiza serviços, prova de trabalho e contato",
      "Ajuda o cliente a entender o próximo passo",
    ],
    features: [
      "Páginas institucionais",
      "Formulário de contato",
      "Layout responsivo",
      "SEO on-page das páginas combinadas",
    ],
  },
  {
    id: "loja-virtual",
    name: "Loja Virtual",
    priceLabel: "A partir de R$ 2.990",
    price: "2990",
    unit: null,
    summary: "Catálogo e caminho de pedido para vender com a cara do negócio.",
    benefits: [
      "Mostra produtos sem depender só de mensagem solta",
      "Organiza preço, foto e informação de compra",
      "Cria um caminho de pedido acompanhável",
    ],
    features: [
      "Vitrine e página de produto",
      "Carrinho ou fluxo de pedido combinado",
      "Layout para celular",
      "Pagamento e frete entram na proposta quando forem necessários",
    ],
  },
  {
    id: "identidade-visual",
    name: "Identidade Visual",
    priceLabel: "A partir de R$ 490",
    price: "490",
    unit: null,
    summary: "Direção visual inicial para a presença digital da empresa.",
    benefits: [
      "Dá consistência para site e materiais digitais",
      "Evita que cada peça pareça de uma marca diferente",
      "Serve de base para um site ou uma landing page",
    ],
    features: [
      "Paleta e tipografia",
      "Aplicações digitais básicas",
      "Orientações simples de uso",
      "Marca completa ou manual extenso só se entrarem no escopo",
    ],
  },
  {
    id: "automacao-whatsapp",
    name: "Automação de WhatsApp",
    priceLabel: "A partir de R$ 790",
    price: "790",
    unit: null,
    summary: "Fluxos de atendimento para responder com contexto e menos retrabalho.",
    benefits: [
      "Organiza o primeiro atendimento",
      "Encaminha a pessoa para o assunto certo",
      "Reduz pergunta repetida no dia a dia",
    ],
    features: [
      "Fluxo de mensagens combinado",
      "Encaminhamento do contato",
      "Ligação com site ou planilha, quando prevista",
      "Uso dos caminhos oficiais e das regras do WhatsApp",
    ],
  },
  {
    id: "crm",
    name: "CRM Personalizado",
    priceLabel: "A partir de R$ 3.990",
    price: "3990",
    unit: null,
    summary: "Histórico de clientes e etapas de venda em um painel feito para a operação.",
    benefits: [
      "O acompanhamento deixa de ficar só na memória",
      "Orçamento e negociação ficam no mesmo lugar",
      "A equipe enxerga em que etapa cada oportunidade está",
    ],
    features: [
      "Cadastro de clientes e contatos",
      "Pipeline de vendas",
      "Registro de orçamentos",
      "Ampliações definidas na proposta",
    ],
  },
  {
    id: "erp",
    name: "ERP Personalizado",
    priceLabel: "Sob orçamento",
    price: null,
    unit: null,
    summary: "Sistema de gestão desenhado em cima da rotina real da empresa.",
    benefits: [
      "Reúne a operação que hoje está espalhada",
      "O escopo nasce do diagnóstico, não de um pacote fechado",
      "Pode conversar com atendimento, vendas e financeiro",
    ],
    features: [
      "Módulos escolhidos no diagnóstico",
      "Perfis de acesso combinados",
      "Validação com quem usa o sistema",
      "Publicação e orientação de uso",
    ],
  },
  {
    id: "suporte",
    name: "Suporte e Manutenção",
    priceLabel: "A partir de R$ 197/mês",
    price: "197",
    unit: "mês",
    summary: "Acompanhamento depois da publicação, dentro de um escopo mensal.",
    benefits: [
      "Tem quem olhar o site ou o sistema depois da entrega",
      "Correções pequenas não precisam virar um projeto novo",
      "O que entra no mês fica escrito no contrato",
    ],
    features: [
      "Correções dentro do escopo",
      "Pequenos ajustes previstos em contrato",
      "Acompanhamento da publicação",
      "Funcionalidade nova é orçada à parte",
    ],
  },
];

export const differentials = [
  {
    id: "resultados",
    title: "Foco em resultados",
    text: "O ponto de partida é o que a empresa precisa vender, organizar ou parar de refazer. A tela vem depois dessa conversa.",
  },
  {
    id: "personalizado",
    title: "Desenvolvimento personalizado",
    text: "O escopo é fechado com a rotina do negócio. O que não estiver na proposta não entra como se já estivesse incluído.",
  },
  {
    id: "responsivo",
    title: "Design responsivo",
    text: "O uso no celular faz parte do projeto. É ali que boa parte dos clientes chega, compara e chama no WhatsApp.",
  },
  {
    id: "automacao",
    title: "Automação de processos",
    text: "Quando o retrabalho está entre mensagem, planilha e sistema, o fluxo pode ser desenhado junto com o site ou com o painel.",
  },
  {
    id: "seo",
    title: "Otimização SEO",
    text: "As páginas públicas saem com título, descrição, endereço canônico e conteúdo no HTML, para o buscador ler sem depender do clique.",
  },
  {
    id: "atendimento",
    title: "Atendimento próximo e consultivo",
    text: "Diagnóstico e proposta em linguagem direta, com acompanhamento de quem entende o contexto de Cabo Frio e da Região dos Lagos.",
  },
];

export const projects = [
  {
    id: "brigadeirice",
    kind: "website",
    name: "Brigadeirice",
    url: "https://brigadeirice.vercel.app/",
    image: "/portfolio/brigadeirice.webp",
    width: 1100,
    height: 688,
    alt: "Página da Brigadeirice com o título Brigadeirice e a chamada de brigadeiros gourmet.",
    summary:
      "Landing page da Brigadeirice, doces gourmet. A página pública mostra os sabores, a quantidade escolhida e o envio do pedido pelo WhatsApp.",
    details: [
      "Apresentação da marca e da linha de doces",
      "Sabores clássicos e gourmet com quantidade",
      "Pedido encaminhado pelo WhatsApp",
    ],
  },
  {
    id: "pastel-da-casa",
    kind: "website",
    name: "Pastel da Casa",
    url: "https://cardapio-digital-xi-blue.vercel.app/",
    image: "/portfolio/pastel-da-casa.webp",
    width: 1100,
    height: 688,
    alt: "Cardápio digital do Pastel da Casa com o título Pastel Da Casa e a chamada de massa artesanal.",
    summary:
      "Cardápio digital do Pastel da Casa. A página lista pastéis salgados, especiais, doces e combos, com o preço publicado em cada item.",
    details: [
      "Cardápio organizado por tipo de pastel",
      "Descrição e preço de cada item",
      "Combos e promoções na mesma página",
    ],
  },
  {
    id: "essencia-perfumada",
    kind: "website",
    name: "Essência Perfumada",
    url: "https://loja-perfumes-red.vercel.app/",
    image: "/portfolio/essencia-perfumada.webp",
    width: 1100,
    height: 688,
    alt: "Página da Essência Perfumada com o título Descubra Essência e a chamada de perfumes nacionais e internacionais.",
    summary:
      "Landing page da Essência Perfumada, loja de perfumes nacionais e internacionais. A página apresenta a vitrine, a história da loja e o contato.",
    details: [
      "Abertura com a proposta da loja",
      "Seleção de fragrâncias e diferenciais",
      "Bloco de contato no fim da página",
    ],
  },
  {
    id: "sabor-e-arte",
    kind: "website",
    name: "Sabor & Arte",
    url: "https://restaurante-landing-page-ten.vercel.app/",
    image: "/portfolio/sabor-e-arte.webp",
    width: 1100,
    height: 688,
    alt: "Página do restaurante Sabor & Arte com a frase de boas-vindas e a chamada de experiência gastronômica.",
    summary:
      "Landing page do restaurante Sabor & Arte. A página reúne a história, as promoções, o menu e o contato do estabelecimento.",
    details: [
      "Apresentação do restaurante",
      "Promoções e menu na mesma página",
      "Galeria e dados de contato",
    ],
  },
  {
    id: "premium-imoveis",
    kind: "website",
    name: "Premium Imóveis",
    url: "https://imobiliaria-mauve.vercel.app/",
    image: "/portfolio/premium-imoveis.webp",
    width: 1100,
    height: 688,
    alt: "Página da Premium Imóveis com o título Encontre o Imóvel dos Seus Sonhos.",
    summary:
      "Landing page de imobiliária. A página mostra imóveis em destaque, os diferenciais do atendimento e um bloco de contato.",
    details: [
      "Abertura com a proposta da imobiliária",
      "Imóveis em destaque com valor publicado",
      "Contato no fim da página",
    ],
  },
  {
    id: "nexus-erp",
    kind: "app",
    name: "Nexus ERP/CRM",
    url: "https://nexus-erp-theta-teal.vercel.app/",
    image: "/portfolio/nexus-erp.webp",
    width: 1100,
    height: 688,
    alt: "Tela de entrada do Nexus ERP, com login da conta e cadastro para empresa ou pessoa física.",
    summary:
      "Demonstração pública do Nexus ERP. A página de acesso mostra a entrada na conta e o cadastro da empresa para MEI, autônomo ou PME prestadora de serviços.",
    details: [
      "Acesso à conta do sistema",
      "Cadastro de empresa ou pessoa física",
      "Apresentação para pequena empresa prestadora de serviços",
    ],
  },
  {
    id: "nexus-food",
    kind: "app",
    name: "Nexus Food",
    url: "https://nexus-food.vercel.app/",
    image: "/portfolio/nexus-food.webp",
    width: 1100,
    height: 688,
    alt: "Tela de acesso do Nexus Food, com a conta de demonstração da Hamburgueria Nexus e o botão para entrar na demonstração.",
    summary:
      "Demonstração pública de gestão para restaurante. A aplicação apresenta uma hamburgueria de exemplo com ingredientes, fichas, estoque e financeiro.",
    details: [
      "Acesso à gestão do restaurante",
      "Conta de demonstração com dados de exemplo",
      "Ingredientes, fichas técnicas, estoque e financeiro",
    ],
  },
];

export const processSteps = [
  {
    title: "Diagnóstico do negócio",
    text: "A conversa cobre oferta, rotina e o problema que o projeto precisa resolver. Site, sistema ou automação só entram depois disso.",
  },
  {
    title: "Planejamento e proposta",
    text: "Escopo, prazo e valor são registrados antes do desenvolvimento. Os preços deste site são referências e a proposta confirma o número.",
  },
  {
    title: "Desenvolvimento e validação",
    text: "A construção segue o que foi combinado, com revisões para ajustar texto, fluxo e tela enquanto ainda dá tempo de corrigir.",
  },
  {
    title: "Publicação e acompanhamento",
    text: "O que foi aprovado é publicado, com orientação de uso. A manutenção mensal continua apenas quando esse plano é contratado.",
  },
];

export const faqs = [
  {
    question: "Quanto custa um site?",
    answer:
      "Uma landing page começa em R$ 997, um site institucional em R$ 1.890 e uma loja virtual em R$ 2.990. Esses são valores iniciais sugeridos. O número final depende das páginas, das integrações e do conteúdo, e precisa ser confirmado na proposta.",
  },
  {
    question: "Quanto tempo leva o desenvolvimento?",
    answer:
      "O prazo varia com o escopo. Uma landing page enxuta costuma ficar pronta antes de uma loja ou de um sistema. Não há um prazo único publicado porque ele é definido por escrito depois do diagnóstico.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Os layouts são desenhados para celular, tablet e computador. A revisão no celular faz parte da validação, porque é dali que muitos clientes chamam a empresa.",
  },
  {
    question: "Posso solicitar funcionalidades personalizadas?",
    answer:
      "Pode. Formulário específico, área restrita, catálogo, integração ou regra de negócio entram na conversa de diagnóstico. O que for viável volta descrito na proposta, com prazo e valor próprios.",
  },
  {
    question: "A Evolutiva Tech oferece manutenção?",
    answer:
      "Sim. O suporte e a manutenção começam em R$ 197 por mês. O contrato diz o que cabe na mensalidade. Correção prevista fica dentro do plano; funcionalidade nova é orçada à parte.",
  },
  {
    question: "Posso integrar meu site ao WhatsApp?",
    answer:
      "Pode. Dá para colocar o contato em evidência e, quando fizer sentido, desenhar uma automação de atendimento a partir de R$ 790. O fluxo usa os caminhos oficiais disponíveis para a conta e respeita as regras do WhatsApp.",
  },
];

export const nav = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/criacao-de-sites", label: "Sites" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

const servicePages = {
  "criacao-de-sites": {
    path: "/criacao-de-sites",
    kind: "service",
    serviceId: "site-institucional",
    navLabel: "Criação de sites",
    title: "Criação de sites em Cabo Frio | Evolutiva Tech",
    description:
      "Sites institucionais e lojas para empresas de Cabo Frio e da Região dos Lagos, com layout responsivo e SEO on-page. Institucional a partir de R$ 1.890.",
    h1: "Criação de sites em Cabo Frio e na Região dos Lagos",
    lead: "A Evolutiva Tech cria sites para empresas que precisam explicar o que fazem, aparecer na busca e receber contato pelo celular — sem tratar o site como um cartão genérico.",
    cta: { href: "/contato?servico=site-institucional", label: "Solicitar orçamento do site" },
    sections: [
      {
        heading: "Site institucional para apresentar a empresa",
        paragraphs: [
          "Um site institucional organiza quem você é, o que oferece e como o cliente fala com você. Ele continua no ar quando a rede social oscila e dá um endereço próprio para indicar no WhatsApp, no cartão e no Google.",
          "O valor inicial sugerido é R$ 1.890. Entram as páginas combinadas, o formulário, o layout responsivo e o SEO on-page. Texto, fotos, páginas extras e integrações mudam o escopo e, por isso, o valor é confirmado na proposta.",
        ],
        items: [
          "Páginas de apresentação, serviços e contato",
          "Formulário com destino de envio configurado",
          "Leitura confortável no celular",
          "Título, descrição e conteúdo indexável",
        ],
      },
      {
        heading: "Loja virtual quando o produto precisa de vitrine",
        paragraphs: [
          "Para quem vende um catálogo, a loja virtual começa em R$ 2.990. O projeto cobre vitrine, página de produto e um caminho de pedido. Pagamento, frete e estoque automático só entram se o diagnóstico mostrar que fazem parte da operação.",
          "Empresas de Cabo Frio e da Região dos Lagos usam muito o WhatsApp para fechar venda. A loja pode conviver com esse hábito: o pedido fica organizado e o contato continua humano.",
        ],
      },
      {
        heading: "O que a proposta deixa explícito",
        paragraphs: [
          "Antes do desenvolvimento, a proposta lista páginas, responsabilidades de conteúdo e o que fica de fora. Assim o prazo deixa de ser uma estimativa solta. Uma landing page é mais curta que uma loja; um sistema é outro projeto.",
          "Atendemos negócios da região e também projetos à distância. O contexto local importa: sazonalidade, atendimento por mensagem e rotina de quem está no balcão.",
        ],
      },
    ],
    related: ["/landing-pages", "/portfolio", "/automacoes", "/contato"],
  },
  "landing-pages": {
    path: "/landing-pages",
    kind: "service",
    serviceId: "landing-page",
    navLabel: "Landing pages",
    title: "Landing pages em Cabo Frio | Evolutiva Tech",
    description:
      "Landing pages para campanhas de empresas em Cabo Frio e na Região dos Lagos. Página objetiva, com contato e SEO on-page. A partir de R$ 997.",
    h1: "Landing pages para campanhas e captação de clientes",
    lead: "Uma landing page existe para uma oferta. Ela não substitui o site inteiro da empresa: conduz a visita até um pedido de contato, um cadastro ou uma conversa.",
    cta: { href: "/contato?servico=landing-page", label: "Solicitar orçamento da landing page" },
    sections: [
      {
        heading: "Quando uma landing page é o projeto certo",
        paragraphs: [
          "Ela funciona bem para um serviço em destaque, uma temporada, um lançamento ou um anúncio. O visitante encontra a oferta, as condições principais e um jeito claro de chamar a empresa.",
          "O valor inicial sugerido é R$ 997. Esse patamar considera uma página objetiva, responsiva, com contato e SEO on-page. Novos blocos, várias versões da mesma campanha ou integração com CRM alteram a proposta.",
        ],
        items: [
          "Uma oferta principal, sem menu competindo com o pedido",
          "Prova concreta do que está incluído, sem depoimento inventado",
          "Formulário ou caminho para o WhatsApp",
          "Carregamento enxuto no celular",
        ],
      },
      {
        heading: "Diferença para o site institucional",
        paragraphs: [
          "O site institucional apresenta a empresa por inteiro e costuma começar em R$ 1.890. A landing page trabalha uma campanha. Muitos negócios da Região dos Lagos usam as duas coisas: o site como base e a landing page como porta de uma ação específica.",
          "A Evolutiva Tech não inclui gestão de anúncio nesse valor. A página pode receber tráfego de campanha, busca ou indicação, mas a mídia é combinada à parte, se existir.",
        ],
      },
    ],
    related: ["/criacao-de-sites", "/automacoes", "/contato"],
  },
  "sistemas-erp": {
    path: "/sistemas-erp",
    kind: "service",
    serviceId: "erp",
    navLabel: "Sistemas ERP",
    title: "Sistema ERP personalizado | Evolutiva Tech",
    description:
      "ERP personalizado para organizar a rotina da empresa. O escopo é definido no diagnóstico. Veja a demonstração pública do Nexus ERP.",
    h1: "Sistemas ERP personalizados para a operação da empresa",
    lead: "Um ERP personalizado reúne a rotina que hoje está em caderno, planilha e conversa solta. O desenho começa pelo que a empresa realmente controla — não por uma lista genérica de módulos.",
    cta: { href: "/contato?servico=erp", label: "Conversar sobre o ERP" },
    sections: [
      {
        heading: "Sob orçamento, depois do diagnóstico",
        paragraphs: [
          "ERP personalizado é sob orçamento. Financeiro, estoque, pedidos, compras ou emissão de nota mudam o tamanho do sistema. Por isso não há um preço inicial publicado: a proposta vem depois de entender a operação.",
          "Empresas em Cabo Frio e na Região dos Lagos muitas vezes crescem com sazonalidade e uma equipe enxuta. O sistema precisa ser usável por essa equipe, não apenas completo numa apresentação.",
        ],
      },
      {
        heading: "A demonstração pública do Nexus ERP",
        paragraphs: [
          "O Nexus ERP/CRM está no ar como demonstração pública da Evolutiva Tech. A página de acesso apresenta a entrada na conta e o cadastro da empresa para MEI, autônomo ou PME prestadora de serviços.",
          "Essa demonstração mostra o produto no endereço público. Ela não é um caso de cliente e não traz faturamento, economia ou número de usuários. O ERP de cada empresa continua sendo definido no diagnóstico.",
        ],
      },
    ],
    related: ["/sistemas-crm", "/portfolio", "/automacoes", "/contato"],
  },
  "sistemas-crm": {
    path: "/sistemas-crm",
    kind: "service",
    serviceId: "crm",
    navLabel: "Sistemas CRM",
    title: "Sistema CRM personalizado | Evolutiva Tech",
    description:
      "CRM personalizado para histórico de clientes, orçamentos e etapas de venda. Projetos a partir de R$ 3.990, com escopo fechado na proposta.",
    h1: "Sistemas CRM para organizar vendas e relacionamento",
    lead: "O CRM guarda o histórico que não pode depender da memória de uma pessoa: quem pediu orçamento, em que etapa a conversa parou e qual é o próximo contato.",
    cta: { href: "/contato?servico=crm", label: "Solicitar orçamento do CRM" },
    sections: [
      {
        heading: "O que um primeiro CRM costuma cobrir",
        paragraphs: [
          "O valor inicial sugerido é R$ 3.990. Nesse patamar, o projeto personalizado parte de cadastro, pipeline e orçamentos. Metas, comissões, integração com WhatsApp ou ligação com o financeiro entram se forem necessárias e voltam precificadas.",
          "O Nexus ERP/CRM está publicado como demonstração e serve de referência de produto. O funil de cada empresa pode ter outras etapas e entra no escopo da proposta.",
        ],
        items: [
          "Clientes e contatos no mesmo cadastro",
          "Etapas de venda visíveis para a equipe",
          "Orçamentos ligados à oportunidade",
          "Escopo adicional descrito na proposta",
        ],
      },
      {
        heading: "CRM sozinho ou dentro da gestão",
        paragraphs: [
          "Há empresa que precisa só do comercial. Há empresa em que o orçamento aprovado já vira conta a receber. No segundo caso, o caminho pode ser um ERP com CRM, sob orçamento, em vez de dois sistemas que não se falam.",
        ],
      },
    ],
    related: ["/sistemas-erp", "/automacoes", "/portfolio", "/contato"],
  },
  automacoes: {
    path: "/automacoes",
    kind: "service",
    serviceId: "automacao-whatsapp",
    navLabel: "Automações",
    title: "Automação para empresas | Evolutiva Tech",
    description:
      "Automações de processos e WhatsApp para empresas de Cabo Frio e da Região dos Lagos. Fluxos a partir de R$ 790, dentro das regras da plataforma.",
    h1: "Automações para empresas que querem ganhar tempo",
    lead: "Automação aqui é tirar repetição do caminho: a mesma pergunta no WhatsApp, o mesmo dado copiado para a planilha, o mesmo aviso que alguém esquece de mandar.",
    cta: { href: "/contato?servico=automacao-whatsapp", label: "Solicitar orçamento da automação" },
    sections: [
      {
        heading: "WhatsApp com fluxo, não com improviso",
        paragraphs: [
          "A automação de WhatsApp começa em R$ 790. O desenho pode receber o primeiro contato, separar assuntos e encaminhar para quem responde. A ligação com o site entra quando o formulário precisa avisar a equipe.",
          "O trabalho usa os caminhos oficiais disponíveis para a conta da empresa e as regras atuais da plataforma. Não há promessa de um robô fora dessas regras, porque isso coloca o número em risco.",
        ],
      },
      {
        heading: "Processos além da mensagem",
        paragraphs: [
          "Também automatizamos rotinas entre formulário, planilha e sistema, quando o diagnóstico mostra retrabalho real. Cada fluxo é descrito na proposta: de onde o dado sai, para onde vai e o que acontece se a ferramenta externa falhar.",
          "Negócios da Região dos Lagos atendem muito por mensagem, sobretudo no comércio e no turismo. A automação organiza esse atendimento; ela não substitui a decisão de quem fecha o serviço.",
        ],
      },
    ],
    related: ["/landing-pages", "/sistemas-crm", "/criacao-de-sites", "/contato"],
  },
};

export const pages = {
  ...servicePages,
  portfolio: {
    path: "/portfolio",
    kind: "portfolio",
    navLabel: "Portfólio",
    title: "Portfólio de sites e sistemas | Evolutiva Tech",
    description:
      "Portfólio da Evolutiva Tech com a Brigadeirice, cardápios, lojas e as demonstrações públicas do Nexus ERP e do Nexus Food.",
    h1: "Projetos em demonstração pública",
    lead: "Sites e sistemas publicados pela Evolutiva Tech. As descrições acompanham o que a página pública mostra, sem métrica de cliente ou resultado comercial atribuído.",
  },
  contato: {
    path: "/contato",
    kind: "simple",
    navLabel: "Contato",
    title: "Solicitar orçamento | Evolutiva Tech",
    description:
      "Envie um pedido de orçamento para a Evolutiva Tech. Informe nome, empresa, WhatsApp, e-mail, serviço e uma descrição do projeto.",
    h1: "Solicite um orçamento",
    lead: "Conte o que a empresa precisa. O retorno usa o WhatsApp ou o e-mail que você informar, depois que os dados chegam ao destino configurado do formulário.",
  },
  "politica-de-privacidade": {
    path: "/politica-de-privacidade",
    kind: "simple",
    navLabel: "Política de privacidade",
    title: "Política de privacidade | Evolutiva Tech",
    description:
      "Saiba quais dados o formulário da Evolutiva Tech coleta, por que eles são usados e como solicitar correção ou exclusão.",
    h1: "Política de privacidade",
    lead: "Esta página explica o tratamento dos dados enviados pelo formulário de orçamento da Evolutiva Tech, em linha com a Lei Geral de Proteção de Dados.",
  },
  "404": {
    path: "/404",
    kind: "notfound",
    navLabel: "Página não encontrada",
    title: "Página não encontrada | Evolutiva Tech",
    description: "O endereço acessado não faz parte do site da Evolutiva Tech.",
    h1: "Página não encontrada",
    robots: "noindex, follow",
  },
};

export const homeSeo = {
  path: "/",
  kind: "home",
  title: "Evolutiva Tech | Sites e sistemas em Cabo Frio",
  description:
    "A Evolutiva Tech cria sites, sistemas e automações para empresas de Cabo Frio e da Região dos Lagos. Veja serviços, projetos reais e valores iniciais.",
  h1: "Transformamos tecnologia em crescimento para o seu negócio.",
};

export const indexablePaths = ["/", ...Object.values(pages).filter((page) => page.kind !== "notfound").map((page) => page.path)];

export function getService(id) {
  return services.find((service) => service.id === id);
}

export function getPage(path) {
  return Object.values(pages).find((page) => page.path === path);
}
