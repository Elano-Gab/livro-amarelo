/* Livro Amarelo — dados (parte 1). Conteúdo do livro resumido com fidelidade; campos ctx/ana/why(g) são contexto do guia. */
const PARTS = [
  { n:1, r:"I", name:"Estado Novo", ch:[1,2,3,4],
    desc:"As reformas mais fundamentais, que juntas reorganizam o regime político: contas públicas, segurança, pacto federativo e os incentivos da política local.",
    ref:"Nome do regime de Getúlio Vargas (1937–1945), ditatorial e centralizador, que também industrializou e modernizou o Estado. O livro diz não querer imitar suas soluções, mas fazer algo comparável “dentro dos limites da democracia representativa”." },
  { n:2, r:"II", name:"Reformas de Base", ch:[5,6,7,8,9],
    desc:"Uma onda de transformações modernizantes na economia e nos serviços públicos: produtividade, infraestrutura, saúde, cultura e educação.",
    ref:"Nome do programa do presidente João Goulart (1961–1964), interrompido pelo golpe de 1964. O livro reaproveita o nome para outra agenda — “não os fracassados projetos de João Goulart”." },
  { n:3, r:"III", name:"País do Futuro", ch:[10,11,12,13,14],
    desc:"Os moonshots: projetos de virada de chave em desenvolvimento regional, minerais críticos, agro e IA, geopolítica e habitação, rumo a uma “Civilização Tropical”.",
    ref:"Referência ao livro “Brasil, um país do futuro” (1941), do austríaco Stefan Zweig. A expressão virou bordão — muitas vezes irônico — sobre um futuro que nunca chega; a Missão promete realizá-lo." }
];

const TEXTS = [
  { id:"prefacio", label:"Prefácio", title:"O futuro é glorioso", sub:"Uma mensagem de Renan Santos", pages:"3–4",
    blurb:"Por que “o futuro é glorioso” e o que o autor chama de “problema de elites”.",
    points:[
      ["Um potencial represado","“O futuro é glorioso” é o mote da pré-campanha. Não seria ufanismo: o país tem porte continental, natureza exuberante, mais de 200 milhões de habitantes, vizinhos que o veem como líder natural e é a nação mais miscigenada do mundo."],
      ["Um problema de elites","A vocação do país não é levada a sério. De um lado, um partido que governa pela quinta vez com “promessas brejeiras” (picanha e cerveja) e migalhas sociais; de outro, um “vácuo” no lugar da direita. O texto critica duramente o bolsonarismo e acusa Jair Bolsonaro de ter traído a direita ao destruir a Lava Jato e fortalecer o centrão."],
      ["O retrato de um país que “não deu certo”","Uma crônica do primeiro fascículo, sobre a festa no cruzeiro de Neymar, vira retrato de referências culturais de um país com informalidade, baixa produtividade e 20% da população sob o jugo do crime. A profecia de Stefan Zweig sobre o “país do futuro” teria malogrado."],
      ["Uma ruptura geracional","O Brasil “não deu certo até agora”: a história segue aberta. O apoio entre eleitores de 16 a 24 anos refletiria o julgamento de uma geração sobre todas as elites econômicas, políticas e culturais da Nova República — não só PT e Bolsonaro."],
      ["Esperança com realismo","O livro se apresenta como estudo sério, com diagnósticos e propostas; sua mensagem implícita seria de esperança e realismo para quem está “cansado de acreditar em miragens”."]
    ],
    quote:"Se o Brasil tivesse sido governado de forma apropriada, à altura daquilo que ele é vocacionado para ser, nem sequer o Partido Missão existiria.",
    ctx:[
      ["1941","Stefan Zweig e o “país do futuro”","O escritor austríaco, exilado do nazismo, publicou “Brasil, um país do futuro” em 1941, impressionado com a convivência entre povos e culturas. Morreu em Petrópolis em 1942. A expressão virou bordão sobre um futuro que não chega — e dá nome à Parte III do livro."],
      ["1985–hoje","Nova República","Nome do período iniciado com o fim do regime militar, em 1985, e consolidado pela Constituição de 1988. O livro propõe “sepultar a Nova República”."],
      ["2014–2021","Lava Jato","Operação iniciada em 2014 que investigou corrupção na Petrobras e em grandes empreiteiras, com centenas de condenações. Perdeu força a partir de 2019, com a divulgação de mensagens entre juiz e procuradores e decisões do STF que anularam processos; a força-tarefa foi encerrada em 2021."]
    ] },
  { id:"introducao", label:"Introdução", title:"Um livro como plano de governo", sub:"O que é o Livro Amarelo — e como ler esta edição", pages:"5–7",
    blurb:"Como o plano se organiza em três partes e de onde vêm as ideias.",
    points:[
      ["Uma promessa de 2023","A Missão diz ser o primeiro partido brasileiro a entregar um livro como plano de governo, promessa feita em 2023, no 8º Congresso do MBL. “Verba volant, scripta manent”: as palavras voam, a escrita permanece."],
      ["O que é esta edição","Resumo de uma obra de mais de 500 páginas: reúne as seções de abertura de cada capítulo — o problema e as principais propostas. Sintetiza seis fascículos de pesquisa e incorpora capítulos novos."],
      ["Enquadramento ideológico","Mantém pilares liberais na economia — contenção de gastos, reforma trabalhista, redução de supersalários, reforma administrativa, austeridade —, mas rejeita a versão “vulgarizada” de privatizar tudo e as teorias da conspiração do lado conservador."],
      ["Parte I · Estado Novo","Reformas que reorganizam o regime político: ajuste fiscal, segurança, pacto federativo e responsabilidade gerencial. A ideia é superar, “dessa vez pela via democrática”, os defeitos legados desde o Estado Novo varguista."],
      ["Parte II · Reformas de Base","Transformações modernizantes na economia e nos serviços públicos, guiadas por três princípios: tecnologia de ponta, menos entraves à iniciativa privada e valorização das vantagens competitivas nacionais."],
      ["Parte III · País do Futuro","Os moonshots, “verdadeiras viradas de chave”: Nordeste e ZEEs, terras raras, agro e IA, política externa e desfavelização — rumo a uma “Civilização Tropical”, união entre tecnologia e natureza."],
      ["Quem contribuiu","Mais de 200 voluntários dos fascículos, mais de 50 pesquisadores do CDPP (caderno “Caminhos do Desenvolvimento”), colunistas da Revista Valete e participantes do aplicativo Valete+."]
    ],
    quote:"Verba volant, scripta manent: as palavras voam, mas a escrita permanece.",
    ctx:[
      ["1937–1945","Estado Novo","Regime ditatorial de Getúlio Vargas, instaurado pelo golpe de 10 de novembro de 1937, com Congresso fechado, partidos extintos e censura. Ao mesmo tempo, centralizou o Estado e modernizou a economia: criou o DASP (serviço público por concurso), a CLT (1943), a Companhia Siderúrgica Nacional e a Vale do Rio Doce."],
      ["1961–1964","Reformas de Base","Programa de João Goulart: reformas agrária, urbana, bancária, tributária, eleitoral (voto dos analfabetos) e universitária. Anunciadas no Comício da Central (13 de março de 1964), acirraram a crise que terminou no golpe militar de 31 de março/1º de abril."],
      ["2014","MBL","O Movimento Brasil Livre surgiu em 2014 e ganhou projeção nas manifestações pelo impeachment de Dilma Rousseff (2015–2016). A Missão nasce desse movimento; Renan Santos e Kim Kataguiri estão entre seus fundadores."]
    ] },
  { id:"posfacio", label:"Posfácio", title:"O Futuro é Glorioso", sub:"Um apelo à ação", pages:"50",
    blurb:"O balanço final do livro e o chamado aos leitores.",
    points:[
      ["Um planejamento, não um slogan","O livro se apresenta como “o único programa partidário consistente e original” do país: um ideário com início, meio, fim e condições de aplicação. Nada inexequível, mas exigente em imaginação política e coragem."],
      ["Fruto de um trabalho longo","Construído em lives, dossiês no Valete+ e artigos na Revista Valete, com ideias de colaboradores como Orlando Lima e João Carvalho. As propostas seriam ajustadas gradualmente no confronto com a realidade de governar."],
      ["Crítica aos concorrentes","PT e bolsonarismo não teriam projeto de Brasil: o partido de Lula, cinco vezes no governo, não transformou o país; Bolsonaro terminou o governo “de forma melancólica” e encara condenação judicial."],
      ["A jornada continua","Não há nova edição anunciada, mas haverá publicações para detalhar propostas, responder objeções e levar o plano aos estados — já há um Livro Amarelo de Santa Catarina em curso."],
      ["O apelo","A candidatura seria a de menos recursos; o texto convoca sobretudo os jovens e termina com “Junte-se à Missão”."]
    ],
    quote:"Devemos ter esperança. Felizmente, não é a esperança de um tolo.",
    ctx:[] }
];

