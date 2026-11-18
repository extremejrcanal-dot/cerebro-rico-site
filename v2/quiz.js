/* ============================================================
   CÉREBRO RICO — FUNIL 2: quiz de 12 perguntas
   Cada resposta soma pontos de um perfil:
     R = recomeçador de segunda, S = sobrecarregado, D = distraído
   ou guarda um detalhe citado no resultado. Preço só aparece
   na página da VSL, depois do resultado.
   Eventos do pixel: QuizInicio, QuizMeio (pergunta 6) e
   QuizFim (com o perfil).
   ============================================================ */
(function(){
  var Q=[
    {b:"Aquecimento",p:"O que você mais quer manter por 21 dias?",o:[["Treino ou atividade física",{area:"o treino"}],["Alimentação",{area:"a alimentação"}],["Estudo ou um projeto",{area:"o estudo"}],["Acordar cedo e ter rotina",{area:"a rotina da manhã"}]]},
    {b:"Situação",p:"Quantas vezes você já recomeçou isso no último ano?",o:[["Uma ou duas",{R:0}],["De três a cinco",{R:1}],["Perdi a conta",{R:2}]]},
    {b:"Situação",p:"Em geral, até onde dura um recomeço seu?",o:[["Dois ou três dias",{R:1,dura:"dois ou três dias"}],["Uma semana",{R:2,dura:"uma semana"}],["Duas semanas ou mais",{S:1,dura:"duas semanas ou mais"}]]},
    {b:"Sinais",p:"Quando você falha um dia, o que passa pela cabeça no dia seguinte?",o:[["\"Já estraguei mesmo, recomeço na segunda\"",{R:3,frase:"já estraguei mesmo"}],["\"Hoje não dá, amanhã eu vejo\"",{S:2,frase:"hoje não dá"}],["Nem percebo que parei",{D:3,frase:"nem percebo que parei"}]]},
    {b:"Sinais",p:"O que mais faz você pular um dia?",o:[["Um dia que saiu do plano",{R:2}],["Cansaço ou agenda cheia",{S:3}],["Celular e distrações",{D:3}]]},
    {r:"Quase ninguém para no dia da falha. A maioria para no dia seguinte, quando faz a conta do \"já estraguei\". As próximas perguntas mostram como é esse dia para você."},
    {b:"Tentativas",p:"O que você já usou para tentar manter o hábito?",o:[["App de hábitos com sequência",{R:1,tent:"um app de sequência"}],["Planilha, planner ou agenda",{S:1,tent:"planilha ou planner"}],["Vídeos e conteúdo de motivação",{D:1,tent:"conteúdo de motivação"}],["Nada específico",{tent:""}]]},
    {b:"Tentativas",p:"Por que essa tentativa parou de funcionar?",o:[["Um dia perdido e eu desanimei",{R:2}],["Ficou trabalhoso de manter",{S:2}],["Esqueci de usar",{D:2}]]},
    {b:"Desejo",p:"Daqui a 21 dias, o que mudaria para você?",o:[["Voltar a confiar na minha palavra",{R:1,desejo:"voltar a confiar na sua palavra"}],["Ter uma rotina que cabe no meu dia",{S:1,desejo:"ter uma rotina que cabe no seu dia"}],["Parar de perder horas sem perceber",{D:1,desejo:"parar de perder horas sem perceber"}]]},
    {r:"No Ciclo do Comando, o plano para o dia seguinte à falha é escrito antes da queda. Quando você falha, o progresso continua onde estava."},
    {b:"Obstáculos",p:"Quanto tempo por dia você consegue dar a isso, de verdade?",o:[["Menos de 10 minutos",{S:2,tempo:"menos de 10 minutos"}],["De 10 a 30 minutos",{tempo:"de 10 a 30 minutos"}],["Mais de 30 minutos",{R:1,tempo:"mais de 30 minutos"}]]},
    {b:"Obstáculos",p:"Em que horário do dia você costuma falhar?",o:[["De manhã",{S:1,hora:"de manhã"}],["À tarde",{D:1,hora:"à tarde"}],["À noite",{R:1,hora:"à noite"}]]},
    {b:"Obstáculos",p:"Qual destas frases você mais diria sobre um método novo?",o:[["\"Mais um que eu vou largar\"",{R:2}],["\"Não tenho tempo para mais nada\"",{S:2}],["\"Vou esquecer de abrir\"",{D:2}]]},
    {b:"Compromisso",p:"Se existisse um plano pronto para o dia seguinte à falha, você usaria?",o:[["Sim, é o que falta",{}],["Talvez, depende do esforço",{S:1}],["Quero entender antes",{}]]}
  ];
  var PERFIS={
    R:{nome:"O recomeçador de segunda",diag:"O seu padrão é o tudo ou nada: um dia fora do plano vira motivo para largar a semana inteira e recomeçar na segunda."},
    S:{nome:"O sobrecarregado",diag:"O seu padrão é a agenda: quando o dia aperta, o hábito é o primeiro a sair, e voltar parece mais pesado a cada dia."},
    D:{nome:"O distraído pelo ruído",diag:"O seu padrão é o esquecimento: o hábito não é abandonado de propósito, ele some entre o celular e as interrupções do dia."}
  };
  function ev(n,d){ if(window.V2_EVENTO) V2_EVENTO(n,d||{rota:window.V2_ROTA}); }
  var tela=document.getElementById("q-tela");
  var Quiz={i:0,hist:[],st:null,meio:false,
    entrada:function(){
      var self=this;
      document.getElementById("q-ini").onclick=function(){ self.st={R:0,S:0,D:0,t:{}}; self.i=0; self.hist=[]; ev("QuizInicio"); self.render(); };
    },
    total:function(){ return Q.filter(function(q){return !q.r;}).length; },
    feitas:function(){ var n=0; for(var k=0;k<this.i;k++) if(!Q[k].r) n++; return n; },
    render:function(){
      var self=this;
      window.scrollTo(0,0);
      if(this.i>=Q.length) return this.carregando();
      if(!this.meio && this.feitas()>=6){ this.meio=true; ev("QuizMeio"); }
      var q=Q[this.i], pct=Math.round(100*this.feitas()/this.total());
      var topo='<div class="barra" aria-hidden="true"><i style="width:'+pct+'%"></i></div><div class="quiz-nav">'+(this.i>0?'<button class="voltar" id="q-volta" type="button">← Voltar</button>':'<span></span>')+'<span>'+this.feitas()+' de '+this.total()+'</span></div>';
      if(q.r){
        tela.innerHTML=topo+'<p class="reforco">'+q.r+'</p><button class="btn" id="q-seg" type="button">Continuar</button>';
        document.getElementById("q-seg").onclick=function(){ self.hist.push(null); self.i++; self.render(); };
      } else {
        tela.innerHTML=topo+'<span class="rotulo">'+q.b+'</span><h2>'+q.p+'</h2><div class="opcoes">'+q.o.map(function(o,k){return '<button class="opcao" type="button" data-k="'+k+'">'+o[0]+'</button>';}).join("")+'</div>';
        tela.querySelectorAll(".opcao").forEach(function(b){ b.onclick=function(){ var e=q.o[+b.dataset.k][1]; self.aplicar(e,1); self.hist.push(e); self.i++; self.render(); }; });
      }
      var v=document.getElementById("q-volta");
      if(v) v.onclick=function(){ self.i--; var e=self.hist.pop(); if(e) self.aplicar(e,-1); self.render(); };
    },
    aplicar:function(e,s){ var st=this.st; ["R","S","D"].forEach(function(k){ if(e[k]) st[k]+=s*e[k]; }); for(var k in e){ if("RSD".indexOf(k)<0){ if(s>0) st.t[k]=e[k]; else delete st.t[k]; } } },
    carregando:function(){
      var self=this, a=this.st.t;
      tela.innerHTML='<span class="rotulo">Montando o seu resultado</span><div class="loading"><div>✓ Área escolhida: '+(a.area||"o seu hábito")+'</div><div>✓ Quanto dura um recomeço: '+(a.dura||"não informado")+'</div><div>✓ O que você pensa no dia seguinte: "'+(a.frase||"—")+'"</div><div>✓ Tempo disponível: '+(a.tempo||"não informado")+'</div></div><div class="barra"><i id="q-load" style="width:10%"></i></div>';
      setTimeout(function(){ var l=document.getElementById("q-load"); if(l) l.style.width="100%"; },60);
      setTimeout(function(){ self.resultado(); },2600);
    },
    resultado:function(){
      var st=this.st, a=st.t, p="R";
      if(st.S>st[p]) p="S"; if(st.D>st[p]) p="D";
      var P=PERFIS[p];
      var cita='Você disse que um recomeço seu dura '+(a.dura||"pouco")+', que no dia seguinte pensa "'+(a.frase||"—")+'"'+(a.tent?' e que já tentou '+a.tent:'')+'.';
      tela.innerHTML='<div class="barra"><i style="width:100%"></i></div><span class="rotulo">O seu resultado</span><h1 style="font-size:clamp(28px,6.4vw,40px)">'+P.nome+'</h1><p class="lead">'+P.diag+'</p><div class="card stack"><p>'+cita+'</p><p>O ponto em comum: você não para no dia da falha. Para no dia seguinte, quando ainda não existe um plano para ele.</p></div>'
      +'<div class="card stack"><h3>O seu plano: 21 dias em 3 fases</h3><ul class="lista"><li><span><strong>Dias 1 a 7, Corte:</strong> tirar o que rouba '+(a.area||"o seu hábito")+' antes de adicionar algo novo.</span></li><li><span><strong>Dias 8 a 14, Comando:</strong> uma ação por dia, '+(a.tempo==="menos de 10 minutos"?"em menos de 10 minutos":"no tempo que você tem")+'.</span></li><li><span><strong>Dias 15 a 21, Constância:</strong> o plano escrito para o dia seguinte à falha, '+(a.hora?"pensado para quem costuma falhar "+a.hora:"pronto antes da queda")+'.</span></li></ul></div>'
      +'<div class="rafael-linha"><img src="/img/rafael-avatar.webp" alt="" width="44" height="44"><p>Na apresentação, o Rafael mostra como isso funciona no aplicativo'+(a.desejo?', para você '+a.desejo:'')+'.</p></div><a class="btn interno" href="/v2/?perfil='+p+'" data-evento="QuizParaVSL">Assistir à apresentação</a>';
      ev("QuizFim",{perfil:p,rota:window.V2_ROTA});
      if(window.V2_LINKS) V2_LINKS();
      window.scrollTo(0,0);
    }
  };
  Quiz.entrada();
})();
