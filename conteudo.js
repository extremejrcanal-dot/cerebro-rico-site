/* ============================================================
   CÉREBRO RICO — O CICLO DO COMANDO
   Conteúdo dos 21 dias.

   Este arquivo é o produto. Você pode editar qualquer texto
   aqui sem mexer no código do app.

   Estrutura de cada dia:
     dia      -> número de 1 a 21
     fase     -> 1 (Corte), 2 (Comando), 3 (Constância)
     titulo   -> título da tela
     linha    -> frase de abertura, aparece em destaque
     leitura  -> array de parágrafos
     acao     -> { titulo, tempo, passos[] }
     checkin  -> a pergunta do fim do dia
   ============================================================ */

const FASES = [
  {
    id: 1,
    nome: "Corte",
    dias: [1, 7],
    promessa: "Antes de adicionar qualquer coisa, remove-se o que rouba o comando.",
    descricao:
      "Você não tem falta de disciplina. Você tem excesso de entrada. Nesta primeira semana nada é adicionado à sua rotina. Só se corta."
  },
  {
    id: 2,
    nome: "Comando",
    dias: [8, 14],
    promessa: "Quem decide todo dia, um dia decide não.",
    descricao:
      "O problema nunca foi acordar decidido. Foi precisar decidir de novo toda manhã. Nesta semana você instala uma ação que não passa mais pela sua vontade."
  },
  {
    id: 3,
    nome: "Constância",
    dias: [15, 21],
    promessa: "Hábito não é o que você faz nos dias bons. É o que sobra nos dias ruins.",
    descricao:
      "Todo mundo aguenta sete dias. O que separa quem muda de quem recomeça é o que acontece depois da primeira falha. Nesta semana você constrói o sistema que sobrevive a você."
  }
];