const CHAPTERS = [
/* ================= I ================= */
{ n:1, r:"I", part:1, theme:"Ajuste fiscal", title:"Um Remédio Amargo", sub:"O ajuste fiscal urgente para desatolar o Estado brasileiro", pages:"9–10",
  why:{g:0, t:"O título assume o custo: a PEC de Transição será um “remédio amargo”, como o que a Argentina escolheu ao eleger Javier Milei — necessário para encerrar a “década perdida” iniciada em 2014."},
  one:"Aprovar, já na transição de governo, uma PEC que desindexa benefícios do salário mínimo, desvincula os pisos de saúde e educação, revê o abono e corta isenções — abrindo o espaço fiscal de que todo o resto do plano depende.",
  ps:[["R$ 8,64 tri","dívida pública federal em 2025 — alta de 18% em um ano"],["80% → 100%","do PIB: trajetória da dívida bruta até 2030 sem reformas (IFI)"],["R$ 250 bi","tamanho do ajuste fiscal necessário, segundo Mansueto de Almeida"]],
  as:[["R$ 1,1 tri","economia projetada pela PEC do Equilíbrio Fiscal até 2031"],["Fim dos supersalários","reforma do funcionalismo público já na PEC da Transição"]],
  prob:[
    ["Sem dinheiro para investir","A meta da Missão é colocar o Brasil entre as cinco maiores potências em 30 anos, o que exige capacidade de investir em infraestrutura, tecnologia, desfavelização e projeção internacional. O risco mais imediato é o desequilíbrio das contas públicas, problema crônico desde antes do Plano Real."],
    ["Ajuste pela receita, não pela despesa","Depois do Plano Real, o ajuste veio sobretudo pelo aumento da carga tributária — modelo que secou o investimento e não sustentou gastos crescendo em média 6% ao ano. O resultado, segundo o livro, foi a crise do segundo governo Dilma."],
    ["Teto rompido, arcabouço frágil","O Teto de Gastos (Temer) congelou a despesa em termos reais, mas foi violado no governo Bolsonaro e rompido com a PEC da Transição de 2022. O Novo Arcabouço Fiscal limita a despesa total a 2,5% acima da inflação, enquanto Previdência e Assistência crescem perto de 6% ao ano."],
    ["Números que pioram","Déficit nominal de R$ 1,062 tri (Banco Central); dívida federal de R$ 8,635 tri em 2025 (+18%); dívida bruta de 80,4% do PIB, com projeção de 100% em 2030 (IFI). O gasto federal sem juros cresceu 16% a 17% reais em 2023–2026, e só cerca de 10% dele é discricionário. Sem mudanças, o déficit primário pode chegar a ~3% do PIB até 2036."],
    ["O tamanho da conta","O ajuste necessário é da ordem de R$ 250 bi por ano (Mansueto de Almeida). Qualquer governo a partir de 2027 terá de desindexar e desvincular despesas e reformar a Previdência."]
  ],
  quote:"Mas o diagnóstico dos economistas sérios é unânime: antes disso, o Brasil vai quebrar.",
  pvis:[{type:"bars", t:"Quanto a despesa pode crescer por ano, acima da inflação", items:[["Limite do Novo Arcabouço Fiscal",2.5,"2,5%","muted"],["Gastos com Previdência e Assistência",6,"≈ 6%","hi"]], max:7, src:"Números citados no capítulo I.", gnote:"Quando a despesa obrigatória cresce mais rápido que o limite total, sobra cada vez menos para investimento."}],
  groups:[
    { t:"PEC de Transição", d:"O primeiro ato do governo, encaminhado antes mesmo da posse — como a PEC que Lula aprovou em 2022, mas no sentido oposto. A base é a “PEC do Equilíbrio Fiscal”, protocolada por Kim Kataguiri em 2024.",
      props:[
        {id:"c1-desindexacao", t:"Desindexar benefícios do salário mínimo", d:"Benefícios previdenciários e assistenciais, incluindo o BPC, passam a ser corrigidos apenas pela inflação. Economia estimada: R$ 455 bi em 2027–2031."},
        {id:"c1-desvinculacao", t:"Desvincular os pisos de saúde e educação", d:"Os gastos mínimos com saúde, educação e Fundeb deixam de ser atrelados à receita. Economia estimada: R$ 306 bi em 2027–2031."},
        {id:"c1-abono", t:"Rever o abono salarial", d:"Economia estimada: R$ 108 bi em 2027–2031."},
        {id:"c1-renuncias", t:"Reduzir renúncias fiscais (gastos tributários)", d:"Economia estimada: R$ 104 bi em 2027–2031."}
      ],
      vis:[{type:"bars", t:"PEC do Equilíbrio Fiscal — economia projetada por medida (R$ bi, 2027–2031)", items:[["Desindexação previdenciária e BPC",455,"R$ 455 bi · 91/ano","pos"],["Desvinculação saúde / educação / Fundeb",306,"R$ 306 bi · 61/ano","pos"],["Revisão do abono salarial",108,"R$ 108 bi · 22/ano","pos"],["Redução de isenções fiscais",104,"R$ 104 bi · 38/ano","pos"]], max:560, src:"Fonte do gráfico original: PEC do Equilíbrio Fiscal (Dep. Kim Kataguiri, 2024). Total: R$ 973 bi — média de R$ 212 bi ao ano.", gnote:"Valores conforme o gráfico do livro. O texto do capítulo cita R$ 1,1 tri até 2031; as quatro medidas da tabela somam R$ 973 bi."}]
    },
    { t:"Medidas do caderno do CDPP", d:"Propostas selecionadas do caderno “Caminhos do Desenvolvimento: Estabilizar, Crescer, Incluir”, do CDPP (mais de 50 pesquisadores), adaptadas pela Missão e incluídas na mesma PEC, que substituiria o arcabouço fiscal por “um novo modelo mais inteligente”. A lista também repete a redução das isenções fiscais.",
      props:[
        {id:"c1-superavit", t:"Racionalização do superávit financeiro", nd:1},
        {id:"c1-supersalarios", t:"Reforma do funcionalismo e fim dos supersalários", nd:1},
        {id:"c1-emendas", t:"Mudanças nas emendas parlamentares", nd:1},
        {id:"c1-lc", t:"Nova lei complementar das finanças públicas", nd:1}
      ] }
  ],
  outro:"Só com equilíbrio fiscal, diz o livro, será possível cumprir as demais bandeiras: destruir o crime organizado, investir em infraestrutura e tecnologia, desfavelizar o território e a cultura e levar o Brasil ao grupo das cinco nações mais importantes do mundo.",
  cmp:[
    ["Correção de aposentadorias no piso e do BPC","Seguem o salário mínimo, que tem reajuste acima da inflação","Só a inflação"],
    ["Saúde e educação","Pisos mínimos atrelados a percentuais da receita","Pisos desvinculados da receita"],
    ["Regra fiscal","Novo Arcabouço Fiscal (2023): despesa cresce até 2,5% real ao ano","Novo modelo, definido pela PEC de Transição"],
    ["Salários no topo do funcionalismo","Verbas classificadas como indenizatórias ficam fora do teto e permitem “supersalários”","Fim dos supersalários"]
  ],
  ctx:[
    ["1994","Plano Real","Programa de estabilização do governo Itamar Franco, com Fernando Henrique Cardoso na Fazenda. Criou a URV como ponte para a nova moeda e encerrou décadas de hiperinflação. O livro o usa como marco: o desequilíbrio fiscal vem “desde antes” dele, e o ajuste posterior veio sobretudo por aumento de impostos."],
    ["2016","Teto de Gastos (EC 95)","Aprovado no governo Temer, limitou a despesa primária federal ao valor do ano anterior corrigido pelo IPCA, por até 20 anos. Sofreu sucessivas exceções e foi substituído em 2023."],
    ["2022–2023","PEC da Transição e Novo Arcabouço","Aprovada antes da posse de Lula, a PEC da Transição (EC 126/2022) autorizou gastos acima do teto em 2023, sobretudo para o Bolsa Família. Em 2023, a LC 200 criou o Novo Arcabouço Fiscal: a despesa cresce 70% do aumento da receita, entre 0,6% e 2,5% acima da inflação. A Missão quer usar o mesmo instrumento — uma PEC antes da posse — no sentido inverso."],
    ["2014–2016","A “década perdida”","A expressão nasceu para a estagnação latino-americana dos anos 1980. O livro a aplica ao período iniciado em 2014, quando o Brasil entrou em uma das piores recessões de sua história, com quedas do PIB em 2015 e 2016."],
    ["Conceito","Indexação e vinculação","Indexar é atrelar automaticamente uma despesa a um índice — aqui, o salário mínimo. Vincular é obrigar o governo a gastar um percentual fixo da receita numa área. Ambas tornam a despesa “obrigatória” e reduzem a margem de escolha do orçamento."]
  ],
  ana:[
    ["Argentina de Milei (2023–)","O próprio livro faz a comparação. Milei assumiu em dezembro de 2023 com cortes profundos de gastos e desvalorização cambial; a Argentina registrou superávit fiscal em 2024 e a inflação mensal caiu fortemente, com alta da pobreza no início do ajuste, que depois recuou. O ponto de partida era diferente: a Argentina tinha inflação acima de 200% ao ano; o problema brasileiro descrito no livro é a trajetória da dívida."]
  ],
  conn:[[4,"Mudanças nas emendas parlamentares são o centro da Lei de Responsabilidade Gerencial."],[5,"O mesmo caderno do CDPP inspira a agenda de produtividade."],[6,"O espaço fiscal aberto aqui financia a meta de 4% do PIB em infraestrutura."],[14,"A desfavelização custa R$ 50 a 85 bi líquidos por ano ao Tesouro."]]
},
/* ================= II ================= */
{ n:2, r:"II", part:1, theme:"Segurança pública", title:"Prendeu, Matou?", sub:"O Direito Penal do Inimigo e a guerra contra o crime", pages:"11–13",
  why:{g:0, t:"Segundo o livro, o lema não significa literalmente prender e matar criminosos, mas permitir que as forças de segurança tratem como inimigos quem ameaça os cidadãos e a soberania: capturar os líderes e, havendo perigo ou resistência, neutralizá-los “da maneira mais eficiente”."},
  one:"Declarar no primeiro dia uma Guerra ao Crime, adotar o Direito Penal do Inimigo contra as facções e usar Estado de Defesa, GLO e uma Lei Antifacção para retomar os territórios dominados.",
  ps:[["1 em 5","brasileiros vivem sob domínio territorial de facções criminosas"]],
  as:[["Dia 1","decretação da Guerra ao Crime"],["Confisco invertido","bens de faccionados presumidos ilícitos até prova em contrário"],["Superpresídios","lideranças isoladas em regiões remotas, no modelo CECOT salvadorenho"]],
  prob:[
    ["A um passo do narcoestado","Facções como PCC e CV evoluíram para conglomerados econômicos que funcionam como governos paralelos, com controle territorial, “tribunais do crime” e oferta ilegal de serviços como luz e gás, sobre cerca de 20% da população. O livro as descreve como um movimento secessionista: projetos de desmembramento do Estado."],
    ["Descompasso jurídico","O ordenamento moldado pelo garantismo penal pós-1988 seria inadequado a ameaças organizadas excepcionais. O direito penal convencional, pensado como último recurso, teria falhado diante da explosão de crimes desde os anos 1970."],
    ["Descompasso operacional","O crime virou empresa transnacional — criptoativos, drones, táticas de guerrilha urbana —, enquanto o Estado segue preso à burocracia, a polícias que não compartilham dados, a tribunais sobrecarregados e a um policiamento de confronto que negligencia asfixia financeira e inteligência."],
    ["Custos do domínio territorial","O Estado perde arrecadação, presta serviços básicos que nunca serão pagos, e os territórios faccionados irradiam crimes comuns para o entorno."]
  ],
  quote:"O problema, portanto, é duplo: nosso arcabouço legal protege o inimigo, e nosso aparato operacional não o alcança.",
  pvis:[{type:"split", t:"Um em cada cinco brasileiros vive sob domínio de facções", segs:[["Sob domínio territorial de facções",20,"ink","20%"],["Demais brasileiros",80,"muted","80%"]], src:"Número citado no capítulo II."}],
  groups:[
    { t:"O arcabouço: Guerra ao Crime e Direito Penal do Inimigo", d:"No primeiro dia de mandato, o governo declara a Guerra ao Crime e adota o Direito Penal do Inimigo (DPI), doutrina do jurista alemão Günther Jakobs que separa o direito penal do cidadão, com garantias plenas, do direito penal do inimigo, com medidas preventivas e penas mais duras para quem rejeita o pacto social ao integrar organizações criminosas de forma duradoura.",
      props:[
        {id:"c2-guerra", t:"Guerra ao Crime no primeiro dia", d:"Campanha contra o crime organizado desde o dia 1, com resultados “massivamente divulgados” e uma campanha nacional de mobilização popular contra as facções."},
        {id:"c2-estado-defesa", t:"Decretos sucessivos de Estado de Defesa", d:"Decretados nas áreas sob comando das facções para operações de retomada territorial, depois amparadas pela Lei Antifacção."},
        {id:"c2-complementares", t:"Penas maiores, ciclo das polícias e carreira policial", d:"Medidas complementares citadas na Introdução do livro: aumento de penas, mudança no ciclo das polícias e no ingresso na carreira policial. O resumo não as detalha."}
      ],
      vis:[{type:"flow", t:"A sequência proposta", steps:[["Dia 1","Declaração da Guerra ao Crime"],["Estado de Defesa","Decretado nas áreas dominadas"],["Retomada","Operações com GLO e intervenção federal"],["Lei Antifacção","Banimento, confisco e tribunais especiais"],["Cárcere","Líderes em superpresídios remotos"]]}]
    },
    { t:"Lei Antifacção", d:"Lei que ampararia as retomadas. O livro sustenta que é compatível com a Constituição de 1988: todos seguiriam sujeitos a processo legal, e a diferença estaria na conduta criminosa comprovada — afiliar-se a uma facção já seria crime, por atentar contra o Estado Democrático de Direito.",
      props:[
        {id:"c2-banimento", t:"Banimento judicial de organizações criminosas", d:"A polícia poderia pedir à Justiça o banimento de uma organização, mediante dossiês comprobatórios."},
        {id:"c2-simbolos", t:"Proibição de símbolos e de atuação coordenada", d:"Vedação aos símbolos e à atuação coordenada dos membros das organizações banidas."},
        {id:"c2-dissolucao", t:"Dissolução de entidades infiltradas", d:"Entidades públicas ou privadas infiltradas pelo crime organizado poderiam ser dissolvidas."},
        {id:"c2-direitos", t:"Retirada de direitos de faccionados", d:"Perda de direitos políticos e civis e restrição da liberdade de locomoção para quem for comprovadamente associado às facções classificadas."},
        {id:"c2-tribunais", t:"Tribunais especializados", d:"Competência concentrada em tribunais com magistrados escolhidos por critérios técnicos rigorosos e com proteção especial."},
        {id:"c2-confisco", t:"Confisco com ônus da prova invertido", d:"Bens de membros de facções seriam presumidos ilícitos até que se prove o contrário."}
      ] },
    { t:"Desenho processual", d:"Para garantir a aplicação das medidas diante da “resistência institucional esperada”:",
      props:[
        {id:"c2-recursos", t:"Recursos sem efeito suspensivo automático", d:"Recorrer não suspenderia automaticamente as medidas."},
        {id:"c2-prazos", t:"Prazos curtos e improrrogáveis", d:"30 dias na primeira instância e 60 dias nos tribunais."},
        {id:"c2-comissao", t:"Comissão Nacional de Classificação e GAECO colegiado", d:"Comissão de agências federais com poder administrativo imediato para classificar facções, e um Grupo de Atuação Especial de Combate ao Crime Organizado (GAECO) com estrutura colegiada no Ministério Público."},
        {id:"c2-agentes", t:"Proteção jurídica robusta aos agentes públicos", nd:1},
        {id:"c2-federalizacao", t:"Federalização dos casos de facções", d:"Todos os casos relacionados a facções criminosas passariam à esfera federal."},
        {id:"c2-intervencao", t:"Intervenção federal e GLO com força pesada", d:"Intervenção federal nos estados com controle territorial faccional e emprego das Forças Armadas via Garantia da Lei e da Ordem, com autorização para uso de força pesada em territórios classificados como dominados."}
      ] },
    { t:"Primeiro front: crime organizado",
      props:[
        {id:"c2-fronteiras", t:"Retomar portos, aeroportos e fronteiras secas", d:"Scanners tridimensionais, inteligência integrada e monitoramento aéreo, espacial e amazônico."},
        {id:"c2-asfixia", t:"Asfixia financeira das facções", d:"Apertar os mecanismos que cortam o “oxigênio econômico” do crime organizado."},
        {id:"c2-superpresidios", t:"Superpresídios no modelo CECOT", d:"Lideranças condenadas levadas a presídios de segurança máxima em regiões remotas, com blindagem eletromagnética e biometria contínua, para neutralizar o comando das facções a partir do cárcere."}
      ] },
    { t:"Segundo front: crime de rua",
      props:[
        {id:"c2-drones", t:"Drones, totens de denúncia e reconhecimento facial", d:"Patrulhamento autônomo e reconhecimento facial em tempo real, para transformar reação em prevenção."},
        {id:"c2-dados", t:"Dados genéticos e identificação facial", d:"Uso integrado para resolver crimes hediondos."},
        {id:"c2-penas", t:"Penas maiores para reincidência e roubo de eletrônicos", d:"Leis específicas com efeito dissuasivo sobre os crimes que mais atingem o cidadão comum."}
      ] }
  ],
  outro:"“Vencer a guerra contra o crime será nossa maior missão.” A retomada territorial é também pré-condição da desfavelização (capítulo XIV).",
  cmp:[
    ["Regime penal para faccionados","Mesmas garantias do processo penal comum","Direito Penal do Inimigo: medidas preventivas e penas mais duras"],
    ["Integrar uma facção","Já é crime (Lei 12.850/2013, pena de 3 a 8 anos), apurado caso a caso","Facção banida judicialmente; membros perdem direitos políticos, civis e de locomoção"],
    ["Confisco de bens","Confisco alargado após condenação por crimes com pena acima de 6 anos (art. 91-A do Código Penal)","Presunção de ilicitude de todos os bens de membros de facção"],
    ["Onde tramitam os casos","Em grande parte na Justiça estadual","Todos federalizados, em tribunais especializados"]
  ],
  ctx:[
    ["1985–2003","Direito Penal do Inimigo","Formulado por Günther Jakobs em 1985 e desenvolvido nas décadas seguintes, o conceito descreve um direito penal que trata certos infratores não como cidadãos, mas como fontes de perigo a neutralizar. É uma das teses mais controvertidas da doutrina penal: críticos, como Eugenio Raúl Zaffaroni, a consideram incompatível com o Estado de Direito; defensores a veem como resposta a ameaças excepcionais, como terrorismo e crime organizado."],
    ["1988","Garantismo penal","Corrente associada ao jurista italiano Luigi Ferrajoli (“Direito e Razão”, 1989), que prioriza limitar o poder punitivo por meio de garantias processuais. O livro identifica esse espírito na Constituição de 1988 e o aponta como obstáculo ao combate às facções."],
    ["Constituição, art. 136","Estado de Defesa","Medida excepcional decretada pelo presidente, ouvidos os Conselhos da República e de Defesa Nacional, em locais restritos e determinados, por até 30 dias prorrogáveis uma vez. Permite restringir direitos como reunião e sigilo de correspondência e comunicações, e precisa ser aprovada pelo Congresso por maioria absoluta. Nunca foi decretado desde 1988."],
    ["Constituição, art. 142","GLO","A Garantia da Lei e da Ordem é o emprego temporário das Forças Armadas em funções de polícia, em área e prazo delimitados, regulado pela LC 97/1999. Já foi usada em grandes eventos e em crises de segurança estaduais."],
    ["2018","Intervenção federal no Rio","Primeira intervenção federal desde 1988: de fevereiro a dezembro de 2018, a segurança pública fluminense ficou sob o comando de um general nomeado pelo governo Temer. É o precedente mais próximo da intervenção proposta pelo livro."],
    ["1979 · 1993","Origem do CV e do PCC","O Comando Vermelho nasceu no presídio da Ilha Grande (RJ), no fim dos anos 1970; o PCC foi fundado em 1993 na Casa de Custódia de Taubaté (SP). Ambos se organizaram dentro das prisões — daí a ênfase do livro em cortar o comando “a partir do cárcere”."]
  ],
  ana:[
    ["El Salvador e o CECOT","Sob Nayib Bukele, El Salvador vive desde março de 2022 um regime de exceção contra as gangues, com dezenas de milhares de presos. O CECOT, inaugurado em 2023, tem capacidade anunciada para 40 mil detentos. Os homicídios caíram a níveis historicamente baixos; organizações de direitos humanos denunciam prisões arbitrárias e mortes sob custódia. A escala é outra: o país tem cerca de 6 milhões de habitantes."],
    ["Itália contra a máfia","A Itália combina promotorias especializadas, isolamento carcerário de chefes mafiosos (o regime “41-bis”) e confisco de bens — referência que o livro retoma no capítulo IV, com a Cláusula Antimáfia."]
  ],
  conn:[[4,"A Cláusula Antimáfia dissolve prefeituras capturadas pelo crime."],[13,"O Pacto Interamericano leva a guerra ao tráfico ao plano externo."],[14,"A desfavelização só começa depois da retomada territorial."],[9,"Escolas civis-militares em regiões de alta criminalidade."]]
},
/* ================= III ================= */
{ n:3, r:"III", part:1, theme:"Pacto federativo", title:"Quem Paga a Banda...", sub:"Distorções do Pacto Federativo e a Grande Consolidação Municipal brasileira", pages:"14–16",
  why:{g:1, t:"Os títulos dos capítulos III e IV completam o ditado “quem paga a banda escolhe a música”: se a União financia os municípios (III), deve poder impor padrões de gestão a eles (IV)."},
  one:"Fundir os municípios fiscalmente inviáveis — de 5.570 para cerca de 1.656 — com critérios objetivos, preservando as identidades locais.",
  ps:[["~90%","dos municípios gastam mais com folha do que arrecadam com tributos próprios"],["R$ 196 bi","repassados via FPM em um ano — mais que todo o Bolsa Família"],["R$ 5,2 bi","gastos por prefeituras com shows e eventos só no biênio 2024–2025"]],
  as:[["5.570 → 1.656","municípios: redução de até 70% com a Grande Consolidação Municipal"],["Mínimo de 10%","de receita própria para o município ser viável (critério da PEC 188/2019)"]],
  prob:[
    ["Municípios fiscalmente inviáveis","Em 80 anos o número de municípios quase quadruplicou, e quase 90% deles gastam mais com pessoal do que arrecadam com tributos próprios. Câmaras, prefeituras, secretarias e autarquias replicadas consomem recursos que deveriam ir para escolas, postos, asfalto e saneamento."],
    ["Máquinas políticas locais","Oligarquias locais trocam compra de votos e orçamentos com deputados estaduais e federais, formando “máquinas” que sustentam o centrão. Para elas, manter a cidade no subdesenvolvimento facilita o clientelismo."],
    ["Shows em vez de serviços","Dependentes de verbas federais, municípios gastaram R$ 5,2 bi em shows e eventos em 2024–2025 — mais de R$ 2 bi só entre os de situação fiscal problemática, como nos casos que envolveram o cantor Wesley Safadão —, enquanto saneamento, saúde e educação seguem estagnados."],
    ["Quem paga é a União","Foram R$ 196 bi via FPM no último ano. A União arrecada dos poucos entes produtivos e transfere para a maioria insolvente. A EC 15/1996 tentou frear a criação de municípios, mas a lei complementar exigida nunca foi editada."]
  ],
  quote:"Ao mesmo tempo, esses municípios são profundamente mal geridos.",
  pvis:[{type:"line", t:"A explosão do número de municípios (1940–2026)", pts:[["1940",1574],["1964",3950],["1980",3974],["1991",3974],["1990",4491],["2000",5507],["2007",5564],["2026",5570]], max:6000, src:"Fonte do gráfico original: elaborado com base em dados históricos do IBGE.", gnote:"Rótulos e valores conforme o gráfico do livro, em que os pontos “1991” e “1990” aparecem nessa ordem — provável troca de rótulos. Pelos registros do IBGE, os 4.491 municípios correspondem a 1991."}],
  groups:[
    { t:"Grande Consolidação Municipal", d:"Programa federal de fusão de municípios inviáveis — “a maior reorganização territorial da história republicana brasileira”. Referência metodológica: a tese dos amálgamas municipais da UFPB, que mostra ser tecnicamente possível reduzir o número de municípios em até 70%, combinando contiguidade, complementaridade econômica e capacidades fiscais entre vizinhos do mesmo estado.",
      props:[
        {id:"c3-consolidacao", t:"Fundir municípios inviáveis", d:"De 5.570 para algo próximo de 1.656 municípios, com escala suficiente para entregar serviços públicos de qualidade."},
        {id:"c3-identidades", t:"Preservar as identidades locais", d:"Antigas sedes viram distritos ou subprefeituras, com autonomia para cultura, eventos cívicos e zeladoria, mantendo nomes e tradições. Postos, escolas e creches são mantidos e fortalecidos com o que se economiza na máquina política."},
        {id:"c3-transicao", t:"Transição cuidadosa no FPM", d:"A União garante que a fusão não resulte em perda imediata de recursos totais para o novo município — o ganho deve vir da eficiência."}
      ],
      vis:[{type:"crit", t:"Os quatro eixos de viabilidade", items:[["Fiscal","Inviável quem não cobre as despesas obrigatórias com receita própria (CAPAG comprometida). Referência: IPTU, ISS e ITBI somando ao menos 10% da receita total."],["Geográfica","Territórios desproporcionais à capacidade administrativa — como Altamira (PA), com 159 mil km², ou Barcelos (AM) — serão reavaliados."],["Econômica","Municípios sem base econômica própria se unem a vizinhos complementares, como um de base agrícola e outro industrial."],["Urbana","Cidades conurbadas, com mancha urbana contínua, podem ter administração unificada."]]},
           {type:"bars", t:"Número de municípios", items:[["Hoje",5570,"5.570","hi"],["Após a consolidação (estimativa da tese da UFPB)",1656,"≈ 1.656","pos"]], max:6400}]
    },
    { t:"Propostas fundamentais",
      props:[
        {id:"c3-pec188", k:"1", t:"Retomar a PEC 188/2019", d:"Aplicação rigorosa da proposta que introduziu critérios de sustentabilidade financeira para a manutenção de municípios."},
        {id:"c3-marco", k:"2", t:"Marco Legal da Consolidação Municipal", d:"Fusões obedecendo a cinco critérios:", it:["limite de população máxima","contiguidade geográfica","mesma unidade da federação","complementaridade de atividades econômicas","capacidades fiscais complementares"]},
        {id:"c3-lc91", k:"3", t:"Nova lei do FPM", d:"Substituir a Lei Complementar 91/1997 por uma nova lei que discipline o Fundo de Participação dos Municípios."},
        {id:"c3-multimunicipais", k:"4", t:"Autoridades multimunicipais", d:"Criadas a partir do Estatuto da Metrópole (Lei 13.089/2015), que prevê regiões metropolitanas e aglomerações urbanas."},
        {id:"c3-lrg", k:"5", t:"Emancipações e fusões sob a LRG", d:"O processo de emancipação e fusão passa a seguir as regras da Lei de Responsabilidade Gerencial (capítulo IV)."}
      ] }
  ],
  outro:"A consolidação seria a “condição material” para o federalismo fazer sentido fiscal: municípios financeiramente sustentáveis, administrativamente competentes e responsáveis perante seus cidadãos, em vez de reféns de emendas e transferências.",
  cmp:[
    ["Número de municípios","5.570","≈ 1.656"],
    ["Criar um município","Depende de lei complementar federal que nunca foi editada (EC 15/1996)","Emancipações e fusões seguem a Lei de Responsabilidade Gerencial"],
    ["Distribuição do FPM","LC 91/1997: coeficientes por faixa de população, que favorecem os menores por habitante","Nova lei do FPM"],
    ["Antigas sedes","Prefeitura, câmara e secretarias próprias","Distrito ou subprefeitura, com serviços mantidos"]
  ],
  ctx:[
    ["1988–2001","A onda de emancipações","A Constituição de 1988 deixou a criação de municípios a cargo dos estados. Na década seguinte surgiram mais de mil novos municípios, muitos pequenos e dependentes do FPM."],
    ["1996","EC 15/1996","Passou a exigir lei complementar federal, estudos de viabilidade e plebiscito para criar municípios. Como a lei nunca veio, novas criações ficaram travadas; em 2008, a EC 57 validou os municípios criados até 2006."],
    ["1965 · 1997","FPM","O Fundo de Participação dos Municípios repassa às prefeituras parte do que a União arrecada com Imposto de Renda e IPI. Foi criado em 1965; seus coeficientes seguem em boa parte a LC 91/1997 — a lei que o livro propõe substituir."],
    ["2019","PEC 188/2019","Parte do pacote “Mais Brasil”, do então ministro Paulo Guedes. Previa incorporar a vizinhos os municípios com até 5 mil habitantes cuja receita própria não chegasse a 10% da receita total. Não avançou no Congresso. A Missão adota o mesmo critério de 10%."],
    ["Tesouro Nacional","CAPAG","Nota de A a D que o Tesouro atribui à capacidade de pagamento de estados e municípios, com base em endividamento, poupança corrente e liquidez. Define quem pode tomar empréstimos com garantia da União."]
  ],
  ana:[
    ["Dinamarca (2007)","Uma reforma municipal reduziu os municípios de 271 para 98, com novas atribuições para os entes resultantes."],
    ["Japão (1999–2010)","A “Grande Fusão Heisei” reduziu o número de municípios de cerca de 3.200 para cerca de 1.700, com incentivos financeiros do governo central."],
    ["Grécia (2011)","Em plena crise fiscal, o programa Kallikratis cortou os municípios de 1.034 para 325."]
  ],
  conn:[[4,"A Lei de Responsabilidade Gerencial passa a reger fusões e emancipações."],[1,"O ajuste fiscal da União passa por conter transferências ineficientes."]]
},
/* ================= IV ================= */
{ n:4, r:"IV", part:1, theme:"Responsabilidade gerencial", title:"Escolhe a Música", sub:"Lei de Responsabilidade Gerencial e Meritocracia Política", pages:"17–18",
  why:{g:0, t:"Completa o ditado do capítulo anterior: com a Lei de Responsabilidade Gerencial, “pela primeira vez, o governo federal poderá ‘escolher a música’” — impor padrões objetivos de gestão aos municípios que dele dependem."},
  one:"Condicionar verbas, fundos partidários e até a elegibilidade de prefeitos a metas objetivas de gestão, fiscalizadas em tempo real por um Comissariado federal independente.",
  ps:[["¼ do orçamento livre","das despesas discricionárias é consumido por emendas parlamentares — o combustível da compra de apoio"],["R$ 5 bi + R$ 1,2 bi","Fundo Eleitoral (2024) e Fundo Partidário anual, distribuídos sem vínculo com a qualidade da gestão"]],
  as:[["Comissários federais","fiscalização em tempo real da aplicação dos recursos nos municípios"],["Até 24 meses","de gestão federal em prefeituras capturadas pelo crime (Cláusula Antimáfia)"],["Fundo condicionado","partidos com prefeitos cassados ou mal avaliados perdem repasses"]],
  prob:[
    ["Patrimonialismo","A falta de distinção entre público e privado — diagnóstico de pensadores de Carlos Lacerda a Sérgio Buarque de Holanda, passando por Gilberto Freyre — faz dos prefeitos “senhores” de seus municípios: administradores transacionais e intermediários da compra de votos, não gestores de serviços."],
    ["A “gincana” eleitoral","Partidos querem maximizar orçamento via fundos e emendas. Quem elege mais deputados ganha mais fundo; esse dinheiro elege vereadores e prefeitos, que viram cabos eleitorais dos deputados; os deputados retribuem com emendas. As mesmas oligarquias se mantêm sem melhorar indicadores."],
    ["Um problema que nem Vargas resolveu","A captura do Estado por interesses privados, sem responsabilidade compartilhada, seria “o grande problema do país”. Refundar o modelo gerencial é tratado como projeto geracional. O tema foi explorado no fascículo 6, em textos sobre “Patrimonialismo Positivo” e “Tecnotenentismo”."]
  ],
  quote:"O patrimonialismo é, sem dúvida, a cultura política brasileira.",
  pvis:[{type:"flow", t:"O ciclo descrito pelo livro", steps:[["Eleição nacional","Partidos disputam cadeiras para ampliar fundos e emendas"],["Eleição municipal","O fundo eleitoral financia vereadores e prefeitos aliados"],["Cabos eleitorais","Prefeitos trabalham pela eleição dos deputados"],["Emendas","Deputados enviam recursos aos municípios aliados"]], loop:"E o ciclo recomeça — sem cobrança por resultados."}],
  groups:[
    { t:"A Lei de Responsabilidade Gerencial (LRG)", d:"Inspirada em experiências do Japão, da China, da Itália e dos EUA, adaptadas ao contexto patrimonialista brasileiro, para alinhar os interesses das classes políticas locais à boa gestão e criar travas ao poder dos prefeitos e das “máfias clientelistas”.",
      props:[
        {id:"c4-comissariado", t:"Comissariado Federal de Gestão Pública", d:"Autarquia especial vinculada ao Ministério da Fazenda, com autonomia técnica e mandatos fixos, inspirada na independência do Banco Central. Aloca Comissários Municipais no território para dar assessoria técnica e fiscalizar em tempo real (pari passu) a aplicação dos recursos federais."},
        {id:"c4-marco", t:"Marco Gerencial Nacional", d:"Sistema de metas com três famílias de indicadores. Municípios que não as cumprirem sofrem intervenções federais graduais, evitando o colapso administrativo.", it:["Resultados setoriais: IDEB, cobertura vacinal, saneamento, crescimento econômico","Integridade de gestão","Eficiência fiscal"]},
        {id:"c4-escalada", t:"Escalada de Consequências", d:"Substitui a “anistia de fato” por punições proporcionais e imediatas.", it:["Tutela Gerencial: municípios com desempenho crítico passam a exigir dupla assinatura — prefeito e comissário — para gastos","Inelegibilidade Superveniente para gestores que falham reiteradamente nas metas de longo prazo","Cassação por Improbidade Gerencial perante os Tribunais de Justiça"]},
        {id:"c4-antimafia", t:"Cláusula Antimáfia", d:"Inspirada na legislação italiana, permite ao STJ dissolver administrações capturadas pelo crime organizado ou por milícias. O mandato é extinto e o município passa a ser gerido por uma comissão extraordinária federal por até 24 meses."},
        {id:"c4-fundos", t:"Fundos Partidário e Eleitoral pela qualidade da gestão", d:"O repasse passa a ser calculado pela qualidade gerencial dos mandatários: partidos com gestores competentes são premiados; os que sustentam prefeitos cassados ou com indicadores “vermelhos” têm recursos retidos."}
      ],
      vis:[{type:"flow", t:"A Escalada de Consequências", steps:[["Metas","O Marco Gerencial Nacional mede o município"],["Tutela Gerencial","Gastos com dupla assinatura: prefeito e comissário"],["Inelegibilidade","Superveniente, para quem falha reiteradamente"],["Cassação","Por Improbidade Gerencial, nos Tribunais de Justiça"]]}]
    }
  ],
  outro:"O objetivo declarado é transformar a prefeitura “de um feudo político em uma unidade de entrega técnica” — criar um “Estado Novo, dessa vez democraticamente”.",
  cmp:[
    ["Fiscalização de verbas federais","Posterior, por CGU e tribunais de contas","Em tempo real, por comissários municipais"],
    ["Mau desempenho da gestão","Sem consequência automática","Tutela, inelegibilidade e cassação graduais"],
    ["Prefeitura capturada pelo crime","Afastamentos caso a caso, por decisão judicial","Dissolução pelo STJ e comissão federal por até 24 meses"],
    ["Divisão dos fundos partidário e eleitoral","Proporcional sobretudo ao desempenho eleitoral (votos e bancadas)","Condicionada à qualidade gerencial dos mandatários"]
  ],
  ctx:[
    ["1933 · 1936 · 1958","O patrimonialismo na interpretação do Brasil","Gilberto Freyre (“Casa-Grande & Senzala”, 1933) descreveu a família patriarcal como núcleo da sociedade colonial; Sérgio Buarque de Holanda (“Raízes do Brasil”, 1936) cunhou o “homem cordial”, que mistura afetos privados e coisa pública. O conceito de patrimonialismo, de Max Weber, ganhou sua leitura brasileira mais influente com Raymundo Faoro (“Os Donos do Poder”, 1958) — autor que o resumo não cita, mas que é referência no tema."],
    ["Anos 1920","Tenentismo","Movimento de jovens oficiais do Exército (Revolta dos 18 do Forte, Coluna Prestes) que pregava moralizar a República oligárquica e apoiou a Revolução de 1930. O livro cita o “Tecnotenentismo”, tema do fascículo 6, sem detalhá-lo neste resumo; o nome remete a esse movimento."],
    ["2000","Lei de Responsabilidade Fiscal","A LC 101/2000 criou limites de gasto com pessoal e endividamento, com punições a gestores. O nome “Lei de Responsabilidade Gerencial” ecoa essa lei: a ideia é fazer pela qualidade da gestão o que a LRF fez pelas contas."],
    ["2015–2022","A escalada das emendas","Emendas individuais viraram obrigatórias em 2015 (EC 86) e as de bancada em 2019 (EC 100). Em 2019 surgiram as transferências especiais, apelidadas de “emendas Pix”, e em 2022 o STF derrubou as emendas de relator, o chamado “orçamento secreto”."],
    ["2015 · 2017","Fundo Eleitoral","Depois que o STF proibiu doações de empresas a campanhas (2015), o Congresso criou em 2017 o Fundo Especial de Financiamento de Campanha, com dinheiro público. O Fundo Partidário é mais antigo e financia o dia a dia dos partidos."],
    ["2021","Autonomia do Banco Central","A LC 179/2021 deu à diretoria do BC mandatos fixos, não coincidentes com o do presidente — o modelo que o livro propõe para o Comissariado."],
    ["2010","Lei da Ficha Limpa","A LC 135/2010 tornou inelegíveis por oito anos os condenados por órgão colegiado, entre outros casos. A “Inelegibilidade Superveniente” estenderia a inelegibilidade ao mau desempenho gerencial."]
  ],
  ana:[
    ["Itália: dissolução por infiltração mafiosa","Desde 1991, a lei italiana permite dissolver conselhos municipais infiltrados pela máfia; uma comissão de três membros administra o município por 18 meses, prorrogáveis até 24. Centenas de municípios, sobretudo no sul, já passaram pela medida. Lá, a decisão é do governo (decreto do presidente da República); na proposta da Missão, caberia ao STJ."]
  ],
  conn:[[3,"A consolidação de municípios passa a seguir as regras da LRG."],[1,"Mudanças nas emendas parlamentares já entram na PEC de Transição."],[2,"O crime que captura prefeituras é o alvo da Cláusula Antimáfia."],[7,"O FNMA da saúde também condiciona repasses ao desempenho."]]
},
/* ================= V ================= */
{ n:5, r:"V", part:2, theme:"Economia e assistencialismo", title:"Produtividade pela Cidadania", sub:"Nova agenda de produtividade e reforma do assistencialismo", pages:"20–22",
  one:"Destravar a produtividade com reformas microeconômicas — tributos, trabalho, regulação financeira e governança — e substituir o Bolsa Família por Frentes Cidadãs de trabalho remunerado.",
  ps:[["~R$ 4 tri","em subsídios a grupos privilegiados nos últimos 15 anos"],["20 vezes","o crescimento dos gastos com Bolsa Família + BPC: R$ 285 bi em 2025"],["Desde 1990","produtividade do trabalho praticamente estagnada no Brasil"]],
  statNote:"O card “20 vezes” reproduz o destaque do livro; no texto do capítulo, o crescimento citado é de “mais de 8 vezes” em 15 anos.",
  as:[["Frentes Cidadãs","substituem o Bolsa Família: trabalho remunerado em prol da comunidade"],["4 eixos de reforma","justiça tributária, legislação trabalhista, regulação financeira e governança"]],
  prob:[
    ["Produtividade parada","Estagnada desde os anos 1990 por instituições que reproduzem distorções, subsidiam setores ineficientes e distribuem recursos de forma caótica. Sem produtividade, diz o livro, não há liberdade econômica — e, no limite, cidadania."],
    ["Captura e assistencialismo","Cerca de R$ 4 tri em subsídios a grupos privilegiados em 15 anos; gastos com Bolsa Família e BPC multiplicados no mesmo período, chegando a ~R$ 285 bi em 2025. O brasileiro formal trabalha um pouco mais horas que em países ricos, mas o esforço não vira riqueza."],
    ["Gargalos estruturais","", ["infraestrutura que restringe a produção","crise educacional: 73% sem o básico em matemática e 50% sem ler textos de dificuldade média","incentivos que favorecem firmas pouco competitivas","complexidade tributária","litigiosidade excessiva na Justiça do Trabalho","insegurança jurídica","protecionismo crônico"]],
    ["Crise de capital humano","Déficit em competências digitais e em STEM, somado a subsídios mal alocados, gera fuga de cérebros; o assistencialismo crescente pesa sobre uma população trabalhadora que não consegue aumentar sua produtividade."]
  ],
  quote:"A crise de capital humano merece destaque especial.",
  pvis:[{type:"bars", t:"Produtividade do trabalho por setor, 1996–2020 (variação média anual)", items:[["Agricultura",5.8,"+5,8%","pos"],["Mineração",3.5,"+3,5%","pos"],["Serviços",0.1,"+0,1%","pos"],["Indústria",-0.4,"−0,4%"],["Manufatura",-0.9,"−0,9%"],["Construção",-1.2,"−1,2%"]], src:"Fonte do gráfico original: Observatório da Produtividade Regis Bonelli (FGV IBRE).", gnote:"Só agro e mineração cresceram de forma consistente — setores que o livro retoma nos capítulos XI e XII."}],
  groups:[
    { t:"Caminhos para o crescimento", d:"Reformas microeconômicas e regulatórias inspiradas no caderno do CDPP e nos fascículos do Livro Amarelo, que “tangenciam quase todos os eixos estruturais da economia”. O resumo apresenta os eixos, sem detalhar as medidas de cada um.",
      props:[
        {id:"c5-tributaria", t:"Justiça tributária", nd:1},
        {id:"c5-trabalhista", t:"Legislação trabalhista", d:"A Introdução menciona reforma trabalhista para flexibilizar as relações de trabalho."},
        {id:"c5-financeira", t:"Regulação financeira", d:"Inclui a regulação de transações financeiras, citada no fechamento do capítulo."},
        {id:"c5-governanca", t:"Governança pública", nd:1}
      ] },
    { t:"Frentes Cidadãs", d:"A “reforma total” do assistencialismo.",
      props:[
        {id:"c5-frentes", t:"Substituir o Bolsa Família por Frentes Cidadãs", d:"Frentes de trabalho remuneradas para a população em idade economicamente ativa: os beneficiários participam de projetos para o bem público, tornam-se “participantes ativos da comunidade” e são incentivados a entrar no mercado formal."}
      ] }
  ],
  outro:"A tese de fundo: hoje o brasileiro se vê como indivíduo que prospera “apesar do Estado ou por conta dele”, e não como parte de um projeto nacional. As reformas buscam alinhar os objetivos do indivíduo aos do país, trocando uma economia rentista por uma de inovação.",
  cmp:[
    ["Transferência de renda","Bolsa Família: benefício com condicionalidades de saúde e educação, sem exigência de trabalho","Frentes Cidadãs: renda ligada a trabalho em projetos comunitários, para quem está em idade ativa"],
    ["Foco da política econômica","Subsídios e isenções setoriais","Reformas microeconômicas para destravar a produtividade"]
  ],
  ctx:[
    ["2003","Bolsa Família","Criado em 2003 pela unificação de programas anteriores (Bolsa Escola, Bolsa Alimentação, Auxílio-Gás), exige frequência escolar e acompanhamento de saúde das crianças. Chamou-se Auxílio Brasil em 2021–2022 e voltou ao nome original em 2023."],
    ["1993","BPC","O Benefício de Prestação Continuada paga um salário mínimo a idosos a partir de 65 anos e a pessoas com deficiência de baixa renda, sem exigir contribuição. Como é atrelado ao mínimo, é afetado pela desindexação do capítulo I."],
    ["Séc. XIX–XX","Frentes de trabalho no Nordeste","O Brasil já usou frentes de trabalho em larga escala: nas grandes secas, governos contratavam flagelados para obras como açudes e estradas. A proposta do livro é permanente e voltada à entrada no mercado formal, não a emergências."],
    ["2017 · 2023","Reformas trabalhista e tributária","A reforma trabalhista de 2017 (Lei 13.467) flexibilizou contratos e reduziu ações na Justiça do Trabalho; a reforma tributária do consumo (EC 132/2023) cria o IVA dual (IBS e CBS), em transição até 2033. O livro trata complexidade tributária e litigiosidade trabalhista como gargalos ainda abertos."]
  ],
  ana:[
    ["Workfare nos EUA (1996)","A reforma de 1996 criou o TANF, com exigência de trabalho e limite de tempo para receber assistência. É o exemplo mais citado de benefício condicionado a trabalho; estudos apontam aumento do emprego entre mães solteiras, e há debate sobre os efeitos na pobreza extrema."],
    ["Índia: MGNREGA (2005)","Garante até 100 dias por ano de trabalho remunerado em obras públicas rurais a cada família que pedir — o maior programa de emprego público do mundo."]
  ],
  conn:[[1,"Caderno do CDPP e desindexação do BPC."],[9,"A crise educacional e o déficit em STEM travam a produtividade."],[12,"Agro, o setor de maior ganho de produtividade."]]
}
];
/* Livro Amarelo — dados (parte 2): capítulos VI–X */
CHAPTERS.push(
/* ================= VI ================= */
{ n:6, r:"VI", part:2, theme:"Infraestrutura", title:"Missão Rondon", sub:"Recuperação e modernização da infraestrutura brasileira", pages:"23–24",
  why:{g:0, t:"Homenagem ao Marechal Cândido Rondon, que “conectou os rincões do país com as linhas telegráficas” e deu ao Estado sua primeira capilaridade efetiva. A ideia é recuperar a ambição dos bandeirantes e desbravadores, “dessa vez com disciplina técnica e fiscal”."},
  one:"Dobrar o investimento em infraestrutura, de 2% para 4% do PIB, retomar obras paradas e priorizar ferrovias, portos do Norte e Nordeste, transmissão de energia e Angra 3.",
  ps:[["11 mil","obras com verbas federais paralisadas, de um total de 21 mil"],["26%","da energia renovável do Nordeste cortada nos picos por falta de transmissão"]],
  as:[["2% → 4%","do PIB: meta de investimento em infraestrutura, em linha com o PNL"],["30 → 40 mil km","de ferrovias como meta mínima (China: 160 mil; EUA: 250 mil)"],["Angra 3","retomada decisiva após mais de uma década de paralisação"]],
  prob:[
    ["Investimento pela metade","A participação do investimento em infraestrutura no PIB caiu de ~4% nos anos 1980 para ~2%. Estradas congestionadas, energia cara e pouco confiável, cidades mal planejadas; segundo a CNT, a maior parte das rodovias tem conservação, pavimento, sinalização ou geometria insatisfatórios."],
    ["Poucos trilhos, estradas precárias","Os EUA têm ~250 mil km de ferrovias; a China, ~160 mil; o Brasil, ~30 mil. A BR-163, no Arco Norte, sofre com pavimento precário; a BR-319 segue inacabada por entraves de licenciamento; a BR-101 acumula trechos críticos."],
    ["Obras paradas","Mais de 11 mil de 21 mil obras com verba federal estão interrompidas. Acórdão do TCU de 2019 atribuiu 80% das paralisações a problemas técnicos, abandono pela contratada ou falta de orçamento. Os cenários otimistas do Plano Nacional de Logística nunca se concretizam."],
    ["Amazônia isolada","Na Amazônia Legal, o isolamento deixa o PIB per capita ~30% abaixo da média nacional, e ~95% do desmatamento ocorre perto de rodovias, em geral convertido em pecuária extensiva de baixo retorno."],
    ["Energia limpa desperdiçada","Em 2024, em meses de pico, cerca de 26% da energia renovável que o Nordeste poderia gerar foi cortada por falta de transmissão. Angra 3 está parada há mais de uma década."]
  ],
  quote:"O Brasil é prisioneiro de um dilema falso: crescer sem planejamento, ou planejar sem execução.",
  pvis:[{type:"bars", t:"Malha ferroviária (mil km)", items:[["EUA",250,"250","muted"],["China",160,"160","muted"],["Brasil hoje",30,"30","hi"],["Meta mínima da Missão",40,"40","pos"]], max:280, src:"Números citados no capítulo VI."}],
  groups:[
    { t:"Seis diretrizes", d:"O investimento só vem depois do espaço fiscal aberto pelos capítulos anteriores; o essencial, diz o livro, é que seja bem feito.",
      props:[
        {id:"c6-investimento", k:"1", t:"Mais investimento estatal, com condição", d:"Aumento do investimento público em infraestrutura condicionado a reforma administrativa e fiscal prévia."},
        {id:"c6-privado", k:"2", t:"Capital privado", d:"Concessões, PPPs e o novo regime de autorização ferroviária."},
        {id:"c6-capacitacao", k:"3", t:"Capacitação técnica", d:"Engenheiros e órgãos públicos municipais preparados para elaborar e fiscalizar projetos."},
        {id:"c6-licitacoes", k:"4", t:"Reforma das licitações", d:"Tribunais de Contas fortalecidos, quadros técnicos profissionalizados e consórcios entre pequenos municípios para PPPs."},
        {id:"c6-licenciamento", k:"5", t:"Licenciamento ambiental", d:"Implementação plena da Lei Geral do Licenciamento (Lei 15.190/2025), com uso ostensivo da Licença Ambiental Especial (LAE), cuja inovação é uma equipe técnica permanentemente dedicada à análise de projetos estratégicos."},
        {id:"c6-governanca", k:"6", t:"Governança de projetos", d:"Integrar o estudo de viabilidade (EVTEA) e o estudo ambiental (EIA) desde a pré-viabilidade, evitando os descompassos que hoje geram atrasos, aditivos e abandonos."}
      ],
      vis:[{type:"bars", t:"Investimento em infraestrutura (% do PIB)", items:[["Anos 1980",4,"≈ 4%","muted"],["Hoje",2,"≈ 2%","hi"],["Meta da Missão",4,"4% ou mais","pos"]], max:5}]
    },
    { t:"Obras e modais prioritários",
      props:[
        {id:"c6-ferrovias", t:"Ferrovias: meta mínima de 40 mil km", it:["Conclusão antecipada da Ferrovia Alcântara–Açailândia","Conclusão da Ferrovia de Integração Oeste-Leste (FIOL)","Início imediato das obras da Ferrogrão","Viabilização da Ferrovia Transoceânica"]},
        {id:"c6-portos", t:"Portos", it:["Mais capacidade no Norte e no Nordeste","Conclusão da expansão do Porto de Alcântara","Expansão do Porto de Ilhéus","Aceleração do Porto de Itaqui","Modernização da frota naval"]},
        {id:"c6-aeroportos", t:"Aeroportos", d:"Prioridade à conectividade do Norte, com expansão da infraestrutura aeroportuária regional."},
        {id:"c6-energia", t:"Energia", it:["Marco regulatório da transmissão, para acabar com o curtailment no Nordeste","Retomada decisiva das obras de Angra 3","Hidrogênio verde, com abertura para a bacia amazônica","Atenção à fusão nuclear"]}
      ] }
  ],
  outro:"“A Missão Rondon não é uma lista de obras”, diz o livro, mas um pacto pelo desenvolvimento racional do território: o diagnóstico já existe; falta executar com agilidade, fiscalização rigorosa e incentivo à competência técnica.",
  cmp:[
    ["Investimento em infraestrutura","~2% do PIB","Pelo menos 4% do PIB"],
    ["Malha ferroviária","~30 mil km","Mínimo de 40 mil km"],
    ["Licenciamento de projetos estratégicos","Rito ordinário","Uso ostensivo da LAE, com equipe técnica dedicada"],
    ["Angra 3","Obra paralisada","Retomada"]
  ],
  ctx:[
    ["1907–1915","Marechal Rondon","Cândido Rondon (1865–1958) chefiou a comissão que estendeu linhas telegráficas de Mato Grosso ao Amazonas, mapeando áreas até então desconhecidas pelo Estado. Criou o Serviço de Proteção aos Índios (1910), ficou conhecido pelo lema “morrer se preciso for, matar nunca” e dá nome ao estado de Rondônia. Não confundir com o Projeto Rondon, programa de extensão universitária criado em 1967."],
    ["Séc. XVI–XVIII","Bandeirantes","Expedições partidas de São Paulo que interiorizaram a colonização em busca de ouro e de indígenas para escravizar, alargando as fronteiras do país. O livro evoca sua “ambição” desbravadora; o legado dos bandeirantes é hoje objeto de debate histórico."],
    ["1984–hoje","Angra 3","Terceira usina nuclear de Angra dos Reis (RJ). As obras começaram nos anos 1980, pararam, foram retomadas em 2010 e voltaram a parar em 2015, em meio a investigações da Lava Jato. Angra 1 e 2 seguem em operação."],
    ["2021","Autorização ferroviária","A Lei 14.273/2021 permitiu que empresas privadas construam e operem ferrovias por autorização, sem licitação de concessão — o “novo regime” citado na diretriz 2."],
    ["Conceito","Curtailment","Corte forçado de geração: quando faltam linhas de transmissão (ou demanda) para escoar a energia, o operador do sistema manda usinas eólicas e solares reduzirem a produção, e a energia simplesmente deixa de ser gerada."]
  ],
  ana:[
    ["Ferrovias de EUA e China","Os EUA construíram sua malha sobretudo no século XIX, com forte participação privada; a China a expandiu nas últimas décadas por planejamento estatal, incluindo a maior rede de alta velocidade do mundo. O livro usa ambos como régua para um país continental."]
  ],
  conn:[[1,"O investimento depende do espaço fiscal aberto pela PEC."],[10,"Portos e energia para os polos do Nordeste."],[12,"Escoamento do agro e energia para datacenters."]]
},
/* ================= VII ================= */
{ n:7, r:"VII", part:2, theme:"Saúde", title:"SUS Fila Zero", sub:"Saúde", pages:"25–26",
  one:"Trocar a fila por ordem de chegada por uma fila por risco (ENER), criar um prontuário nacional único (PRONTO) e digitalizar o SUS com telemedicina e IA, inspirado no DoctorSV de El Salvador.",
  ps:[["~75%","da população não tem plano privado e depende do SUS"],["Fila cronológica","a ordem de chegada ignora a gravidade: casos graves esperam atrás de casos leves"]],
  as:[["Fila por risco","ENER: prioridade por gravidade clínica, risco e vulnerabilidade — a fila viva"],["80% na base","meta de resolutividade da nova Atenção Primária, com contrarreferência obrigatória"],["PRONTO","prontuário único nacional com telemedicina e IA (modelo DoctorSV)"]],
  prob:[
    ["Universal no papel","Cerca de 75% da população não tem plano privado (ANS), e praticamente todos usam o SUS em algum nível — vacinação, vigilância, alta complexidade, transplantes. Mas faltam médicos em regiões de difícil acesso, as filas de regulação são lentas e há judicialização e desperdício."],
    ["Meses de espera","Pacientes esperam meses por atendimento; saúde está entre os problemas mais citados nas pesquisas, sobretudo entre mulheres. Acesso e custo elevado do sistema são os dois problemas que o capítulo ataca."],
    ["Sistema descoordenado","Sem prontuário unificado, municípios pequenos ficam sem médicos, e centros regionais de alta complexidade se sobrecarregam, muitas vezes com casos de atenção primária."]
  ],
  quote:"As estatísticas demonstram profunda insatisfação da população brasileira.",
  groups:[
    { t:"A fila viva: ENER", d:"A ideia central do capítulo: uma fila que deixa de seguir apenas a ordem de chegada e passa a ordenar os pacientes pelo grau de risco.",
      props:[
        {id:"c7-ener", k:"3", t:"ENER — Escala Nacional de Estratificação de Risco", d:"Substitui a abordagem episódica pela processual: a prioridade na fila passa a considerar cinco critérios objetivos."}
      ],
      vis:[{type:"crit", t:"Os cinco critérios da ENER", items:[["Gravidade clínica atual",""],["Risco de progressão","no curto e no médio prazo"],["Impacto funcional","ameaça de perda da capacidade de trabalho e da autonomia"],["Vulnerabilidade social","associada ao paciente"],["Tempo acumulado de espera",""]]}]
    },
    { t:"Saúde digital",
      props:[
        {id:"c7-digital", k:"1", t:"Sistema digital de saúde", d:"Telemedicina, diagnóstico por IA, monitoramento clínico e histórico permanente, inspirado no DoctorSV. Integra laboratórios, farmácias e centros de imagem às triagens; começa como piloto em algumas cidades e depois ganha escala nacional."},
        {id:"c7-expansao", k:"2", t:"Vigilância preditiva, mRNA e genômica", d:"Expansão da digitalização com vigilância epidemiológica preditiva em tempo real, plataforma de mRNA para vacinas e terapias e o maior banco de dados genômicos da América Latina, a partir do projeto Genomas Brasil."},
        {id:"c7-pronto", k:"4", t:"PRONTO — Prontuário Eletrônico Nacional Interoperável", d:"Conecta atenção primária, especialistas, hospitais públicos e privados, laboratórios e farmácias, guardando todo o histórico do paciente, acessível a qualquer tempo e integrado ao sistema digital."},
        {id:"c7-genomas", t:"Genomas Brasil no prontuário do SUS", d:"Uma das ideias “mais arrojadas” do livro: integrar o Programa Genomas Brasil ao prontuário eletrônico, mirando liderança global em genômica aplicada a populações miscigenadas."}
      ] },
    { t:"Organização e financiamento",
      props:[
        {id:"c7-hub", k:"5", t:"Modelo Hub-and-Spoke", d:"Demandas complexas concentradas em centros regionais de referência, que deixam de receber demandas difusas e primárias."},
        {id:"c7-fnma", k:"6", t:"FNMA — Fundo Nacional de Modernização do Acesso", d:"Repasses aos municípios condicionados ao desempenho."},
        {id:"c7-atencao", t:"80% de resolução na atenção primária", d:"Meta de resolver, em média, 80% dos casos na porta de entrada do sistema, com contrarreferência obrigatória."},
        {id:"c7-esporte", k:"7", t:"Isenções fiscais para atividades esportivas", d:"Plano de compensações tributárias ligadas ao cuidado com a saúde física, ideia ventilada na pré-campanha."}
      ] }
  ],
  cmp:[
    ["Ordem da fila","Chegada (cronológica)","Risco: gravidade, progressão, impacto funcional, vulnerabilidade e tempo de espera"],
    ["Prontuário","Sistemas fragmentados entre serviços e municípios","PRONTO: único, nacional e interoperável"],
    ["Casos simples","Muitas vezes vão parar em centros de alta complexidade","Resolvidos na atenção primária (meta de 80%)"]
  ],
  ctx:[
    ["1988 · 1990","Criação do SUS","A Constituição de 1988 definiu a saúde como direito de todos e dever do Estado; a Lei 8.080/1990 organizou o SUS, com os princípios de universalidade, integralidade e equidade. Antes, o atendimento público era voltado sobretudo a quem tinha carteira assinada, via INAMPS."],
    ["Conceito","Classificação de risco","Emergências brasileiras já usam protocolos como o de Manchester (criado no Reino Unido em 1994), que classificam pacientes por cores. A ENER leva a mesma lógica à fila regulada de consultas, exames e cirurgias eletivas."],
    ["2020","Genomas Brasil","Programa do Ministério da Saúde lançado em 2020 para sequenciar genomas da população brasileira e apoiar a medicina de precisão. A miscigenação torna esses dados especialmente valiosos para a pesquisa."],
    ["2025","DoctorSV","Aplicativo público de saúde de El Salvador, lançado pelo governo Bukele em novembro de 2025, desenvolvido com o Google e financiado com empréstimo do banco de desenvolvimento CAF. Oferece videoconsultas assistidas por IA, receitas digitais e acesso a farmácias, laboratórios e centros de imagem conveniados. Entidades médicas salvadorenhas manifestaram preocupação com a precarização da profissão."]
  ],
  ana:[
    ["Estônia","Referência mundial em saúde digital: desde 2008, um prontuário eletrônico nacional integra hospitais, clínicas e farmácias, e as receitas são quase todas digitais. É um exemplo de prontuário único como o PRONTO, embora o livro cite apenas El Salvador."]
  ],
  conn:[[4,"O FNMA segue a lógica de repasses por desempenho da LRG."],[12,"Inteligência artificial como eixo tecnológico nacional."],[14,"Clínica de saúde obrigatória em cada bairro desfavelizado."]]
},
/* ================= VIII ================= */
{ n:8, r:"VIII", part:2, theme:"Cultura e imprensa", title:"Chega de Saudade", sub:"Cultura e Imprensa", pages:"27–29",
  why:{g:0, t:"“Chega de Saudade”, a canção que em 1958 inaugurou a Bossa Nova, marca o momento em que o Brasil deixou de apenas importar cultura para exportá-la. A saudade a encerrar é a de “um país criativo, confiante e dono da própria narrativa”; cultura e imprensa são tratadas como “infraestrutura simbólica da nação”."},
  one:"Reformar — não extinguir — a Lei Rouanet, rever tombamentos e a gestão de museus, dar peso ao mercado no cinema, reunir MinC e MEC e criar um Código de Imprensa, com defesa firme da liberdade de expressão.",
  ps:[["Fomento capturado","Lei Rouanet como símbolo da distorção ideológica da cultura"]],
  as:[["Teto na Rouanet","captação limitada para grandes artistas, com reserva obrigatória para novos talentos"],["Rouanet → presídios","proposta já protocolada por Kim Kataguiri: redirecionar recursos para segurança máxima"],["Código de imprensa","novo marco para um setor sem lei própria desde 2009"]],
  prob:[
    ["A Rouanet como símbolo","A Lei 8.313/1991 tornou-se símbolo de fomento enviesado a favor das esquerdas, e criticá-la sempre foi ponto central do discurso da Missão. Mas o livro rejeita eliminar o fomento, que sustenta milhares de artistas, grupos e associações: propõe saneá-lo."],
    ["Patrimônio e museus","Política de tombamento do IPHAN “excessivamente generosa”, às vezes motivada por razões políticas; um sistema de museus (IBRAM) com fraca cultura de visitação e desequilíbrio orçamentário."],
    ["Cinema desconectado","Segundo André Sturm, a desconexão com o mercado é um dos principais problemas do audiovisual; o viés ideológico protegeria “máfias” que monopolizam influência e produzem censura informal."],
    ["Imprensa sem lei","Desde a não recepção da Lei 5.250/1967, a imprensa é regulada pela Constituição e pelos códigos Civil e Penal, o que daria poder exagerado às decisões judiciais."]
  ],
  quote:"Isenções fiscais fornecidas pelo Estado a empresas que custeiam apresentações de arte devem servir a propósitos educativos, não à propaganda política.",
  pvis:[{type:"crit", t:"As quatro frentes do capítulo", items:[["Fomento","Reforma da Lei Rouanet"],["Patrimônio e audiovisual","IPHAN, IBRAM, cinema e alta cultura musical"],["Ministérios","Nova fusão de Cultura e Educação"],["Imprensa","Defesa da liberdade e novo código"]]}],
  groups:[
    { t:"Fomento: Lei Rouanet",
      props:[
        {id:"c8-rouanet", k:"1", t:"Critérios objetivos, teto e reserva para novos talentos", it:["Critérios objetivos e públicos de avaliação, com indicadores mensuráveis","Publicação detalhada dos pareceres técnicos","Teto progressivo de captação para artistas e produtoras de alto faturamento","Categorias, editais e linhas próprias para iniciantes e projetos pequenos","Reserva obrigatória de percentual mínimo para novos talentos e primeiras obras"]},
        {id:"c8-presidios", t:"Rouanet para presídios", d:"Citada no destaque do capítulo: proposta já protocolada por Kim Kataguiri para redirecionar recursos à segurança máxima. O resumo não detalha o mecanismo."}
      ] },
    { t:"Patrimônio, museus e cinema",
      props:[
        {id:"c8-iphan", k:"2", t:"Modernizar o tombamento e o IPHAN", d:"Nova legislação de tombamento, registro e inventário e melhorias na gestão do instituto, inspiradas no plano de governo de Arthur do Val à Prefeitura de São Paulo (2020), crítico de tombamentos motivados por razões políticas."},
        {id:"c8-ibram", k:"3", t:"Reformar o IBRAM", d:"Descontingenciamento da folha e parcerias com Organizações Sociais na gestão dos museus."},
        {id:"c8-cinema", k:"4", t:"Mercado no cinema nacional", d:"Editais com mais peso para a viabilidade comercial dos filmes."}
      ] },
    { t:"Ministérios e imprensa",
      props:[
        {id:"c8-minc-mec", k:"5", t:"Reunificar Cultura e Educação", d:"Fundir os ministérios para aproximar “duas dimensões da formação nacional”, medida inspirada nos governos mais enxutos da direita."},
        {id:"c8-liberdade", k:"6", t:"Contra a regulação da mídia e da internet", d:"Oposição firme a propostas que reduzam a liberdade de expressão, sem abandonar a discussão de um novo código de imprensa."},
        {id:"c8-codigo", k:"7", t:"Código Unificado de Imprensa", d:"Critérios claros, garantias ao exercício do jornalismo e estruturas transparentes de responsabilização, para eliminar lacunas que geram insegurança jurídica."}
      ] }
  ],
  cmp:[
    ["Cultura e Educação","Ministérios separados (MinC recriado em 2023)","Ministério único"],
    ["Tombamento","Regido pelo Decreto-Lei 25/1937, ainda em vigor","Nova legislação de tombamento, registro e inventário"],
    ["Lei de Imprensa","Nenhuma desde 2009 (STF, ADPF 130)","Código Unificado de Imprensa"]
  ],
  ctx:[
    ["1958","Bossa Nova","A gravação de “Chega de Saudade” por João Gilberto, com composição de Tom Jobim e Vinicius de Moraes, é considerada o marco inicial da Bossa Nova. Nos anos 1960 o gênero conquistou os EUA: o álbum “Getz/Gilberto” (1964) venceu o Grammy de álbum do ano."],
    ["1991","Como funciona a Lei Rouanet","Criada no governo Collor e batizada em homenagem ao então secretário de Cultura, Sérgio Paulo Rouanet. Seu principal mecanismo é o incentivo fiscal: empresas e pessoas físicas patrocinam projetos aprovados pelo governo e abatem o valor do Imposto de Renda devido, dentro de limites. O dinheiro é público (imposto que deixa de ser pago), mas quem escolhe o projeto é o patrocinador."],
    ["1953–1985","Quando MEC e MinC eram um só","Até 1985, cultura e educação ficavam no mesmo Ministério da Educação e Cultura. O MinC foi criado em 1985, extinto por Collor em 1990, recriado em 1992, rebaixado a secretaria em 2019 e recriado em 2023. A proposta do livro volta ao arranjo anterior a 1985."],
    ["1937","IPHAN e o tombamento","O órgão de patrimônio nasceu em 1937 (como SPHAN), e o Decreto-Lei 25/1937, que regula o tombamento, foi editado nas primeiras semanas do Estado Novo e segue em vigor. Tombar um bem restringe reformas e demolições, mesmo em imóveis privados."],
    ["1967 · 2009","A Lei de Imprensa","A Lei 5.250/1967 foi editada durante o regime militar. Em 2009, o STF (ADPF 130) decidiu que ela era incompatível com a Constituição de 1988 como um todo, deixando o setor sem lei específica; o direito de resposta ganhou lei própria em 2015."]
  ],
  ana:[
    ["Coreia do Sul e a “onda coreana”","A Coreia investiu desde os anos 1990 em indústrias culturais com metas comerciais e de exportação — cinema, música, séries —, exemplo frequentemente citado de fomento orientado a mercado e projeção internacional, a ambição que o capítulo associa à Bossa Nova."]
  ],
  conn:[[9,"A fusão do MEC com o MinC."],[2,"Recursos da Rouanet redirecionados a presídios de segurança máxima."],[12,"A “correção da narrativa” sobre o agro nos materiais didáticos."]]
},
/* ================= IX ================= */
{ n:9, r:"IX", part:2, theme:"Educação", title:"Formar Elites, Cultivar o Povo", sub:"Educação", pages:"30–32",
  one:"Priorizar o ensino básico com o modelo do Ceará e o método fônico, impor ordem nas escolas — código de conduta, ranking de disciplina, escolas civis-militares — e trocar as cotas por bolsas de mérito com foco em STEM.",
  ps:[["379 vs 472","pontos em matemática: Brasil vs média da OCDE (PISA 2022)"],["73%","dos alunos sem o mínimo de matemática para exercer a cidadania"]],
  as:[["Método fônico","alfabetização com respaldo científico, adotada em escala nacional"],["Autoridade na escola","código nacional de conduta com sanções objetivas e fim da aprovação automática"],["Bolsas por mérito","no lugar das cotas, com realocação de vagas e recursos para STEM"]],
  prob:[
    ["PISA 2022","O Brasil ficou abaixo da OCDE e de vizinhos como Colômbia, Costa Rica, Peru, México e Chile, e muito abaixo de Portugal. Em matemática, 379 pontos contra 472; 73% sem o mínimo em matemática, 50% em leitura e 55% em ciências. Os resultados são estáveis ou declinantes desde 2006, atravessando governos petistas e o de Bolsonaro."],
    ["A rede pública está pior","Como a rede privada pontua bem mais, a situação da rede pública é pior do que a média indica."],
    ["Violência e desordem","Notificações do SINAN mostram forte alta da violência escolar entre 2013 e 2024 (em parte por aumento da notificação). Pesquisa do ONVE com a UFF indica que parcela relevante dos professores já sofreu agressões; a TALIS 2024 detalha a dificuldade de manter disciplina e silêncio em sala."],
    ["Os dois problemas centrais","Baixa qualidade do aprendizado e falta de ordem na escola — decisivos porque, num país de tradição universitária incipiente, a maior parte da população tem apenas a educação básica."]
  ],
  quote:"O PISA de 2022 comprova os problemas graves que acometem nosso sistema educacional.",
  pvis:[
    {type:"bars", t:"Matemática no PISA 2022 (pontos)", items:[["Média da OCDE",472,"472","muted"],["Brasil",379,"379","hi"]], max:520},
    {type:"bars", t:"Alunos brasileiros abaixo do nível mínimo (PISA 2022)", items:[["Matemática",73,"73%","hi"],["Ciências",55,"55%","hi"],["Leitura",50,"50%","hi"]], max:100, src:"Números citados no capítulo IX."}
  ],
  groups:[
    { t:"Aprendizado",
      props:[
        {id:"c9-qualidade", k:"1", t:"Qualidade no básico", d:"Foco nas disciplinas básicas do currículo, língua portuguesa e matemática, com formação sólida em ambas."},
        {id:"c9-ceara", k:"9", t:"Modelo do Ceará e método fônico", d:"Grupo de trabalho para levar as inovações cearenses a todo o país, sobre uma nova base do Sistema Nacional de Educação que dê mais competências à União; a partir daí, adoção do método fônico, já contemplado na BNCC e na Política Nacional de Alfabetização."},
        {id:"c9-progressao", k:"10", t:"Fim gradual da progressão continuada", d:"Progressão continuada apenas parcial até sua revogação; a evasão escolar passa a ser enfrentada por outros instrumentos."}
      ] },
    { t:"Ordem e disciplina", d:"Por meio da disciplina, o livro quer também combater “um vício da cultura brasileira atual”: indisciplina, desordem e desrespeito à hierarquia.",
      props:[
        {id:"c9-ordem", k:"2", t:"Ordem disciplinar rígida", d:"Restaurar a autoridade dos pedagogos e melhorar o aprendizado; exige reavaliar o papel do ECA e uniformizar a conduta do estudante, com implicações punitivas, em diálogo com a comunidade pedagógica."},
        {id:"c9-codigo", k:"6", t:"Código nacional de conduta do estudante", d:"Punições objetivas e classificadas para comportamentos inadequados, amplamente divulgadas nas escolas."},
        {id:"c9-ranking", k:"7", t:"Ranking de disciplina modulando o VAAR", d:"Ranking oficial de disciplina que modula o VAAR — a parcela do Fundeb distribuída por resultados —, que seria ampliado: escolas mais ordeiras recebem mais recursos, e gestores que mantêm a disciplina são premiados. Exige centralizar competências na União."},
        {id:"c9-civicomilitar", k:"8", t:"Escolas civis-militares em situação crítica", d:"Para escolas em regiões de alta criminalidade ou com graves problemas disciplinares, como medida provisória para estancar a violência, com exemplos do Brasil e de El Salvador. Requer ampliar a competência da União."}
      ] },
    { t:"Ensino superior e talentos",
      props:[
        {id:"c9-cotas", k:"4", t:"Abolir as cotas", d:"Fim do sistema de cotas “na educação brasileira e em geral”, substituído por bolsas de mérito."},
        {id:"c9-superior", k:"5", t:"Alinhamento estratégico no lugar da autonomia universitária", d:"Realocar recursos de cursos “bacharelescos” para STEM, criar faculdades ligadas ao plano industrial da Missão e centros de pesquisa em terras raras, da extração do minério aos componentes avançados. Modelos: China, Cingapura e Israel."},
        {id:"c9-talentos", k:"3", t:"Retenção de talentos", d:"Programa contra a fuga de cérebros, aliando produção, empreendedorismo e educação de ponta."}
      ] }
  ],
  cmp:[
    ["Alfabetização","Cada rede escolhe seus métodos","Método fônico em escala nacional"],
    ["Progressão","Progressão continuada em várias redes","Parcial até ser revogada"],
    ["Acesso às universidades federais","Cotas sociais e raciais (Lei 12.711/2012)","Bolsas por mérito"],
    ["Escolas civis-militares","Programa federal encerrado em 2023; alguns estados mantêm modelos próprios","Adoção pela União nas escolas em situação crítica"],
    ["VAAR (Fundeb)","Parcela distribuída por indicadores de aprendizagem e gestão","Ampliado e ligado também a um ranking de disciplina"]
  ],
  ctx:[
    ["Desde 2000","PISA","Avaliação da OCDE aplicada a cada três anos a estudantes de 15 anos, em matemática, leitura e ciências. A edição de 2022 reuniu 81 países e economias."],
    ["2007–hoje","O modelo do Ceará","A partir da experiência de Sobral, o Ceará criou em 2007 o PAIC (Alfabetização na Idade Certa) e passou a distribuir parte do ICMS aos municípios conforme seus resultados educacionais. Com avaliação constante, material estruturado e apoio técnico às redes, municípios cearenses passaram a liderar o IDEB nos anos iniciais."],
    ["Conceito","Método fônico","Ensina explicitamente a relação entre letras e sons antes de avançar para a leitura de textos. Revisões científicas, como a do National Reading Panel dos EUA (2000), apontaram vantagem da instrução fônica sistemática. No Brasil, o debate opôs essa abordagem a métodos globais e construtivistas."],
    ["2019 · 2023","Política Nacional de Alfabetização","Instituída por decreto em 2019, com ênfase na instrução fônica; foi revogada em 2023 e substituída pelo Compromisso Nacional Criança Alfabetizada. O livro a cita como respaldo ao método."],
    ["2019 · 2023","Escolas cívico-militares","O programa federal (Pecim), lançado em 2019 com militares na gestão disciplinar, foi encerrado pelo governo federal em 2023. Estados como Paraná e São Paulo mantêm programas próprios. O livro usa a expressão “escolas civis-militares”."],
    ["2012","Lei de Cotas","A Lei 12.711/2012 reserva metade das vagas das universidades e institutos federais a alunos de escola pública, com subcotas por renda e por cor ou etnia. O STF considerou as cotas raciais constitucionais em 2012; a lei foi revista e mantida em 2023."],
    ["2020","VAAR","O novo Fundeb (EC 108/2020) criou uma complementação da União distribuída a redes que cumprem condicionalidades de gestão e melhoram indicadores de aprendizagem — o mecanismo que o livro quer ampliar e ligar também à disciplina."],
    ["1996 · 1998","Progressão continuada","Permitida pela LDB de 1996, que admite a organização em ciclos, e adotada em larga escala por São Paulo a partir de 1998. Reduz a reprovação dentro de cada ciclo para combater a evasão; críticos a apelidaram de “aprovação automática”."]
  ],
  ana:[
    ["Cingapura","Aparece sistematicamente no topo do PISA: currículo nacional exigente em matemática, carreira docente seletiva e forte orientação a ciências e engenharia."],
    ["Israel","Referência em formação de quadros para tecnologia, com universidades como o Technion ligadas ao setor de defesa e ao ecossistema de startups."],
    ["China","O exame nacional de acesso ao ensino superior (gaokao) seleciona por mérito em escala gigantesca, e o país forma o maior contingente de engenheiros e cientistas do mundo."]
  ],
  conn:[[8,"A fusão do MEC com o MinC."],[11,"Centros universitários de pesquisa em terras raras."],[5,"A crise de capital humano trava a produtividade."],[2,"Escolas civis-militares em regiões violentas."]]
},
/* ================= X ================= */
{ n:10, r:"X", part:3, theme:"Zonas Econômicas Especiais", title:"O Nordeste é Solução", sub:"Zonas Econômicas Especiais", pages:"34–36",
  why:{g:0, t:"Tratado por décadas “como um problema a ser socorrido”, o Nordeste seria “a solução à espera de coordenação”: a maior fronteira de energia renovável do país, portos voltados ao Atlântico, mão de obra jovem e capacidade ociosa."},
  one:"Criar Zonas Econômicas Especiais com incentivos fiscais, licenças em até 15 dias e infraestrutura de ponta — começando por três polos no Nordeste — e estender o modelo a defesa, terras raras e desfavelização.",
  ps:[["R$ 70 bi/ano","em importações estratégicas e de duplo uso (CNI)"],["≈ 6 milhões","de unidades: o déficit habitacional brasileiro (FJP)"]],
  as:[["15 dias","prazo máximo de licenças nas ZEEs, via agências one-stop shop"],["3 polos iniciais","Suape (H₂ verde), Pecém–Araripe (aço verde) e Aratu-Camaçari (baterias e chips)"],["8 estágios","cadeia integral de terras raras, da extração ao semicondutor"]],
  prob:[
    ["Produtivos e estratégicos","", ["desindustrialização precoce","estagnação da produtividade","custo Brasil elevado","dependência de importações estratégicas e de duplo uso — cerca de R$ 70 bi por ano (CNI)","tecnologias críticas concentradas no exterior, sobretudo terras raras na China"]],
    ["Legais e regulatórios","", ["ZPEs sem autonomia fiscal para incentivos competitivos","marco trabalhista inflexível","licenciamento lento e burocrático","limites à propriedade estrangeira de terras","falta de agências ágeis que concentrem os procedimentos (one-stop shops)"]],
    ["Produção e infraestrutura","", ["falta de infraestrutura dedicada: energia, 5G e 5G-Advanced (com 6G no horizonte), logística portuária","cadeias de alto valor fragmentadas, como a de terras raras","mineração sem padrões de baixo carbono","Base Industrial de Defesa fragmentada","déficit habitacional de ~6 milhões de unidades (FJP) e alta informalidade habitacional e do trabalho"]]
  ],
  quote:"O Brasil enfrenta desafios estruturais críticos em sua capacidade produtiva e industrial.",
  groups:[
    { t:"O modelo das ZEEs: três pilares", d:"Perímetros com regras tributárias, regulatórias e de infraestrutura próprias para atrair indústria de alto valor, inspirados em Shannon (Irlanda) e Shenzhen (China), adaptados à realidade brasileira.",
      props:[
        {id:"c10-fiscal", t:"Estímulos fiscais", d:"Suspensão de tributos aduaneiros e regime específico de IBS/CBS para a zona (LC 214/2025)."},
        {id:"c10-licencas", t:"Licenças em até 15 dias", d:"Agências administrativas ágeis (one-stop shops) concentram as aprovações."},
        {id:"c10-infra", t:"Infraestrutura de classe mundial", d:"Energia, conectividade 5G/6G e logística portuária otimizada, dedicadas à zona."},
        {id:"c10-governanca", t:"Governança por PPPs e consórcios", d:"Polos geridos por Parcerias Público-Privadas (Lei 11.079/2004) e, quando cruzarem divisas estaduais, por Consórcios Públicos (Lei 11.107/2005), com expansão prevista para outros estados."}
      ] },
    { t:"Três polos iniciais no Nordeste",
      props:[
        {id:"c10-suape", t:"Polo de Suape (PE)", d:"Hidrogênio verde e petroquímica, com gás natural fornecido pela Copergás."},
        {id:"c10-pecem", t:"Polo Pecém (CE) – Araripe (PE)", d:"Polo interestadual de aço de baixo carbono, cadeia do gesso do Araripe e fertilizantes."},
        {id:"c10-aratu", t:"Polo Aratu-Camaçari (BA)", d:"Mobilidade elétrica, baterias e semicondutores."}
      ] },
    { t:"ZEEs de Reurbanização e Desfavelização", d:"Atacam ao mesmo tempo o déficit habitacional e a informalidade habitacional e do trabalho.",
      props:[
        {id:"c10-urbanas", t:"ZEEs urbanas", it:["desenvolvimento vertical de uso misto","integração vertical de cadeias produtivas locais","governança articulada com segurança integrada","fundos de retenção de riqueza nas comunidades"]}
      ],
      vis:[{type:"flow", t:"As quatro fases, em sequência", steps:[["Segurança inicial",""],["Limpeza urbana",""],["Infraestrutura básica",""],["Implementação da ZEE",""]], note:"Inspirações citadas: Shenzhen, London Docklands e Tanger Med."}]
    },
    { t:"ZEEs temáticas de soberania",
      props:[
        {id:"c10-zeed", t:"ZEE de Defesa (ZEED) — Vale do Paraíba (SP)–Itajubá (MG)", d:"Reduzir a dependência de importações estratégicas e de duplo uso, com governança conjunta das Forças Armadas. Focos:", it:["ciberdefesa","sistemas autônomos","tecnologia aeroespacial"]},
        {id:"c10-terras-raras", t:"ZEE de Terras Raras", d:"Verticalizar a cadeia aproveitando a segunda maior reserva do mundo (~23%, USGS 2026): regime tributário favorável, transferência de tecnologia negociada por offset, financiamento, centro de P&D e formação profissional, contra a dominância chinesa no refino e nos ímãs."}
      ],
      vis:[{type:"flow", t:"A cadeia integral de terras raras em 8 estágios", steps:[["Extração",""],["Separação química",""],["Refino",""],["Ligas",""],["Ímãs",""],["Motores",""],["Componentes de baterias",""],["Semicondutores e defesa",""]]}]
    }
  ],
  cmp:[
    ["Regime especial","ZPEs sem autonomia fiscal para incentivos competitivos","ZEEs com IBS/CBS específico e suspensão aduaneira"],
    ["Licenças","Processos lentos, em vários órgãos","Até 15 dias, em agência única"],
    ["Visão do Nordeste","Região a ser socorrida","Fronteira de energia, portos e indústria"]
  ],
  ctx:[
    ["1959","Shannon (Irlanda)","Criada ao lado do aeroporto de Shannon, é considerada a primeira zona franca industrial moderna do mundo. Isenções e agilidade atraíram multinacionais para uma região rural e ajudaram a moldar a estratégia irlandesa de atração de investimento estrangeiro."],
    ["1980","Shenzhen (China)","Uma das primeiras Zonas Econômicas Especiais de Deng Xiaoping, montada ao lado de Hong Kong. De cidade pequena, virou uma metrópole de mais de 17 milhões de habitantes e centro mundial de eletrônicos."],
    ["1967","Zona Franca de Manaus","O precedente brasileiro mais conhecido: criada no regime militar para desenvolver a Amazônia, com isenções para a indústria instalada. É citada tanto como caso de geração de empregos quanto de custo fiscal elevado."],
    ["1988 · 2007","ZPEs","As Zonas de Processamento de Exportação foram criadas em 1988 e reformuladas em 2007, mas poucas saíram do papel — a de Pecém (CE) é a principal em operação. O livro aponta a falta de autonomia fiscal como limite do modelo."],
    ["1981–1998","London Docklands","A antiga área portuária do leste de Londres, degradada após o declínio do porto, foi entregue a uma corporação de desenvolvimento com poderes especiais. Dali nasceu Canary Wharf, hoje um dos centros financeiros da cidade."],
    ["2007","Tanger Med (Marrocos)","Complexo portuário e industrial perto do Estreito de Gibraltar, cercado de zonas francas com montadoras e fornecedores. Tornou-se um dos maiores portos de contêineres do Mediterrâneo e da África."],
    ["2021–2025","Camaçari e os carros elétricos","Após a saída da Ford em 2021, o complexo de Camaçari (BA) foi adquirido pela chinesa BYD para produzir carros elétricos e híbridos — contexto do polo de mobilidade elétrica proposto."]
  ],
  conn:[[11,"A ZEE de Terras Raras, detalhada no capítulo seguinte."],[12,"ZEAIs: as ZEEs aplicadas à inteligência artificial."],[14,"A desfavelização em escala nacional."],[13,"ZEE de Defesa e Base Industrial de Defesa."],[6,"Portos e energia para os polos."]]
}
);
/* Livro Amarelo — dados (parte 3): capítulos XI–XIV, glossário e linha do tempo */
CHAPTERS.push(
/* ================= XI ================= */
{ n:11, r:"XI", part:3, theme:"Terras raras e indústria", title:"Cum Mente et Malleo", sub:"Terras Raras e Indústria", pages:"37–40",
  why:{g:0, t:"“Com a mente e o martelo”: lema da Escola de Minas de Ouro Preto, fundada em 1876 por Claude-Henri Gorceix. A tese do capítulo é a mesma — unir o martelo (mineração e indústria) à mente (tecnologia, pesquisa e refino). “Sem ciência e indústria, exporta-se minério e importa-se dependência.”"},
  one:"Transformar a segunda maior reserva de terras raras do mundo em poder nacional: parcerias com EUA, Europa e Ásia, planta-piloto de refino em 2029–2030, R$ 20 bi em uma década e uma PEC que faça do setor questão de segurança nacional.",
  ps:[["90% e 90%","do refino e dos ímãs permanentes hoje concentrados na China"],["2ª maior","reserva do mundo (23%, USGS 2026) — exportada bruta, sem refino nacional"]],
  as:[["R$ 20 bi","em uma década: BNDES (50%), agências dos EUA (35%), fundos verdes (10%)"],["2029–2030","planta-piloto de separação e refino como prova de conceito"],["Questão de Estado","terras raras blindadas por emenda constitucional contra ciclos eleitorais"]],
  prob:[
    ["O que são","17 elementos químicos — escândio, ítrio e os 15 lantanídeos —, presentes em minerais como monazita, xenotímio, loparita e argilas iônicas. Essenciais para carros elétricos, eletrônicos, turbinas eólicas, catalisadores, ímãs de alta performance, eVTOLs e robótica."],
    ["Reserva sem poder","O Brasil tem ~23% das reservas (21 mi t de óxidos, USGS 2026), atrás só da China (44 mi t), que responde por mais de 90% do refino e ~90% dos ímãs. Exportamos minério bruto e importamos produtos processados — dependência que expõe o país a embargo, bloqueio ou retaliação."],
    ["Desafios críticos","", ["falta de marcos legais permanentes e previsíveis","ausência de financiamento estatal robusto e dedicado","ausência de parcerias estruturadas com EUA, UE e Japão","isolamento nos foros multilaterais sobre minerais críticos","fragilidade diante dos ciclos políticos domésticos"]],
    ["Governança e risco geopolítico","", ["pouco poder de barganha como ator isolado","risco de retaliação chinesa: dumping, bloqueio de mercado, embargo tecnológico","falta de inteligência estratégica sobre cenários de conflito","falta de visão que una terras raras, defesa e energia","falta de capacidade técnica no Estado para coordenar o projeto"]],
    ["Três trunfos","O Brasil tem o trunfo geológico (as reservas), o energético (matriz limpa para processamento limpo) e o diplomático (neutralidade e estabilidade democrática). Falta um pacto de longo prazo — emenda constitucional ou lei de segurança nacional — que blinde o setor."]
  ],
  quote:"Os problemas políticos e institucionais que permeiam o setor refletem a ausência de uma estratégia de Estado de longo prazo com blindagem constitucional e institucional.",
  pvis:[{type:"bars", t:"Reservas de terras raras (milhões de toneladas de óxidos)", items:[["China",44,"44","muted"],["Brasil",21,"21 · ≈ 23% do total mundial","hi"]], max:52, src:"Dados do USGS (2026) citados no capítulo XI."}],
  groups:[
    { t:"Primeiro escalão: EUA e União Europeia", d:"Parceiros prioritários para infraestrutura crítica, tecnologia de processamento limpo e acesso a mercados de defesa de alta tecnologia.",
      props:[
        {id:"c11-offtake", t:"Acordos de off-take e transferência tecnológica", d:"Acordos bilaterais com EUA e UE que garantam compras de longo prazo e transferência de tecnologia de processamento, elevando a acordo federal a agenda aberta pela Embaixada dos EUA com o Instituto Brasileiro de Mineração (IBRAM) em 2025, que evoluiu para o Fórum Brasil-EUA sobre Minerais Críticos (2026)."},
        {id:"c11-zee", t:"ZEEs de processamento e hubs de tecnologia", d:"Zonas dedicadas ao processamento e à manufatura de componentes, com incentivos ao investimento estrangeiro qualificado, e hubs que aproximem a pesquisa em geologia, engenharia, geografia e química."},
        {id:"c11-cadeias", t:"Integração às cadeias dos EUA e da Europa", d:"Usar os instrumentos americanos de financiamento de minerais críticos (DFC e Defense Production Act) e o europeu Critical Raw Materials Act para posicionar o Brasil como fornecedor confiável de semicondutores e defesa."},
        {id:"c11-piloto", t:"Planta-piloto em 2029–2030", d:"Prova de conceito de separação e refino antes da escala comercial, expandindo projetos como o MagBras (“Da Mina ao Ímã”, do Programa Mover). O aporte pode vir do Fundo Garantidor da Atividade Mineral (FGAM), previsto no PL 2.780/2024 — aprovado na Câmara em 2026 —, com R$ 2 bi iniciais, podendo chegar a R$ 5 bi conforme o espaço fiscal."},
        {id:"c11-bndes", t:"Consórcio de financiamento liderado pelo BNDES", d:"O banco como gestor de investimentos, mitigador de risco e intermediador de parcerias internacionais, com PPPs quando houver infraestrutura."},
        {id:"c11-licenciamento", t:"Licenciamento simplificado", d:"Com base na Lei Geral do Licenciamento Ambiental (Lei 15.190/2025, em vigor desde fevereiro de 2026), para ganhar competitividade rumo ao refino, a fase de maior valor."},
        {id:"c11-retorno", t:"Receita das terras raras financiando o plano", d:"O retorno financeiro ajudaria a custear infraestrutura, segurança pública, SUS e outros projetos estratégicos do livro."}
      ] },
    { t:"Segundo e terceiro escalões", d:"Japão, Índia, Canadá, Vietnã e Taiwan: manufatura avançada, mercados asiáticos, governança de minerais críticos e cadeias de semicondutores.",
      props:[
        {id:"c11-japao", t:"Japão: ímãs permanentes", d:"Cooperação técnica para manufatura de ímãs de alta performance, essenciais para defesa e energia renovável."},
        {id:"c11-india", t:"Índia: mercados do Sul Global", d:"Acesso a mercados do Sul Global e rotas de comercialização fora do eixo Ocidente–China."},
        {id:"c11-canada", t:"Canadá, Vietnã e Taiwan", d:"Governança da cadeia de suprimento, proteção intelectual e integração em ecossistemas de semicondutores."},
        {id:"c11-moeda", t:"Confiabilidade como “moeda de troca”", d:"Oferecer ao Ocidente um fornecedor democrático, estável, de matriz limpa e distante de conflitos geopolíticos tradicionais."}
      ] },
    { t:"Financiamento, blindagem e cronograma",
      props:[
        {id:"c11-pec", t:"PEC da segurança nacional", d:"Emenda constitucional declarando as terras raras questão de segurança nacional, blindando a política setorial contra flutuações eleitorais."},
        {id:"c11-funding", t:"R$ 20 bi em uma década", d:"BNDES (50%), agências americanas (35%), fundos verdes europeus (10%) e capital privado (5%)."},
        {id:"c11-cronograma", t:"Cronograma em quatro etapas", d:"De 2027 a 2036, dos marcos legais à manufatura de ímãs e semicondutores."},
        {id:"c11-risco", t:"Risco compartilhado", d:"O Estado mantém o controle estratégico e transfere riscos operacionais e tecnológicos a parceiros privados qualificados."},
        {id:"c11-seguros", t:"Garantias e seguros", d:"Proteção política e comercial contra retaliação chinesa, instabilidade doméstica e mudanças em ciclos eleitorais internacionais."},
        {id:"c11-fundo", t:"Fundo soberano ou de estabilização", d:"Proteger a receita das oscilações do mercado de terras raras e dar previsibilidade à pesquisa e ao financiamento de longo prazo."}
      ],
      vis:[
        {type:"split", t:"De onde viriam os R$ 20 bi", segs:[["BNDES",50,"sf","50%"],["Agências dos EUA",35,"ink","35%"],["Fundos verdes europeus",10,"mid","10%"],["Capital privado",5,"muted","5%"]]},
        {type:"flow", t:"Cronograma", steps:[["2027–2028","Marcos legais e início da mineração"],["2029–2030","Planta-piloto de separação"],["2030–2032","Operação em escala comercial"],["2032–2036","Ímãs e semicondutores"]]}
      ] }
  ],
  outro:"O projeto é descrito como “um compromisso inadiável (e inabalável) com a soberania nacional”.",
  cmp:[
    ["O que o Brasil exporta","Minério bruto","Produtos refinados, ímãs e componentes"],
    ["Refino no país","Sem refino nacional em escala","Planta-piloto em 2029–2030; escala comercial a partir de 2030"],
    ["Estatuto do setor","Política sujeita a mudanças de governo","Questão de segurança nacional por emenda constitucional"]
  ],
  ctx:[
    ["1876","Escola de Minas de Ouro Preto","Fundada pelo geólogo francês Claude-Henri Gorceix, trazido por D. Pedro II, formou os primeiros engenheiros de minas do país e hoje integra a UFOP. Gorceix defendia unir trabalho de campo e ciência, contra a tradição livresca."],
    ["1880s–1950s","O Brasil já liderou esse mercado","Areias monazíticas do litoral da Bahia e do Espírito Santo fizeram do Brasil um dos maiores produtores mundiais de monazita, principal fonte de terras raras (e de tório, usado então em camisas de lampiões a gás). O país perdeu espaço para os EUA e, a partir dos anos 1990, para a China."],
    ["2010 · 2025","Terras raras como arma","Em 2010, durante uma disputa territorial, a China restringiu exportações de terras raras ao Japão; em 2025, impôs licenças de exportação para terras raras e ímãs em meio à guerra comercial com os EUA. Episódios assim explicam a corrida ocidental por fornecedores alternativos."],
    ["1950 · 2019 · 2024","DFC, Defense Production Act e CRMA","O Defense Production Act (1950) permite ao governo americano financiar e priorizar produção estratégica; a DFC (2019) é a agência dos EUA que financia projetos no exterior. O Critical Raw Materials Act europeu (2024) fixa metas para 2030, como não depender de um único país terceiro para mais de 65% de cada matéria-prima estratégica."],
    ["Conceito","Off-take agreement","Contrato em que o comprador se compromete, antes da produção, a adquirir parte dela por prazo longo. Dá previsibilidade de receita e facilita financiar a mina ou a refinaria."],
    ["2024–hoje","MagBras e Programa Mover","O MagBras é um projeto liderado pelo Senai de Minas Gerais para dominar a cadeia do minério ao ímã de terras raras. O Mover (Mobilidade Verde e Inovação, 2024) é o programa federal de incentivo à descarbonização da indústria automotiva que apoia iniciativas como essa."]
  ],
  ana:[
    ["EUA e MP Materials (2025)","Para reduzir a dependência da China, o Departamento de Defesa americano tornou-se acionista da MP Materials, dona da mina de Mountain Pass, com preço mínimo e compromisso de compra da produção de ímãs — exemplo concreto do tipo de off-take e financiamento estatal proposto no capítulo."]
  ],
  conn:[[10,"A ZEE de Terras Raras em oito estágios."],[9,"Centros universitários de pesquisa em terras raras."],[12,"O mesmo PL 2.780/2024 trata de fertilizantes."],[13,"Soberania e Base Industrial de Defesa."]]
},
/* ================= XII ================= */
{ n:12, r:"XII", part:3, theme:"Agricultura e tecnologia", title:"Celeiro do Mundo", sub:"Agro e Inteligência Artificial", pages:"41–43",
  one:"Fazer do Brasil fornecedor global de comida e de computação: o AgroBrasil 2030 (segurança no campo, fertilizantes, agroindústria) e o Marco Brasileiro da Inteligência Artificial (capital, talentos, datacenters, dados do agro e o Projeto Abaporu).",
  ps:[["85%","dos 45 milhões de toneladas de fertilizantes consumidos por ano vêm do exterior"],["R$ 288/mês","renda líquida média por estabelecimento da reforma agrária (INCRA)"]],
  as:[["85% → 50%","teto de importação de fertilizantes até 2035, com metas auditáveis a cada 2 anos"],["US$ 50 bi/ano","potencial da exportação de inferência computacional — na ordem da soja"],["10 mil GPUs","cluster soberano de pesquisa com USP, Unicamp, UFRJ e ITA"]],
  prob:[
    ["Comida e computação","O século XXI seria definido por dois insumos: alimento, para uma população que se aproxima de 10 bilhões, e computação, base da nova economia. A guerra comercial EUA–China gira em torno deles — soja, milho, fertilizantes e proteína de um lado; chips, energia e tokens de IA do outro."],
    ["Vantagens únicas","Em 2025, o agro respondeu por 48,5% das exportações (US$ 169,2 bi), gerou superávit setorial de US$ 149 bi e R$ 3,2 tri de PIB — mais de um quarto da economia. A matriz elétrica é 88% renovável (média global ~32%), e a posição geográfica favorece cabos submarinos."],
    ["Volume sem valor","Somos potência em volume bruto; outros agregam valor — a Alemanha reexporta café que nem produz. Os fertilizantes vêm 85% de fora, expostos a sanções a Rússia e Belarus. A política fundiária teria estimulado invasões, e a reforma agrária soma ~140 mi ha destinados (~88 mi em assentamentos consolidados), com renda média de R$ 288 por mês por estabelecimento."],
    ["Atraso na IA","O Plano Brasileiro de IA (julho de 2024, R$ 23 bi em quatro anos) chegou à metade sem resultados substantivos; o REDATA, medida provisória para datacenters, expirou em fevereiro de 2026 sem virar lei; em outubro de 2025, a OpenAI escolheu a Argentina, e não o Brasil, para o Stargate latino-americano (500 MW, até US$ 25 bi)."],
    ["Um só problema","Faltam ao Brasil a arquitetura institucional, regulatória, fiscal e narrativa que transforme vantagens em produto, divisas e poder: política fundiária e energética capturadas, marcos legais defasados, pouco capital paciente, infraestrutura atrasada e uma educação que produz desinformação sobre o agro e êxodo de talentos em IA."]
  ],
  quote:"O século XXI será definido por dois insumos estratégicos: comida e computação.",
  pvis:[{type:"split", t:"Participação do agro nas exportações brasileiras (2025)", segs:[["Agronegócio",48.5,"sf","48,5%"],["Demais setores",51.5,"muted","51,5%"]], src:"Número citado no capítulo XII (US$ 169,2 bi exportados pelo agro)."}],
  groups:[
    { t:"AgroBrasil 2030 — cinco pilares",
      props:[
        {id:"c12-invasoes", k:"1", t:"Fim das invasões e segurança jurídica", d:"Revogar a Nota Técnica nº 4/2025 do Ministério do Desenvolvimento Agrário, instruir as polícias a reprimir invasões conforme o Código Penal e endurecer a lei penal sobre esbulho possessório."},
        {id:"c12-assentamentos", k:"2", t:"Auditoria dos 140 milhões de hectares", d:"Nenhum novo assentamento enquanto os existentes não atingirem produtividade compatível com a exigida dos demais imóveis rurais; reformular o Decreto 11.637/2023 para priorizar tempo de atividade agrária, e não tempo de acampamento."},
        {id:"c12-fertilizantes", k:"3", t:"Soberania em fertilizantes", d:"Meta: nenhuma colheita a partir de 2035 dependente de fertilizante russo, bielorrusso ou marroquino.", it:["Executar e ampliar o Plano Nacional de Fertilizantes (Decreto 10.991/2022)","Sancionar e regulamentar o PL 2.780/2024 (Política Nacional de Minerais Críticos e licenciamento acelerado de fosfato, potássio e nitrogênio)","Construir no Congresso o marco da mineração controlada em terras indígenas, que abrigam reservas de fosfato e potássio"]},
        {id:"c12-agroindustria", k:"4", t:"Agroindústria e cadeias completas", d:"Replicar o modelo do suco de laranja no café, na soja, no cacau e na carne, com ZEEs, crédito do BNDES condicionado a metas de exportação e acordos bilaterais; reorganizar o Plano Safra para premiar quem investe em processamento."},
        {id:"c12-narrativa", k:"5", t:"Correção da narrativa sobre o agro", d:"Auditoria técnica permanente de livros didáticos e materiais do MEC, com a Embrapa e universidades agrárias, para garantir uma representação factual do setor."}
      ],
      vis:[{type:"bars", t:"Fertilizantes importados", items:[["Hoje",85,"85%","hi"],["Teto da Missão para 2035",50,"50%","pos"]], max:100}]
    },
    { t:"Marco Brasileiro da Inteligência Artificial (MBIA)", d:"Catorze medidas em cinco eixos — “nenhuma medida isolada resolve; o conjunto, sim, pode mudar o regime”. O resumo descreve os eixos, não as 14 medidas uma a uma.",
      props:[
        {id:"c12-eixo1", t:"Eixo I · Capital e tributos", d:"Reduzir impostos sobre empresas de tecnologia, facilitar stock options e ampliar o venture capital de fundos brasileiros."},
        {id:"c12-eixo2", t:"Eixo II · Talentos", d:"Reter, formar e repatriar jovens talentos."},
        {id:"c12-eixo3", t:"Eixo III · Datacenters e exportação de inferência", d:"Incentivos a datacenters e marco regulatório para o Brasil virar o maior exportador de inferência computacional do hemisfério ocidental — com o Nordeste como a “Arábia Saudita do Brasil”."},
        {id:"c12-eixo4", t:"Eixo IV · Base Agro-Bio Nacional", d:"Unificar tecnicamente o maior acervo de dados agropecuários do planeta, viabilizando drones agrícolas e robótica com IA brasileira."},
        {id:"c12-eixo5", t:"Eixo V · Projeto Abaporu e ZEAIs", d:"Abaporu: laboratório nacional de IA com capital privado majoritário e governança independente. ZEAIs: Zonas Econômicas de Alta Inteligência, subtipo das ZEEs com regime regulatório, tributário e energético próprio para a cadeia da IA."},
        {id:"c12-cluster", t:"Cluster soberano de 10 mil GPUs", d:"Citado no destaque do capítulo: cluster de pesquisa com USP, Unicamp, UFRJ e ITA."}
      ] }
  ],
  outro:"“A revolução do agro brasileiro nas últimas cinco décadas é uma das maiores conquistas civis e científicas da nossa história. Trataremos como tal.”",
  cmp:[
    ["Fertilizantes importados","85%","Teto de 50% até 2035"],
    ["Seleção de assentados","Critérios do Decreto 11.637/2023","Prioridade ao tempo de atividade agrária"],
    ["Datacenters","REDATA expirou sem virar lei","Regime próprio nas ZEAIs"]
  ],
  ctx:[
    ["1973","Embrapa e a revolução do Cerrado","Criada em 1973, a Embrapa adaptou a soja ao clima tropical, desenvolveu a correção dos solos ácidos do Cerrado e a fixação biológica de nitrogênio (com pesquisas de Johanna Döbereiner). Em poucas décadas, o Brasil passou de importador de alimentos a um dos maiores exportadores do mundo."],
    ["1964 · 1970","Reforma agrária","O Estatuto da Terra foi aprovado em 1964, no início do regime militar, e o INCRA criado em 1970. Desde a redemocratização, a política de assentamentos cresceu sob pressão de movimentos como o MST (1984)."],
    ["2022","Plano Nacional de Fertilizantes","Lançado em 2022, em meio à guerra na Ucrânia e às sanções a Rússia e Belarus, grandes fornecedores do Brasil. A meta oficial é reduzir a dependência de importação para cerca de 45% até 2050; a Missão propõe 50% já em 2035."],
    ["1928","Abaporu","Quadro de Tarsila do Amaral (1928) cujo nome, em tupi, significa “homem que come gente”. Inspirou o Manifesto Antropófago de Oswald de Andrade: devorar a cultura estrangeira para produzir algo próprio — uma escolha de nome que sugere absorver tecnologia de fora para criar algo brasileiro."],
    ["Conceito","Inferência","É o uso de um modelo de IA já treinado para responder a pedidos. Exportar inferência significa vender, a partir do Brasil, o processamento que roda esses modelos, em datacenters alimentados por energia barata e limpa — daí a comparação com o petróleo da Arábia Saudita."],
    ["2024–2026","PBIA, REDATA e Stargate","O Plano Brasileiro de Inteligência Artificial foi lançado em 2024 com R$ 23 bi previstos até 2028. Em 2025, a MP do REDATA ofereceu incentivos a datacenters, mas perdeu a validade em 2026. No mesmo ano de 2025, a OpenAI anunciou o “Stargate Argentina” com parceiros locais."]
  ],
  ana:[
    ["Suco de laranja","O exemplo que o livro quer replicar: o Brasil não exporta só a fruta, mas o suco industrializado, e responde pela maior parte do comércio mundial do produto."],
    ["Alemanha e o café","Sem plantar café, a Alemanha é grande exportadora de café torrado e processado — o valor agregado que falta à pauta brasileira, segundo o livro."]
  ],
  conn:[[10,"ZEAIs, o subtipo das ZEEs para a IA."],[11,"O PL 2.780/2024 também cria a política de minerais críticos."],[6,"Energia e logística para o agro e os datacenters."],[13,"Comida e computação como base da projeção externa."]]
},
/* ================= XIII ================= */
{ n:13, r:"XIII", part:3, theme:"Política externa", title:"Brasil Poderoso", sub:"A Agenda Geopolítica da Missão", pages:"44–47",
  one:"Uma doutrina de política externa pragmática e permanente: o Brasil como árbitro do Sul Global e líder de um pacto continental contra o tráfico, com fronteiras vigiadas, indústria de defesa forte e ciclo nuclear completo.",
  ps:[["4,2% do PIB","custo anual do crime organizado: mais de R$ 450 bilhões"],["Menos de 20%","da faixa de fronteira coberta pelo SISFRON após uma década — só ⅓ do orçamento saiu"]],
  as:[["Pacto Interamericano","guerra ao tráfico elevada a questão militar, liderada pelo Brasil"],["Fronteira 100% vigiada","SISFRON completo: radares, sensores, drones e satélites em toda a faixa terrestre"],["Ciclo nuclear completo","domínio total, com reprocessamento, como ativo de dissuasão"]],
  prob:[
    ["Sem estratégia de Estado","Falta uma estratégia internacional institucionalizada, acima das ideologias de cada governo, e liderança efetiva no Sul Global em meio ao declínio da hegemonia americana. O livro quer inaugurar uma doutrina que não se restrinja a um governo."],
    ["O narcotráfico como questão geopolítica","Perda de soberania territorial para o crime; custo de ~4,2% do PIB (mais de R$ 450 bi por ano); captura de instituições (“narco-corrupção”); e dependência de ajuda internacional enquanto o país tenta retomar o próprio território."],
    ["Vulnerabilidades externas","", ["subordinação crescente a potências, sobretudo pela dominação chinesa dentro do BRICS","fragmentação da América Latina após o colapso da Unasul","presença deficiente do Estado nas fronteiras"]],
    ["Déficits de soberania","", ["dependência do dólar e falta de uma moeda regional liderada pelo Brasil","ciclo nuclear incompleto: faltam a conversão industrial e o reprocessamento"]]
  ],
  quote:"Como deveria ser claro, o Brasil não pode liderar o Sul Global enquanto narcotraficantes controlam cidades e fronteiras.",
  pvis:[{type:"split", t:"Cobertura do SISFRON na faixa de fronteira", segs:[["Coberta",19,"ink","< 20%"],["Sem cobertura",81,"muted",""]], src:"Número citado no destaque do capítulo XIII.", gnote:"Ilustração proporcional ao limite citado (“menos de 20%”)."}],
  groups:[
    { t:"Projeção e diplomacia",
      props:[
        {id:"c13-arbitro", k:"1", t:"Árbitro do Sul Global", d:"Diplomacia ativa em três regiões:", it:["África: mediar conflitos e ampliar influência em recursos naturais e rotas comerciais","Ásia: Timor-Leste como porta de entrada e parcerias com a ASEAN, sobretudo Filipinas e Vietnã","América Latina: liderança por meio da integração multilateral"]},
        {id:"c13-lusofona", k:"3", t:"Integração lusófona", d:"Transformar a comunidade de língua portuguesa em bloco geopolítico coeso, com cooperação econômica, defesa coordenada e instituições comuns — Portugal, Angola, Moçambique e outros como parceiros de primeira ordem."},
        {id:"c13-pragmatismo", k:"4", t:"Pragmatismo como princípio", d:"Rejeitar tanto o alinhamento automático aos EUA quanto o “ideologismo de esquerda”, com uma Estratégia Internacional institucionalizada que sobreviva às trocas de governo."},
        {id:"c13-subhegemonia", k:"5", t:"Sub-hegemonia brasileira", d:"Liderança regional “sem imperialismo” na América do Sul, por integração multilateral, aprendendo com os fracassos da Unasul e os problemas da União Europeia."},
        {id:"c13-brics", k:"9", t:"BRICS+ pragmático", d:"Extrair mercados, investimentos e cooperação tecnológica sem se subordinar aos objetivos geopolíticos de Pequim."}
      ] },
    { t:"Soberania e crime transnacional",
      props:[
        {id:"c13-pacto", k:"2", t:"Pacto Interamericano contra o tráfico", d:"A guerra ao tráfico como questão de segurança nacional de nível militar: pacto liderado pelo Brasil, ancorado na Convenção de Palermo e na OEA, com um Centro de Operações Central na América Latina e um tribunal internacional para o crime transnacional."},
        {id:"c13-cidades", k:"6", t:"“Tomemos as Cidades”", d:"Retomada territorial com institucionalização da segurança pública, modernização institucional e presença estatal nas regiões dominadas pelo crime."},
        {id:"c13-fronteiras", k:"10", t:"Proteção das fronteiras", d:"Expansão do SISFRON, presença estatal permanente, cooperação com vizinhos, desenvolvimento sustentável e adaptação a riscos ambientais."}
      ] },
    { t:"Moeda",
      props:[
        {id:"c13-desdolarizacao", k:"7", t:"Desdolarização sul-americana", d:"Cesta de moedas regional liderada pelo real, linhas de swap entre bancos centrais e cooperação monetária, com o Brasil como âncora financeira do continente."},
        {id:"c13-real", k:"8", t:"O real como alternativa", d:"Posicionar a moeda brasileira como reserva de valor regional e mecanismo de integração econômica."}
      ] },
    { t:"Defesa e contrato social", d:"“Não existe soberania sem indústria militar forte.”",
      props:[
        {id:"c13-bid", k:"11", t:"Base Industrial de Defesa", d:"Ampliar a capacidade produtiva e tecnológica, integrar a indústria à política externa, investir em ciberdefesa e tecnologias emergentes e criar financiamento sustentável."},
        {id:"c13-nuclear", k:"12", t:"Ciclo nuclear completo", d:"Autonomia em todo o ciclo do combustível nuclear, incluindo o reprocessamento, como ativo estratégico de deterrência e garantia da soberania."},
        {id:"c13-contrato", k:"13", t:"Novo contrato social e institucional", d:"Realinhar os incentivos do Estado em torno da projeção geopolítica, da recuperação territorial e de capacidades estratégicas duráveis, com consensos acima das disputas ideológicas."}
      ] }
  ],
  outro:"As 13 propostas, diz o livro, formam um sistema coerente para converter o Brasil “de uma potência fragmentada e vulnerável em uma potência estratégica verdadeira”.",
  cmp:[
    ["Postura diplomática","Oscila com a orientação de cada governo","Estratégia Internacional institucionalizada e pragmática"],
    ["Combate ao tráfico","Tratado sobretudo como questão policial","Segurança nacional de nível militar, com pacto continental"],
    ["Ciclo nuclear","Enriquecimento dominado; faltam conversão industrial e reprocessamento","Ciclo completo"],
    ["Vigilância de fronteira","SISFRON em menos de 20% da faixa","Toda a faixa terrestre coberta"]
  ],
  ctx:[
    ["1902–1912","Barão do Rio Branco e o pragmatismo","Patrono da diplomacia brasileira, José Maria da Silva Paranhos Júnior consolidou as fronteiras do país por negociação e arbitragem. O “pragmatismo” reaparece em outros momentos, como o “pragmatismo responsável” do governo Geisel (1974–1979)."],
    ["2000 · 2004","Convenção de Palermo","Convenção da ONU contra o Crime Organizado Transnacional, de 2000, incorporada ao direito brasileiro em 2004. Define grupo criminoso organizado e prevê cooperação internacional, extradição e combate à lavagem."],
    ["2008–2019","Unasul","União de Nações Sul-Americanas, criada em 2008 sob liderança brasileira. Esvaziou-se a partir de 2018, com a saída de vários países; o Brasil saiu em 2019 e voltou em 2023."],
    ["2009–2025","BRICS e BRICS+","Surgido como BRIC em 2009 (a África do Sul entrou em 2011), o grupo se expandiu a partir de 2024 com Egito, Etiópia, Irã e Emirados Árabes Unidos, e com a Indonésia em 2025. O peso chinês no bloco é a preocupação do livro."],
    ["2012","SISFRON","Sistema Integrado de Monitoramento de Fronteiras do Exército, lançado em 2012 para vigiar os cerca de 16,9 mil km de fronteira terrestre com sensores, radares e comunicações. Restrições orçamentárias atrasaram sua implantação."],
    ["1988 · 1998","O Brasil e o ciclo nuclear","A Constituição de 1988 só admite atividade nuclear para fins pacíficos; o Brasil aderiu ao Tratado de Não Proliferação em 1998 e mantém com a Argentina uma agência de controle mútuo (ABACC, 1991). O país já domina o enriquecimento de urânio e desenvolve um submarino de propulsão nuclear. O reprocessamento é etapa sensível porque permite separar plutônio."],
    ["2025","Timor-Leste na ASEAN","Timor-Leste, país lusófono, tornou-se em 2025 o 11º membro da ASEAN — o que explica sua escolha como “porta de entrada” para o Sudeste Asiático."],
    ["1996","CPLP","A Comunidade dos Países de Língua Portuguesa reúne nove Estados, entre eles Portugal, Angola, Moçambique, Cabo Verde e Timor-Leste. O livro propõe transformá-la em bloco geopolítico, com defesa e instituições comuns."]
  ],
  conn:[[2,"A retomada territorial dentro do país."],[11,"Terras raras como trunfo diplomático."],[10,"ZEE de Defesa e Base Industrial de Defesa."],[12,"Comida e computação como fontes de poder."]]
},
/* ================= XIV ================= */
{ n:14, r:"XIV", part:3, theme:"Desfavelização", title:"A Batalha do Brasil", sub:"A Desfavelização Física e Espiritual do País", pages:"48–49",
  one:"Acabar com a favela como forma de moradia em dez anos: títulos de propriedade financiados em 50 anos, cadastro fundiário nacional, crime de favelização, monitoramento por satélite e reforma do Minha Casa Minha Vida.",
  ps:[["16,4 milhões","de brasileiros vivem em 12.348 favelas, em 656 municípios (Censo 2022)"],["R$ 10,1 bi","de prejuízo com furto de energia em 2023: 40,7 TWh"]],
  as:[["10 anos","para a desfavelização integral: favelas convertidas em bairros formais"],["R$ 200–500","parcela mensal do título de desfavelização (financiamento de 50 anos)"],["48 horas","para demolição administrativa de construção ilegal não habitada"]],
  prob:[
    ["Dimensão","Censo 2022: 12.348 favelas e comunidades urbanas em 656 municípios, 16,4 milhões de pessoas (8,1% da população) em 6,56 milhões de domicílios. Belém (57,2%) e Manaus (55,8%) lideram entre as capitais; a Maré reúne ~125 mil pessoas em 16 comunidades; a Rocinha tem densidade comparável à dos distritos mais densos de Hong Kong."],
    ["Custo econômico","Furto de energia de 40,7 TWh em 2023 (R$ 10,1 bi) e bilhões em IPTU, ISS, ICMS e IR que deixam de ser arrecadados sem regularização fundiária."],
    ["Custo social","Tuberculose na Rocinha cerca de dez vezes acima da média nacional; 64,6% dos moradores de favelas vivem em ruas sem arborização; escolas, postos e delegacias são, “na melhor das hipóteses, insuficientes”."],
    ["Custos político e civilizacional","Favelas viraram currais eleitorais de facções e milícias. Enquanto 16 milhões vivem onde lei, mercado e propriedade existem só em parte, o Brasil “não pode ser considerado um país pleno”. O livro critica ainda a romantização da favela na cultura e na mídia."],
    ["Políticas que falharam","BNH, Favela-Bairro e Minha Casa Minha Vida — este com ~R$ 180 bi por ano, a maior parte em financiamentos do FGTS — urbanizaram parcialmente ou construíram conjuntos isolados, longe do emprego e muitas vezes capturados pelo crime."]
  ],
  quote:"A favela é mais do que um problema urbanístico; é uma chaga civilizacional, com custos em quatro dimensões.",
  pvis:[{type:"bars", t:"Moradores em favelas (% da população, Censo 2022)", items:[["Belém",57.2,"57,2%","hi"],["Manaus",55.8,"55,8%","hi"],["Brasil (média)",8.1,"8,1%","muted"]], max:70, src:"Números citados no capítulo XIV."}],
  groups:[
    { t:"Marco Nacional da Desfavelização", d:"Lei federal que amplia e acelera a REURB (Lei 13.465/2017) para transformar as 12.348 favelas em bairros formais em dez anos, com títulos de propriedade, regras urbanísticas, presença do Estado e mistura de classes. “Não é uma agenda de urbanização de favela”, mas o fim da favela como modalidade de moradia popular.",
      props:[
        {id:"c14-titulo", t:"Título de desfavelização", d:"Novo instrumento jurídico: financiamento imobiliário (mortgage) de 50 anos com juros subsidiados e parcelas de R$ 200 a R$ 500 por mês, securitizável para antecipar receita ao programa."},
        {id:"c14-cadastro", t:"Cadastro Fundiário Unificado Nacional", d:"Integra bases municipais, cartoriais e ambientais, com drones e georreferenciamento, para emitir certificados de regularização online."},
        {id:"c14-crime", t:"Crime de favelização", d:"Tipificação penal para quem organiza a ocupação ilegal — loteadores, grileiros, milícias. Construções não habitadas em área pública ou de risco: demolição administrativa em 48 horas. Moradia consolidada: remoção só por ordem judicial. O objetivo final, demolir toda construção ilegal, dependeria de “nova ordem constitucional”."},
        {id:"c14-sentinela", t:"Iniciativa Sentinela", d:"Monitoramento mensal por satélite das áreas urbanas e periurbanas, com a mesma tecnologia que o INPE usa contra o desmatamento."},
        {id:"c14-mcmv", t:"Reforma do Minha Casa Minha Vida", d:"Recursos antes destinados à construção periférica passam a comprar imóveis em áreas já estruturadas e a financiar a desfavelização."}
      ] },
    { t:"Os quatro princípios de todo projeto",
      props:[
        {id:"c14-principios", t:"Regras comuns a todos os bairros desfavelizados", it:["Título de propriedade individual para cada morador","Código de postura urbana, com sanção em caso de descumprimento","Inserção de classe média: venda de parte das unidades a preço de mercado, para garantir mistura social","Serviços públicos obrigatórios: posto policial, escola modelo, clínica de saúde e creches"]}
      ] },
    { t:"Custo, financiamento e sequência",
      props:[
        {id:"c14-custo", t:"Custo e autofinanciamento", d:"Custo total de R$ 1,2 a 1,5 tri em dez anos (1% a 1,5% do PIB ao ano). A carteira de financiamentos, o IPTU dos 16 milhões hoje fora do cadastro, a recuperação do furto de energia e a arrecadação indireta podem render R$ 520 a 820 bi. Custo líquido ao Tesouro: R$ 50 a 85 bi por ano — comparável ao que o país gasta com subsídios setoriais."},
        {id:"c14-sequencia", t:"Depois da Guerra ao Crime", d:"A desfavelização só é possível após a retomada territorial do capítulo II; juntas, as duas frentes formam a “base material para a refundação civilizacional”. Horizonte: dez anos, a partir das próximas duas legislaturas."}
      ],
      vis:[{type:"bars", t:"Esforço anual comparado (% do PIB)", items:[["Rodovias interestaduais dos EUA",0.5,"≈ 0,5%","muted"],["Desfavelização da Missão",1.5,"1% a 1,5%","hi"],["Habitação na Coreia e em Singapura",9,"5% a 9%","muted"]], max:10.5, src:"Comparações citadas no capítulo XIV.", gnote:"As barras mostram o teto de cada faixa citada."}]
    }
  ],
  outro:"Acabar com a favela seria “precondição para que o Brasil deixe de ser um país dividido entre lei e ausência de lei” — a tradução prática, “em pedra, ruas e títulos de propriedade”, do projeto de maturidade civilizacional.",
  cmp:[
    ["Abordagem","Urbanizar a favela (Favela-Bairro) ou construir conjuntos na periferia (MCMV)","Converter a favela em bairro formal, com título, regras e mistura social"],
    ["Regularização fundiária","REURB (Lei 13.465/2017), aplicada caso a caso pelos municípios","Marco Nacional com cadastro unificado e certificados online"],
    ["Recursos do MCMV","Construção de novas unidades, muitas na periferia","Compra de imóveis em áreas estruturadas e financiamento da desfavelização"]
  ],
  ctx:[
    ["1897","Morro da Providência","Soldados que voltavam da Guerra de Canudos se instalaram no morro da Providência, no Rio, que passou a ser chamado de “Morro da Favella”, nome de uma planta comum no sertão baiano. O termo passou a designar esse tipo de ocupação."],
    ["1902–1906","Reforma Pereira Passos","O “bota-abaixo” do prefeito Pereira Passos demoliu cortiços no centro do Rio para abrir avenidas, empurrando parte da população pobre para os morros."],
    ["1964–1986","BNH","O Banco Nacional da Habitação, criado no início do regime militar e financiado pelo FGTS, financiou milhões de moradias, mas atendeu pouco a população mais pobre. Foi extinto em 1986."],
    ["1994","Favela-Bairro","Programa da Prefeitura do Rio, com financiamento do BID, que levou urbanização — ruas, saneamento, equipamentos — a dezenas de favelas sem removê-las. É o modelo que o livro diz não querer repetir."],
    ["2009","Minha Casa Minha Vida","Programa federal de habitação lançado em 2009, com subsídios e financiamento do FGTS. Produziu milhões de unidades, mas muitos conjuntos ficaram em periferias distantes do emprego — a crítica central do capítulo."],
    ["2017","REURB","A Lei 13.465/2017 criou a Regularização Fundiária Urbana, em duas modalidades: de interesse social (Reurb-S, para baixa renda) e específica (Reurb-E). É a base que o Marco Nacional ampliaria."],
    ["1988 · 2004","INPE e o satélite","O INPE mede o desmatamento da Amazônia desde 1988 (PRODES) e emite alertas quase diários desde 2004 (DETER). A Iniciativa Sentinela aplicaria a mesma lógica às cidades."]
  ],
  ana:[
    ["Singapura (HDB, desde 1960)","O Housing & Development Board construiu habitação pública em massa para venda com financiamento de longo prazo; hoje cerca de 80% dos residentes vivem em imóveis do HDB, a maioria como proprietários."],
    ["Coreia do Sul (1988–1992)","O plano Two Million Homes construiu dois milhões de moradias em cinco anos, com novas cidades ao redor de Seul."],
    ["Rodovias interestaduais dos EUA (1956)","Lançado sob Eisenhower, o sistema de autoestradas é a obra nacional de décadas que o livro usa como régua de esforço fiscal."],
    ["Títulos de propriedade (Hernando de Soto)","O economista peruano (“O Mistério do Capital”, 2000) defende que titular a posse dos pobres transforma casas em capital, usável como garantia. A tese inspirou programas no mundo todo; estudos posteriores encontraram ganhos no investimento em moradia, mas efeitos menores que o previsto no acesso a crédito."]
  ],
  conn:[[2,"A retomada territorial vem antes."],[10,"ZEEs de reurbanização e desfavelização."],[7,"Clínica de saúde obrigatória em cada bairro."],[9,"Escola modelo em cada bairro."]]
}
);

/* ================= GLOSSÁRIO (conteúdo do guia) ================= */
const GLOSSARY = [
  ["ABACC","Agência Brasileiro-Argentina de Contabilidade e Controle de Materiais Nucleares (1991), que fiscaliza os programas nucleares dos dois países.",[13]],
  ["Abono salarial","Benefício anual de até um salário mínimo pago a trabalhadores formais de baixa renda. A PEC do Equilíbrio Fiscal prevê revê-lo.",[1]],
  ["Abaporu (Projeto)","Laboratório nacional de IA proposto pelo MBIA, com capital privado majoritário. O nome vem do quadro de Tarsila do Amaral (1928).",[12]],
  ["AgroBrasil 2030","Plano agrícola do livro, em cinco pilares: fim das invasões, auditoria dos assentamentos, fertilizantes, agroindústria e narrativa.",[12]],
  ["ASEAN","Associação de Nações do Sudeste Asiático. Timor-Leste tornou-se o 11º membro em 2025.",[13]],
  ["Base Industrial de Defesa (BID)","Conjunto de empresas e instituições que produzem bens e serviços de defesa no país.",[10,13]],
  ["BNCC","Base Nacional Comum Curricular: define o que todos os alunos devem aprender em cada etapa da educação básica.",[9]],
  ["BNDES","Banco Nacional de Desenvolvimento Econômico e Social, principal banco público de fomento.",[11,12]],
  ["BPC","Benefício de Prestação Continuada: um salário mínimo a idosos a partir de 65 anos e a pessoas com deficiência de baixa renda.",[1,5]],
  ["BRICS+","Grupo formado por Brasil, Rússia, Índia, China e África do Sul, ampliado a partir de 2024.",[13]],
  ["CAPAG","Nota de capacidade de pagamento (A a D) que o Tesouro atribui a estados e municípios.",[3]],
  ["CDPP","Centro de Debate de Políticas Públicas. Seu caderno “Caminhos do Desenvolvimento” inspira os capítulos I e V.",[1,5]],
  ["CECOT","Centro de Confinamento do Terrorismo, megapresídio de El Salvador inaugurado em 2023, modelo para os superpresídios propostos.",[2]],
  ["Cláusula Antimáfia","Proposta que permite ao STJ dissolver prefeituras capturadas pelo crime e entregá-las a uma comissão federal por até 24 meses.",[4]],
  ["Comissariado Federal de Gestão Pública","Autarquia proposta, com autonomia e mandatos fixos, que fiscalizaria em tempo real o uso de verbas federais nos municípios.",[4]],
  ["Contrarreferência","Quando o especialista devolve o paciente à atenção básica com as orientações de acompanhamento.",[7]],
  ["Convenção de Palermo","Convenção da ONU contra o Crime Organizado Transnacional (2000), base jurídica do Pacto Interamericano proposto.",[13]],
  ["CPLP","Comunidade dos Países de Língua Portuguesa, com nove Estados-membros.",[13]],
  ["Critical Raw Materials Act","Lei europeia de 2024 que fixa metas para reduzir a dependência de matérias-primas críticas.",[11]],
  ["Curtailment","Corte forçado da geração de energia por falta de transmissão ou de demanda.",[6]],
  ["Defense Production Act","Lei americana de 1950 que permite ao governo financiar e priorizar a produção estratégica.",[11]],
  ["Desindexação","Deixar de corrigir automaticamente uma despesa por um índice — no livro, o salário mínimo.",[1]],
  ["Desvinculação","Deixar de obrigar o gasto de um percentual fixo da receita numa área, como saúde e educação.",[1]],
  ["DFC","U.S. International Development Finance Corporation, agência americana que financia projetos no exterior.",[11]],
  ["DoctorSV","Aplicativo público de saúde de El Salvador, lançado em 2025, com videoconsultas assistidas por IA.",[7]],
  ["DPI (Direito Penal do Inimigo)","Doutrina de Günther Jakobs que separa o direito penal do cidadão do aplicado a quem é tratado como inimigo do pacto social.",[2]],
  ["ECA","Estatuto da Criança e do Adolescente (Lei 8.069/1990).",[9]],
  ["EIA","Estudo de Impacto Ambiental, exigido para obras de grande porte.",[6]],
  ["Emendas parlamentares","Parcelas do orçamento federal cujo destino é indicado por deputados e senadores.",[1,4]],
  ["ENER","Escala Nacional de Estratificação de Risco: a “fila viva” do SUS, ordenada por risco e não por ordem de chegada.",[7]],
  ["Esbulho possessório","Crime de invadir terreno ou imóvel alheio para tomar sua posse (Código Penal, art. 161).",[12]],
  ["Estado de Defesa","Medida excepcional (Constituição, art. 136) que permite restringir direitos em áreas determinadas por até 30 dias, prorrogáveis uma vez.",[2]],
  ["Estatuto da Metrópole","Lei 13.089/2015, que rege regiões metropolitanas e aglomerações urbanas.",[3]],
  ["EVTEA","Estudo de Viabilidade Técnica, Econômica e Ambiental de uma obra.",[6]],
  ["FGAM","Fundo Garantidor da Atividade Mineral, previsto no PL 2.780/2024.",[11]],
  ["FGTS","Fundo de Garantia do Tempo de Serviço, principal fonte de financiamento habitacional.",[14]],
  ["FIOL","Ferrovia de Integração Oeste-Leste, ligando o litoral da Bahia ao interior do país.",[6]],
  ["FNMA","Fundo Nacional de Modernização do Acesso: repasses aos municípios condicionados ao desempenho na saúde.",[7]],
  ["FPM","Fundo de Participação dos Municípios: parte do IR e do IPI repassada às prefeituras.",[3]],
  ["Frentes Cidadãs","Programa que substituiria o Bolsa Família por trabalho remunerado em projetos comunitários.",[5]],
  ["Fundeb","Fundo que financia a educação básica, com complementação da União.",[1,9]],
  ["Fundo Eleitoral","Fundo Especial de Financiamento de Campanha, criado em 2017 com dinheiro público.",[4]],
  ["Fundo Partidário","Recursos públicos distribuídos anualmente aos partidos para seu funcionamento.",[4]],
  ["GAECO","Grupo de Atuação Especial de Combate ao Crime Organizado, dos Ministérios Públicos.",[2]],
  ["Garantismo penal","Corrente que prioriza garantias processuais para limitar o poder punitivo do Estado.",[2]],
  ["Gastos tributários","Impostos que o governo deixa de arrecadar por isenções e regimes especiais; o mesmo que renúncias fiscais.",[1]],
  ["GLO","Garantia da Lei e da Ordem: uso temporário das Forças Armadas em funções de polícia.",[2]],
  ["Hub-and-spoke","Modelo em rede: serviços locais (spokes) resolvem o básico e encaminham casos complexos a centros de referência (hubs).",[7]],
  ["IBRAM (museus)","Instituto Brasileiro de Museus, autarquia federal criada em 2009.",[8]],
  ["IBRAM (mineração)","Instituto Brasileiro de Mineração, entidade das empresas do setor — não confundir com o de museus.",[11]],
  ["IBS e CBS","Os dois novos tributos sobre consumo da reforma tributária (LC 214/2025): um estadual e municipal, outro federal.",[10]],
  ["IDEB","Índice de Desenvolvimento da Educação Básica, que combina aprovação escolar e desempenho em provas.",[4,9]],
  ["IFI","Instituição Fiscal Independente, órgão do Senado que faz projeções das contas públicas.",[1]],
  ["Inelegibilidade Superveniente","Proposta da LRG: gestores que falham reiteradamente nas metas ficariam inelegíveis.",[4]],
  ["Inferência","Uso de um modelo de IA já treinado para responder a pedidos.",[12]],
  ["IPHAN","Instituto do Patrimônio Histórico e Artístico Nacional, responsável pelos tombamentos federais.",[8]],
  ["LAE","Licença Ambiental Especial, rito da Lei 15.190/2025 para projetos estratégicos.",[6]],
  ["LRG","Lei de Responsabilidade Gerencial: condiciona verbas, fundos partidários e elegibilidade a metas de gestão.",[4,3]],
  ["MagBras","Projeto “Da Mina ao Ímã”, voltado a dominar a cadeia de ímãs de terras raras no Brasil.",[11]],
  ["Marco Gerencial Nacional","Sistema de metas municipais em três famílias de indicadores, proposto pela LRG.",[4]],
  ["MBIA","Marco Brasileiro da Inteligência Artificial: 14 medidas em 5 eixos.",[12]],
  ["Método fônico","Alfabetização que ensina explicitamente a relação entre letras e sons.",[9]],
  ["Mortgage","Financiamento imobiliário de longo prazo garantido pelo próprio imóvel.",[14]],
  ["Off-take agreement","Contrato de compra antecipada e de longo prazo da produção futura.",[11]],
  ["One-stop shop","Balcão único que concentra todas as licenças e aprovações.",[10]],
  ["OTR","Óxidos de terras raras, a unidade usada para medir reservas.",[11]],
  ["PEC","Proposta de Emenda à Constituição: exige aprovação por 3/5 em dois turnos na Câmara e no Senado.",[1,3,11]],
  ["PISA","Avaliação internacional da OCDE com estudantes de 15 anos.",[9]],
  ["PNL","Plano Nacional de Logística, planejamento federal de transportes.",[6]],
  ["PPP","Parceria Público-Privada (Lei 11.079/2004).",[6,10,11]],
  ["Progressão continuada","Regime que reduz a reprovação dentro de ciclos escolares; chamado por críticos de “aprovação automática”.",[9]],
  ["PRONTO","Prontuário Eletrônico Nacional Interoperável, proposto para o SUS.",[7]],
  ["REDATA","Regime especial para datacenters criado por medida provisória em 2025, que perdeu a validade em 2026.",[12]],
  ["Renúncias fiscais","Ver “Gastos tributários”.",[1]],
  ["REURB","Regularização Fundiária Urbana (Lei 13.465/2017).",[14]],
  ["Securitização","Transformar uma carteira de créditos a receber em títulos vendidos a investidores, antecipando o dinheiro.",[14]],
  ["SISFRON","Sistema Integrado de Monitoramento de Fronteiras, do Exército.",[13]],
  ["STEM","Ciência, Tecnologia, Engenharia e Matemática.",[5,9]],
  ["Superávit financeiro","Na contabilidade pública, saldo de recursos de exercícios anteriores disponível em caixa, muitas vezes preso a fundos e vinculações.",[1]],
  ["Supersalários","Remunerações acima do teto constitucional, viabilizadas por verbas classificadas como indenizatórias.",[1]],
  ["Terras raras","Grupo de 17 elementos químicos essenciais para ímãs, eletrônicos e defesa.",[11,10]],
  ["Tombamento","Ato que protege um bem de valor histórico ou cultural, restringindo reformas e demolições.",[8]],
  ["Tutela Gerencial","Proposta da LRG: gastos de municípios com desempenho crítico passam a exigir dupla assinatura, do prefeito e do comissário.",[4]],
  ["VAAR","Complementação do Fundeb distribuída conforme resultados de aprendizagem e gestão.",[9]],
  ["ZEAI","Zona Econômica de Alta Inteligência: ZEE dedicada à cadeia da inteligência artificial.",[12]],
  ["ZEE","Zona Econômica Especial: área com regras tributárias, regulatórias e de infraestrutura próprias.",[10]],
  ["ZEED","ZEE de Defesa, proposta para o eixo Vale do Paraíba–Itajubá.",[10]],
  ["ZPE","Zona de Processamento de Exportação, modelo brasileiro criado em 1988.",[10]]
];