const DIAS = [

  /* ========================= FASE 1 — CORTE ========================= */

  {
    dia: 1,
    fase: 1,
    titulo: "Sua preguiça tem dono",
    linha: "E não é você.",
    leitura: [
      "Você já tentou antes. Provavelmente mais de uma vez. Comprou o curso, fez a lista, acordou cedo por três dias e depois a vida voltou ao que era. E toda vez que isso acontece, você chega na mesma conclusão: o problema sou eu.",
      "Essa conclusão é confortável porque é simples. E é errada.",
      "Existe uma diferença entre não ter disciplina e ter a disciplina disputada. Você vive dentro de um ambiente onde dezenas de coisas foram construídas, por gente muito bem paga, para serem mais fáceis do que aquilo que você precisa fazer. O celular no seu bolso não é neutro. Ele foi projetado para vencer. Todo dia, contra você, e ele ganha na maioria das vezes.",
      "Isso não te isenta. Ninguém vai fazer por você. Mas muda o ponto de partida: você não está consertando um defeito de caráter. Está retomando um território ocupado.",
      "E território se retoma em ordem. Primeiro se corta o que ocupa. Depois se instala o que comanda. Por último se protege o que foi conquistado. É isso que são os próximos 21 dias.",
      "Hoje você não vai mudar nada. Só vai olhar o tamanho da conta."
    ],
    acao: {
      titulo: "A conta que você não fez",
      tempo: "10 minutos",
      passos: [
        "Escreva as 3 coisas que você mais adiou nos últimos 30 dias. Coisas concretas, com nome. Não 'me organizar melhor' — 'a consulta médica', 'a proposta pro cliente', 'a conversa com meu irmão'.",
        "Ao lado de cada uma, escreva há quanto tempo ela está sendo adiada.",
        "Embaixo de cada uma, escreva uma frase: o que já me custou não ter feito isso.",
        "Leia em voz alta. Uma vez. Sem se defender e sem se xingar."
      ]
    },
    checkin: "Você fez a lista e leu em voz alta?"
  },

  {
    dia: 2,
    fase: 1,
    titulo: "O inventário",
    linha: "Você não pode cortar o que não consegue nomear.",
    leitura: [
      "Todo mundo sabe, de forma vaga, que perde tempo. Quase ninguém sabe onde. E enquanto a perda for vaga, ela é impossível de atacar — porque 'perder tempo no celular' não é um alvo, é uma sensação.",
      "Hoje o trabalho é transformar sensação em número.",
      "Vai ser desconfortável, e o desconforto é parte do mecanismo. Uma coisa é achar que você usa o celular demais. Outra é ver escrito que foram quatro horas e dezoito minutos, e que a maior parte disso aconteceu em sessões de menos de dois minutos espalhadas pelo dia inteiro — o que significa que você nunca chegou a se concentrar em nada por muito tempo.",
      "Não é o tempo total que destrói sua execução. É a fragmentação. Um dia com quatro horas livres e nenhuma interrupção produz coisas. Um dia com oito horas livres cortadas a cada nove minutos não produz nada, e ainda te deixa exausto.",
      "Não mude nada hoje. Só meça. Quem tenta cortar antes de medir corta a coisa errada."
    ],
    acao: {
      titulo: "Onde o tempo foi",
      tempo: "15 minutos",
      passos: [
        "Abra o relatório de tempo de uso do seu celular (Bem-estar digital no Android, Tempo de Uso no iPhone).",
        "Anote os 3 aplicativos com maior tempo na última semana e quantas horas cada um.",
        "Anote quantas vezes você desbloqueia o celular por dia, em média.",
        "Some as 3 horas diárias e multiplique por 365. Escreva esse número. É o que você gasta por ano nesses três apps.",
        "Guarde esse número. Você vai voltar nele no dia 21."
      ]
    },
    checkin: "Você mediu e anotou os números?"
  },

  {
    dia: 3,
    fase: 1,
    titulo: "O corte do ambiente",
    linha: "Força de vontade perde para ambiente. Sempre.",
    leitura: [
      "Existe uma crença de que pessoas disciplinadas resistem mais. Que elas sentem a mesma vontade que você e simplesmente aguentam. Isso é quase sempre falso.",
      "Pessoas que executam com constância não resistem mais. Elas são expostas menos. Organizaram a vida de um jeito em que a decisão difícil não precisa ser tomada, porque a opção fácil foi removida do alcance.",
      "Isso importa porque atenção é um recurso que acaba. Ao meio-dia você já tomou centenas de pequenas decisões e resistiu a dezenas de impulsos. À noite não sobra nada — e é exatamente à noite que você mais falha. Não porque você é fraco à noite. Porque gastou o dia inteiro resistindo a coisas que não deveriam nem estar ao alcance.",
      "A saída não é resistir melhor. É reduzir o número de vezes que você precisa resistir.",
      "Hoje o corte é físico. Não é intenção, não é promessa. É mexer nas configurações e mudar objetos de lugar."
    ],
    acao: {
      titulo: "Desarmar o ambiente",
      tempo: "20 minutos",
      passos: [
        "Desligue TODAS as notificações do celular, exceto ligações e mensagens de pessoas reais. Redes sociais, notícias, promoções, jogos: tudo desligado. Não 'silenciado' — desligado.",
        "Tire os 3 aplicativos que você anotou ontem da tela inicial. Coloque em uma pasta na última tela, ou apague de vez os que der.",
        "Deixe o celular carregando fora do quarto hoje à noite. Se você usa como despertador, use qualquer outro aparelho.",
        "Escolha o lugar onde você vai executar sua tarefa principal e tire de cima da mesa tudo que não pertence a ela."
      ]
    },
    checkin: "As notificações estão desligadas e o celular dorme fora do quarto?"
  },

  {
    dia: 4,
    fase: 1,
    titulo: "O corte de compromisso",
    linha: "Sua agenda está cheia das prioridades de outras pessoas.",
    leitura: [
      "Uma parte grande do seu tempo não foi roubada por distração. Foi doada. Você disse sim.",
      "Disse sim para o favor, para a reunião que podia ser uma mensagem, para o grupo, para o projeto de outra pessoa, para a conversa que você não queria ter. Cada sim desses pareceu pequeno na hora. Somados, eles são a razão pela qual você chega no fim do dia com a sensação de ter trabalhado muito e não ter avançado em nada seu.",
      "Existe um motivo para isso, e não é generosidade. É que dizer sim é indolor no presente e caro no futuro, e nós somos péssimos em sentir o custo do futuro. O favor que você aceita hoje custa uma tarde daqui a duas semanas — e a versão de você de hoje não paga essa conta.",
      "Você não precisa virar uma pessoa dura. Precisa parar de tomar decisões de agenda no impulso.",
      "A regra é simples: nenhum compromisso novo é aceito na hora em que é pedido."
    ],
    acao: {
      titulo: "A regra das 24 horas",
      tempo: "10 minutos",
      passos: [
        "Olhe sua semana. Identifique 1 compromisso que você aceitou e não queria ter aceitado.",
        "Cancele ou reduza esse compromisso hoje. Mensagem curta, sem justificativa elaborada: 'Não vou conseguir. Desculpa avisar em cima.'",
        "Adote a regra a partir de agora: todo pedido novo recebe 'Me deixa ver e te confirmo'. Nenhum sim imediato por 21 dias.",
        "Saia de 2 grupos de mensagem que só consomem sua atenção."
      ]
    },
    checkin: "Você cancelou um compromisso e saiu dos grupos?"
  },

  {
    dia: 5,
    fase: 1,
    titulo: "O corte de decisão",
    linha: "Escolher cansa. E você escolhe demais.",
    leitura: [
      "Você acorda e decide o que vestir. Decide o que comer. Decide se vai hoje ou amanhã. Decide por onde começar. Decide se responde agora ou depois. Nenhuma dessas decisões é importante, e todas cobram o mesmo pedaço de energia que você precisaria para a decisão que importa.",
      "Pessoas que produzem muito têm uma característica em comum que quase ninguém repara: a vida delas é entediante nos detalhes. Comem parecido, acordam no mesmo horário, trabalham no mesmo lugar, começam pela mesma coisa. Não é falta de imaginação. É economia.",
      "Elas transformaram em rotina tudo que não merece atenção, para poder gastar atenção onde merece.",
      "Isso vale ainda mais para você, que tem o problema de começar e não terminar. Cada nova decisão é uma nova chance de negociar consigo mesmo — e você já sabe quem ganha essa negociação.",
      "Menos decisões, menos negociação, menos chance de desistir."
    ],
    acao: {
      titulo: "Congelar o que não importa",
      tempo: "15 minutos",
      passos: [
        "Defina um horário fixo de acordar para os próximos 16 dias. Um só. Inclusive no fim de semana.",
        "Defina o que você come no café da manhã. O mesmo, todos os dias, até o dia 21.",
        "Separe agora a roupa de amanhã. Faça isso toda noite daqui pra frente.",
        "Escolha 1 lugar fixo onde você vai executar sua tarefa principal. Sempre o mesmo."
      ]
    },
    checkin: "Você congelou horário de acordar, café e roupa?"
  },

  {
    dia: 6,
    fase: 1,
    titulo: "O corte de entrada",
    linha: "Consumir informação parece produtivo. Quase nunca é.",
    leitura: [
      "Existe uma forma de procrastinação que se disfarça muito bem: a que parece estudo.",
      "Você assiste o vídeo sobre produtividade. Salva o artigo. Ouve o podcast no carro. Compra o livro. Entra no grupo. E fica com uma sensação real de progresso — porque seu cérebro registra 'aprendi algo hoje' quase da mesma forma que registraria 'fiz algo hoje'.",
      "Só que não fez. E o mais perverso é que essa sensação alivia justamente a pressão que faria você agir. Quanto mais você consome sobre o assunto, menos urgência sente de executar. O consumo virou o substituto da execução.",
      "Se você tem uma pasta cheia de coisas salvas que nunca vai ler, você não tem falta de informação. Tem excesso.",
      "Nos próximos 15 dias, entrada de conteúdo novo sobre desenvolvimento pessoal fica suspensa. Você já sabe mais do que precisa para executar. Executar é a única coisa que falta."
    ],
    acao: {
      titulo: "Fechar a entrada",
      tempo: "10 minutos",
      passos: [
        "Pare de consumir qualquer conteúdo novo sobre produtividade, disciplina ou desenvolvimento pessoal até o dia 21. Este protocolo é a única coisa que você segue.",
        "Silencie ou cancele 3 canais/perfis que só te dão a sensação de progresso.",
        "Abra sua lista de itens salvos para ler depois. Apague tudo que está lá há mais de 30 dias. Se ainda não leu, não vai ler.",
        "Escreva: 'Eu não preciso de mais informação. Preciso de repetição.'"
      ]
    },
    checkin: "Você fechou a entrada de conteúdo novo?"
  },

  {
    dia: 7,
    fase: 1,
    titulo: "O espaço que sobrou",
    linha: "Fim da primeira fase.",
    leitura: [
      "Sete dias e você não adicionou nada. Só tirou. Notificações, aplicativos, compromissos, decisões, conteúdo.",
      "Se você fez o que estava escrito, existe agora algo que não existia na semana passada: espaço. Provavelmente desconfortável. Muita gente descobre nesta semana que o barulho tinha uma função — ele impedia de perceber o quanto o dia estava vazio de coisas que importam.",
      "Esse desconforto é o sinal de que funcionou. Você não estava sem tempo. Estava com o tempo ocupado por coisas que não escolheu.",
      "A semana que vem é diferente. Agora entra uma coisa só. Uma. E ela vai parecer pequena demais para fazer diferença — o que é exatamente o motivo pelo qual vai funcionar.",
      "Antes disso, revisão honesta."
    ],
    acao: {
      titulo: "Revisão da Fase 1",
      tempo: "15 minutos",
      passos: [
        "Responda por escrito: dos 6 cortes desta semana, quais eu realmente fiz e quais eu só li?",
        "Refaça hoje um corte que você deixou passar. Um só, o mais fácil.",
        "Escreva: o que apareceu no espaço vazio quando o barulho diminuiu?",
        "Olhe o número que você anotou no dia 2 — as horas por ano. Escreva o que você faria com metade delas."
      ]
    },
    checkin: "Você fez a revisão e refez o corte que faltava?"
  },

  /* ======================== FASE 2 — COMANDO ======================== */

  {
    dia: 8,
    fase: 2,
    titulo: "A ação mínima inegociável",
    linha: "Pequena o suficiente para não ter desculpa.",
    leitura: [
      "Agora entra uma coisa. Uma só, e ela precisa ser ridiculamente pequena.",
      "Seu instinto vai ser escolher algo ambicioso. Uma hora de estudo. Uma hora de academia. Esse é o mesmo instinto que fez você começar e parar todas as outras vezes. Ambição inicial é o principal preditor de abandono.",
      "O motivo é matemático. Uma ação grande só acontece em dias bons. Dias bons são talvez metade dos seus dias. Uma ação que só acontece na metade dos dias nunca vira hábito, e o que não vira hábito depende para sempre da sua vontade — que é exatamente o recurso que você não tem em quantidade confiável.",
      "Uma ação pequena acontece em todos os dias. Inclusive no dia que você dormiu mal, brigou com alguém e está gripado. E é a repetição em dias ruins, não o volume em dias bons, que constrói identidade.",
      "A regra: se você não consegue imaginar fazer isso no seu pior dia do mês, está grande demais. Diminua até doer de tão pequeno."
    ],
    acao: {
      titulo: "Definir a sua",
      tempo: "15 minutos",
      passos: [
        "Escolha 1 área. Uma só: saúde, trabalho, estudo ou finanças.",
        "Escreva a ação que você gostaria de fazer nessa área.",
        "Agora reduza até caber em 10 minutos ou menos. 'Estudar' vira 'ler 2 páginas'. 'Academia' vira 'vestir a roupa e sair de casa'. 'Organizar as finanças' vira 'anotar os gastos de ontem'.",
        "Escreva a versão final em uma frase, no papel, e deixe onde você vê todo dia.",
        "Esta é a sua ação até o dia 21. Ela não muda, não aumenta e não é substituída."
      ]
    },
    checkin: "Você definiu sua ação mínima e ela cabe em 10 minutos?"
  },

  {
    dia: 9,
    fase: 2,
    titulo: "Quando, não se",
    linha: "Hábito não tem horário livre.",
    leitura: [
      "Se sua ação vai acontecer 'em algum momento do dia', ela vai acontecer no fim do dia. E no fim do dia você está cansado, já gastou toda a energia de decisão, e a negociação começa: hoje não, amanhã eu compenso.",
      "Você já conhece o final dessa conversa.",
      "Uma ação sem horário fixo é uma ação que você precisa decidir fazer todo dia. E o objetivo desta fase inteira é eliminar a decisão. Enquanto você estiver decidindo, está negociando. Enquanto estiver negociando, vai perder — porque a parte de você que quer descansar tem muito mais experiência de vitória do que a parte que quer executar.",
      "Horário fixo transforma a pergunta 'eu vou fazer hoje?' na pergunta 'já são sete horas?'. A segunda não tem lado emocional. É só uma informação.",
      "Escolha um horário cedo. Não porque manhã é mágica, mas porque quanto mais cedo, menos coisas tiveram a chance de dar errado e atrapalhar."
    ],
    acao: {
      titulo: "Cravar o horário",
      tempo: "5 minutos",
      passos: [
        "Escolha o horário exato da sua ação mínima. Não uma faixa — um horário. 'De manhã' não vale. '6h40' vale.",
        "Coloque um alarme recorrente nesse horário, todos os dias, até o dia 21.",
        "Nomeie o alarme com a ação em si, não com 'lembrete'. Ex: 'Ler 2 páginas'.",
        "Execute sua ação mínima hoje, no horário. Hoje é o dia 1 dela."
      ]
    },
    checkin: "Você cravou o horário e executou a ação hoje?"
  },

  {
    dia: 10,
    fase: 2,
    titulo: "O gatilho",
    linha: "Toda ação precisa vir depois de outra.",
    leitura: [
      "Horário sozinho falha nos dias em que a rotina quebra. Feriado, viagem, imprevisto — o relógio marca, você está em outro contexto, e a ação some.",
      "O que segura é amarrar a ação nova a uma coisa que você já faz sem pensar. Você não esquece de escovar os dentes. Não esquece de tomar café. Essas coisas já são automáticas, e o automático é o único lugar seguro para pendurar um hábito novo.",
      "A estrutura é literal: DEPOIS DE [coisa que já faço], EU [ação mínima].",
      "Depois de servir o café, eu leio 2 páginas. Depois de escovar os dentes à noite, eu anoto os gastos do dia. Depois de estacionar o carro no trabalho, eu escrevo as 3 tarefas do dia.",
      "Isso parece bobo. É a diferença entre lembrar e não lembrar — e no fim do mês essa diferença é o resultado inteiro."
    ],
    acao: {
      titulo: "Amarrar",
      tempo: "10 minutos",
      passos: [
        "Liste 3 coisas que você faz TODOS os dias sem precisar lembrar.",
        "Escolha a que acontece mais perto do horário que você cravou ontem.",
        "Escreva a frase completa: 'Depois de ____, eu ____.'",
        "Escreva essa frase em um papel e cole no lugar onde o gatilho acontece — na cafeteira, no espelho, no volante.",
        "Execute a ação hoje, nessa sequência."
      ]
    },
    checkin: "Você amarrou a ação a um gatilho e executou?"
  },

  {
    dia: 11,
    fase: 2,
    titulo: "Começar é o trabalho",
    linha: "Você não tem problema de execução. Tem problema de partida.",
    leitura: [
      "Repare em uma coisa: quando você finalmente senta e começa, geralmente não é tão ruim. Às vezes você até passa do tempo. O sofrimento quase nunca está no fazer. Está nos quarenta minutos antes de fazer.",
      "Isso significa que você está atacando o problema errado. Você tenta se motivar a fazer a tarefa inteira, e a tarefa inteira é assustadora, então adia. Mas você nunca precisou de motivação para a tarefa inteira. Precisava só para os primeiros dois minutos.",
      "A motivação não vem antes da ação. Vem depois dos primeiros minutos de ação. Quem espera sentir vontade para começar está esperando o efeito aparecer antes da causa.",
      "Então o compromisso muda de objeto. Você não se compromete a fazer. Se compromete a começar, com permissão explícita de parar.",
      "Vestir a roupa de corrida e ter permissão de voltar para o sofá. Abrir o documento e ter permissão de fechar em cinco minutos. Na maioria das vezes você não vai parar. Mas a permissão precisa ser real, senão seu cérebro entende que é armadilha e resiste igual."
    ],
    acao: {
      titulo: "A regra dos 5 minutos",
      tempo: "5 minutos",
      passos: [
        "Pegue a coisa que você mais está adiando da lista do dia 1.",
        "Marque 5 minutos no cronômetro e trabalhe nela. Só 5.",
        "Quando tocar, você tem permissão total de parar. Se quiser continuar, continue. Se não, pare mesmo.",
        "Anote o que aconteceu: você parou aos 5 ou continuou?",
        "Execute também sua ação mínima do dia."
      ]
    },
    checkin: "Você fez os 5 minutos na tarefa adiada e a ação mínima?"
  },

  {
    dia: 12,
    fase: 2,
    titulo: "O que não se vê não existe",
    linha: "Sua memória é uma péssima testemunha.",
    leitura: [
      "Se eu te perguntar quantos dias você executou nas últimas duas semanas, você vai chutar. E o chute vai ser distorcido pelo seu humor de hoje: se está bem, vai superestimar; se está mal, vai jurar que não fez quase nada.",
      "Isso importa mais do que parece. A sensação de estar falhando é o principal motivo de abandono — e essa sensação quase nunca é medida contra fatos. Tem gente que desiste no dia 12 com 9 dias de execução, achando que teve 4.",
      "Registro visível resolve isso de duas formas. Ele te dá o dado real, e cria uma coisa que você não quer quebrar. Uma sequência de marcas na parede tem um poder estranho sobre o comportamento: depois de sete, você não está mais executando por disciplina — está executando para não estragar a sequência.",
      "Este app já registra seus dias. Mas quero que exista também fora da tela.",
      "Papel na parede. Algo que você vê sem precisar abrir nada."
    ],
    acao: {
      titulo: "Tornar visível",
      tempo: "10 minutos",
      passos: [
        "Pegue uma folha e desenhe 21 quadrados. Numere de 1 a 21.",
        "Cole em um lugar por onde você passa todo dia — geladeira, espelho, porta.",
        "Marque com X todos os dias que você já cumpriu sua ação mínima.",
        "A partir de hoje, marque na hora em que executar. Não no fim do dia.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "O quadro está na parede e marcado?"
  },

  {
    dia: 13,
    fase: 2,
    titulo: "Alguém precisa estar olhando",
    linha: "Compromisso sozinho é o mais fácil de quebrar.",
    leitura: [
      "Você já quebrou centenas de promessas feitas para si mesmo, e nunca aconteceu nada. Nenhuma consequência, nenhuma cobrança, nenhum constrangimento. Seu cérebro aprendeu isso muito bem: promessa interna é barata.",
      "Promessa feita para outra pessoa funciona diferente, e não é por força de vontade. É porque o custo de quebrar deixa de ser abstrato. Você vai precisar dizer, em voz alta, para alguém que sabe, que não fez.",
      "Não precisa de grupo, nem de coach, nem de estrutura elaborada. Precisa de uma pessoa que saiba o que você combinou e que pergunte de vez em quando.",
      "Escolha alguém que não vá passar a mão na sua cabeça. A pessoa errada aqui é a que responde 'imagina, você tá fazendo o que pode'. A pessoa certa é a que responde 'e ontem, fez?'.",
      "Este é o passo que mais gente pula e o que mais muda o resultado. Faça hoje."
    ],
    acao: {
      titulo: "Colocar alguém no circuito",
      tempo: "10 minutos",
      passos: [
        "Escolha 1 pessoa. Alguém que te cobra, não alguém que te consola.",
        "Mande uma mensagem hoje dizendo exatamente: sua ação mínima, o horário e até que dia.",
        "Peça uma coisa concreta: 'me pergunta no domingo se eu fiz todos os dias'.",
        "Se não tiver ninguém, faça público — poste o quadro dos 21 dias em qualquer rede que você use.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "Você avisou alguém e pediu a cobrança?"
  },

  {
    dia: 14,
    fase: 2,
    titulo: "Duas semanas",
    linha: "Fim da segunda fase.",
    leitura: [
      "Duas semanas. Você cortou o que ocupava e instalou uma ação que roda em horário fixo, presa a um gatilho, registrada na parede e conhecida por outra pessoa.",
      "Se você olhar o quadro e tiver falhas, é normal e não é o ponto. O ponto é se a ação existe na sua rotina como uma coisa que acontece, em vez de uma coisa que você lembra de fazer.",
      "Agora vem a parte que quase ninguém ensina, e que é a única razão pela qual todas as suas outras tentativas falharam.",
      "Você não desistiu das outras vezes por falta de motivação no começo. Desistiu depois da primeira falha, porque não tinha plano para ela. Falhou um dia, sentiu que tinha estragado tudo, e a partir dali não havia mais nada para proteger. Sequência quebrada, tanto faz.",
      "A terceira semana inteira é sobre isso. Não sobre executar mais. Sobre não sumir depois de errar."
    ],
    acao: {
      titulo: "Revisão da Fase 2",
      tempo: "15 minutos",
      passos: [
        "Conte no quadro: quantos dos últimos 7 dias você executou?",
        "Escreva qual foi o dia mais difícil e o que aconteceu nele.",
        "Responda: a ação ainda está pequena o suficiente? Se você falhou mais de 2 dias, ela está grande. Reduza agora.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "Você fez a revisão e ajustou o tamanho da ação se precisava?"
  },

  /* ====================== FASE 3 — CONSTÂNCIA ====================== */

  {
    dia: 15,
    fase: 3,
    titulo: "Você vai falhar",
    linha: "E isso já está previsto.",
    leitura: [
      "Em algum momento dos próximos meses você vai perder um dia. Vai adoecer, viajar, ter uma emergência, ou simplesmente não vai fazer. Isso não é hipótese, é certeza — e vale para todo mundo que executa qualquer coisa por tempo suficiente.",
      "O que decide seu resultado não é evitar a falha. É o que acontece nas 24 horas seguintes.",
      "Existe um padrão que se repete em quase toda tentativa abandonada, e provavelmente na sua: a pessoa falha um dia. Aí interpreta a falha como prova de que não é capaz. Aí se pune. A punição gera desconforto. E ela passa a evitar a coisa que está associada ao desconforto. Em uma semana, sumiu.",
      "Repare que não foi a falha que destruiu. Foi a interpretação da falha, e a punição que veio depois.",
      "Quem sustenta hábitos por anos falha na mesma frequência que você. A diferença é que para eles um dia perdido é um dado, não um veredicto. Voltam no dia seguinte sem cerimônia, sem compensar em dobro, sem discurso.",
      "Hoje você escreve seu protocolo de recaída, antes de precisar dele. Porque no dia em que precisar, você não vai estar em condição de pensar direito."
    ],
    acao: {
      titulo: "Escrever o protocolo de recaída",
      tempo: "15 minutos",
      passos: [
        "Escreva no papel, com sua letra: 'Se eu falhar um dia, eu não recomeço do zero. Eu volto no dia seguinte, na versão reduzida.'",
        "Defina agora a versão reduzida da sua ação — metade ou menos. Se é ler 2 páginas, a versão reduzida é 1 parágrafo.",
        "Escreva: 'Falhar um dia é um dia. Falhar dois é uma decisão.'",
        "Cole ao lado do quadro dos 21 dias.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "Seu protocolo de recaída está escrito e colado?"
  },

  {
    dia: 16,
    fase: 3,
    titulo: "Nunca dois",
    linha: "A regra que sustenta tudo.",
    leitura: [
      "Se existisse uma única regra para levar dos 21 dias, seria esta: nunca falhe dois dias seguidos.",
      "Um dia perdido é um acidente. Dois dias perdidos já é o começo de um padrão novo, e o terceiro dia não custa quase nada depois do segundo. É assim que todo abandono acontece — não em uma decisão, mas em uma sequência curta que ninguém interrompeu.",
      "O poder dessa regra está em quanto ela é permissiva. Ela não exige perfeição, o que a torna sustentável de verdade. Você pode ter um mês com quatro falhas e continuar sendo alguém que executa, desde que nenhuma delas tenha virado duas.",
      "Isso também tira o peso moral do erro. Você não precisa se sentir mal por ter falhado. Precisa de uma coisa só: aparecer amanhã.",
      "Essa regra vale para tudo que você fizer depois deste protocolo. É a peça que você leva."
    ],
    acao: {
      titulo: "Instalar a regra",
      tempo: "10 minutos",
      passos: [
        "Escreva 'NUNCA DOIS' em letras grandes e cole ao lado do quadro.",
        "Olhe o quadro. Se em algum momento você falhou 2 dias seguidos, marque esses dias com um círculo.",
        "Escreva o que aconteceu naqueles dias — o que veio antes da primeira falha.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "A regra está visível e você identificou seus padrões de queda?"
  },

  {
    dia: 17,
    fase: 3,
    titulo: "A versão dos dias ruins",
    linha: "Nem todo dia vai ser um dia inteiro.",
    leitura: [
      "Vai existir o dia em que você dormiu quatro horas, tem um problema para resolver e não sobra nada. Nesse dia, tentar executar a versão completa é a forma mais rápida de quebrar a sequência — porque você não vai conseguir, e aí não faz nada.",
      "A saída é ter, definida de antemão, uma versão mínima aceitável. Tão pequena que é impossível não fazer, mesmo no pior dia.",
      "Ela não serve para produzir resultado. Serve para manter a identidade. A diferença entre fazer um parágrafo e não fazer nada não está no parágrafo — está em quem você continua sendo no dia seguinte. Quem fez o mínimo continua sendo alguém que faz. Quem pulou vira alguém que pulou, e a próxima vez fica mais fácil de pular.",
      "É por isso que consistência ruim vence intensidade interrompida. Não porque produz mais no curto prazo, mas porque não te obriga a se reconstruir do zero toda vez.",
      "Um parágrafo em um dia horrível vale mais do que duas horas em um dia bom."
    ],
    acao: {
      titulo: "Definir o mínimo do mínimo",
      tempo: "10 minutos",
      passos: [
        "Escreva sua versão de dia ruim. Ela precisa levar menos de 2 minutos.",
        "Teste hoje: execute só a versão reduzida e veja como é.",
        "Escreva a regra: 'No dia ruim eu não pulo. Eu encolho.'",
        "Cole junto com o resto."
      ]
    },
    checkin: "Você definiu e testou a versão de dia ruim?"
  },

  {
    dia: 18,
    fase: 3,
    titulo: "Os ladrões de constância",
    linha: "Nem tudo que te derruba está dentro de você.",
    leitura: [
      "Você já sabe quais são seus horários frágeis e suas desculpas favoritas. Falta olhar para fora.",
      "Existem pessoas específicas depois das quais você nunca executa. Existem lugares onde você nunca produz. Existem dias da semana em que a sequência sempre quebra, e não é aleatório — tem alguma coisa naquele dia que você ainda não nomeou.",
      "Isso não é sobre culpar os outros. É sobre parar de fingir surpresa. Se toda sexta-feira você falha, sexta-feira não é um imprevisto. É um padrão conhecido para o qual você ainda não fez plano.",
      "E padrão conhecido se resolve com regra, não com esforço. Não adianta prometer se esforçar mais na sexta. Adianta mudar o horário da ação na sexta, ou executar antes do compromisso que atrapalha.",
      "Hoje você mapeia e cria uma regra para cada um."
    ],
    acao: {
      titulo: "Mapear os ladrões",
      tempo: "15 minutos",
      passos: [
        "Olhe o quadro dos 21 dias. Que dia da semana concentra suas falhas?",
        "Escreva 1 pessoa, 1 lugar e 1 horário depois dos quais você raramente executa.",
        "Para cada um, escreva uma regra concreta. Não 'vou me esforçar' — 'na sexta eu executo às 7h em vez de às 19h'.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "Você mapeou os ladrões e criou uma regra para cada?"
  },

  {
    dia: 19,
    fase: 3,
    titulo: "A armadilha do sucesso",
    linha: "A maioria não para por falhar. Para por melhorar.",
    leitura: [
      "Tem uma coisa que acontece por volta do primeiro ou segundo mês e que quase ninguém antecipa: você melhora, e a melhora tira sua urgência.",
      "A dor que te fez começar diminui. O problema fica menor. E o hábito que estava resolvendo o problema perde a justificativa, porque a justificativa era a dor. Você para de tomar o remédio porque o sintoma passou — e o sintoma passou por causa do remédio.",
      "Isso explica muita recaída que parece inexplicável de fora. A pessoa não abandonou porque estava dando errado. Abandonou porque estava dando certo.",
      "A proteção contra isso é trocar a razão. Enquanto a razão for resolver um problema, o hábito morre quando o problema morre. Quando a razão passa a ser quem você é, ele sobrevive.",
      "A pergunta deixa de ser 'eu preciso disso?' e passa a ser 'eu sou o tipo de pessoa que faz isso?'. A segunda não tem data de validade."
    ],
    acao: {
      titulo: "Trocar a razão",
      tempo: "10 minutos",
      passos: [
        "Escreva por que você começou este protocolo, no dia 1.",
        "Escreva o que já mudou desde então. Concreto, mesmo que pequeno.",
        "Agora escreva a frase de identidade: 'Eu sou alguém que ____.' Preencha com sua ação, não com o resultado dela.",
        "Cole essa frase por cima da razão antiga.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "Você escreveu sua frase de identidade?"
  },

  {
    dia: 20,
    fase: 3,
    titulo: "O que vem depois",
    linha: "O protocolo acaba. O sistema não.",
    leitura: [
      "Amanhã é o último dia, e existe um risco previsível: você comemorar e parar. Fim do protocolo interpretado como fim da obrigação.",
      "Então vamos decidir hoje, com a cabeça fria, o que acontece no dia 22.",
      "A regra é uma só e ela é contraintuitiva: no dia 22 você não muda nada. Mesma ação, mesmo horário, mesmo gatilho. Por mais 30 dias.",
      "Seu instinto vai querer aumentar. Vai parecer que 10 minutos é pouco agora que ficou fácil. Não aumente. A facilidade não é sinal de que está pequeno demais — é sinal de que está funcionando. Aumentar agora é a forma mais comum de quebrar uma coisa que estava dando certo.",
      "Se em 30 dias a sequência estiver intacta, aí sim você adiciona. Uma coisa só, do mesmo tamanho ridículo, pelo mesmo processo: horário fixo, gatilho, registro visível, alguém sabendo.",
      "É assim que se constrói. Uma coisa pequena de cada vez, protegida por regras, nunca duas ao mesmo tempo."
    ],
    acao: {
      titulo: "Decidir o dia 22",
      tempo: "15 minutos",
      passos: [
        "Faça um novo quadro, agora com 30 quadrados. Cole no lugar do antigo, mas não jogue o antigo fora.",
        "Escreva no topo: 'Mesma ação. Mesmo horário. Sem aumentar.'",
        "Escreva a data em que você pode adicionar a segunda ação. Só depois dos 30 dias.",
        "Avise a pessoa do dia 13 que a cobrança continua.",
        "Execute sua ação mínima."
      ]
    },
    checkin: "O quadro de 30 dias está pronto e a data marcada?"
  },

  {
    dia: 21,
    fase: 3,
    titulo: "Comando",
    linha: "Último dia.",
    leitura: [
      "Vinte e um dias atrás você tinha uma lista de três coisas adiadas e um número de horas por ano que preferia não ter visto.",
      "Você não virou outra pessoa. Ninguém vira. O que mudou é mais simples e mais útil: você tem menos coisas disputando seu comando, uma ação que acontece sem precisar de vontade, e um plano escrito para o dia em que falhar.",
      "Isso é tudo que separa quem executa de quem recomeça. Não é intensidade. Não é motivação. É ter menos entrada, uma saída fixa, e um protocolo para o erro.",
      "A parte que importa começa amanhã, quando não tiver mais tela nenhuma dizendo o que fazer. E é por isso que o dia 20 foi sobre não mudar nada: porque a única coisa que precisa acontecer amanhã é a mesma coisa que aconteceu hoje.",
      "Sua preguiça tinha dono. Agora tem horário, gatilho, registro e testemunha.",
      "O comando é seu. Não devolve."
    ],
    acao: {
      titulo: "Fechar o ciclo",
      tempo: "20 minutos",
      passos: [
        "Volte no dia 1 e leia a lista das 3 coisas adiadas. Quantas você resolveu ou começou?",
        "Volte no dia 2 e olhe o número de horas por ano. Escreva o número de hoje.",
        "Conte os X do quadro. Escreva o total.",
        "Escreva uma frase para a versão de você que vai querer parar no dia 40. Guarde onde você vai encontrar.",
        "Execute sua ação mínima. Hoje e amanhã."
      ]
    },
    checkin: "Você fechou o ciclo e executou o último dia?"
  }
];

/* ---- Tela de recaída: mostrada quando o usuário marca "não fiz" ---- */
const RECAIDA = {
  titulo: "Um dia é um dia",
  linha: "Não recomeça do zero.",
  leitura: [
    "Você não fez hoje. Registrado, sem drama.",
    "Aqui não existe reset. Seu progresso continua exatamente onde estava, porque apagar dias de execução por causa de um dia seria uma mentira sobre o que você fez.",
    "A regra é a do dia 16: falhar um dia é um dia. Falhar dois é uma decisão.",
    "Amanhã você não compensa em dobro e não faz discurso. Faz a versão reduzida, no mesmo horário, e segue."
  ],
  acao: {
    titulo: "O que fazer agora",
    tempo: "2 minutos",
    passos: [
      "Não tente compensar hoje à noite. Isso quase sempre falha e piora a sensação.",
      "Confirme o alarme de amanhã.",
      "Amanhã, execute a versão reduzida. Só ela. Já conta."
    ]
  }
};

/* ---- Tela final, depois do dia 21 ---- */
const FINAL = {
  titulo: "Ciclo completo",
  linha: "21 dias.",
  leitura: [
    "Você chegou ao fim do protocolo. O que vem agora é a parte que decide se isso vira resultado ou vira mais uma coisa que você fez uma vez.",
    "A instrução do dia 20 continua valendo: mesma ação, mesmo horário, por mais 30 dias, sem aumentar.",
    "O app continua aberto. Volte em qualquer dia que precisar reler — principalmente os dias 15, 16 e 17, que são os que sustentam tudo depois daqui."
  ]
};

if (typeof module !== "undefined") {
  module.exports = { FASES, DIAS, RECAIDA, FINAL };
}