/* ================= LINHA DO TEMPO (h = história, contexto do guia; g = metas do livro) ================= */
const TIMELINE = [
  ["1876","h","Fundação da Escola de Minas de Ouro Preto, por Claude-Henri Gorceix.",[11]],
  ["1897","h","Soldados vindos de Canudos ocupam o Morro da Providência, no Rio — a primeira “favela”.",[14]],
  ["1902–1906","h","Reforma Pereira Passos demole cortiços no centro do Rio.",[14]],
  ["1907–1915","h","Comissão Rondon leva o telégrafo de Mato Grosso ao Amazonas.",[6]],
  ["1930","h","Revolução de 1930 leva Getúlio Vargas ao poder, com apoio dos tenentes.",[4]],
  ["1933–1936","h","“Casa-Grande & Senzala” (Freyre) e “Raízes do Brasil” (Sérgio Buarque).",[4]],
  ["1937","h","Golpe do Estado Novo. Criação do SPHAN (atual IPHAN) e da lei do tombamento.",["introducao",8]],
  ["1941","h","Stefan Zweig publica “Brasil, um país do futuro”.",["prefacio"]],
  ["1943","h","Vargas cria a CLT, a Consolidação das Leis do Trabalho.",["introducao"]],
  ["1958","h","“Chega de Saudade” inaugura a Bossa Nova. Faoro publica “Os Donos do Poder”.",[8,4]],
  ["1959","h","Criada a zona franca de Shannon, na Irlanda.",[10]],
  ["1964","h","Comício da Central pelas Reformas de Base e golpe militar. Estatuto da Terra e BNH.",["introducao",12,14]],
  ["1965","h","Criação do Fundo de Participação dos Municípios (FPM).",[3]],
  ["1967","h","Lei de Imprensa (5.250) e Zona Franca de Manaus.",[8,10]],
  ["1973","h","Criação da Embrapa.",[12]],
  ["1980","h","Shenzhen vira Zona Econômica Especial na China.",[10]],
  ["1985","h","Fim do regime militar e início da Nova República. MinC é separado do MEC.",["prefacio",8]],
  ["1988","h","Nova Constituição: cria o SUS, amplia garantias penais e facilita a criação de municípios.",[2,3,7]],
  ["1991","h","Lei Rouanet (8.313).",[8]],
  ["1993","h","Fundação do PCC, em Taubaté (SP).",[2]],
  ["1994","h","Plano Real. No Rio, começa o Favela-Bairro.",[1,14]],
  ["1996","h","EC 15 trava a criação de novos municípios.",[3]],
  ["2000","h","Lei de Responsabilidade Fiscal; Convenção de Palermo; primeira edição do PISA.",[4,13,9]],
  ["2003","h","Criação do Bolsa Família.",[5]],
  ["2007","h","Ceará cria o PAIC; inaugurado o porto de Tanger Med.",[9,10]],
  ["2009","h","Minha Casa Minha Vida; STF derruba a Lei de Imprensa.",[14,8]],
  ["2010","h","Lei da Ficha Limpa. China restringe exportações de terras raras ao Japão.",[4,11]],
  ["2012","h","Lei de Cotas nas universidades federais; lançamento do SISFRON.",[9,13]],
  ["2014","h","Início da Lava Jato e da recessão que o livro chama de “década perdida”.",["prefacio",1]],
  ["2016","h","Teto de Gastos (EC 95).",[1]],
  ["2017","h","Lei da REURB, Fundo Eleitoral e reforma trabalhista.",[14,4,5]],
  ["2018","h","Intervenção federal na segurança pública do Rio.",[2]],
  ["2019","h","PEC 188/2019 propõe extinguir municípios pequenos sem receita própria.",[3]],
  ["2020","h","Novo Fundeb cria o VAAR; lançado o Genomas Brasil.",[9,7]],
  ["2022","h","PEC da Transição; Censo 2022; Plano Nacional de Fertilizantes; El Salvador inicia regime de exceção.",[1,14,12,2]],
  ["2023","h","Novo Arcabouço Fiscal; inauguração do CECOT; reforma tributária (EC 132).",[1,2,5]],
  ["2024","h","Kim Kataguiri protocola a PEC do Equilíbrio Fiscal; lançado o Plano Brasileiro de IA.",[1,12]],
  ["2025","h","Lei Geral do Licenciamento (15.190) e LC 214 (IBS/CBS); OpenAI anuncia o Stargate Argentina; DoctorSV em El Salvador.",[6,10,12,7]],
  ["2026","h","REDATA perde a validade; Fórum Brasil-EUA sobre Minerais Críticos; eleições gerais.",[12,11]],
  ["Antes da posse","g","PEC de Transição, a partir da PEC do Equilíbrio Fiscal.",[1]],
  ["Dia 1","g","Declaração da Guerra ao Crime.",[2]],
  ["2027–2028","g","Terras raras: marcos legais e início da mineração.",[11]],
  ["2029–2030","g","Terras raras: planta-piloto de separação e refino.",[11]],
  ["2030–2032","g","Terras raras: operação em escala comercial.",[11]],
  ["2031","g","Horizonte da economia de R$ 1,1 tri da PEC do Equilíbrio Fiscal.",[1]],
  ["2032–2036","g","Terras raras: ímãs e semicondutores.",[11]],
  ["2035","g","Teto de 50% de fertilizantes importados.",[12]],
  ["Em 10 anos","g","Desfavelização integral do país.",[14]]
];
