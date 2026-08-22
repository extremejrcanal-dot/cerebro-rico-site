/* ============================================================
   CÉREBRO RICO — VSL + CTA atrasado
   Este arquivo faz duas coisas:
     1. troca o espaço reservado do vídeo pelo player do VTurb
     2. esconde os botões de compra até 8:30 de vídeo
   ============================================================ */
(function () {
  var REVELAR_EM = 510;                 // 8:30 em segundos
  var CHAVE = "cr_vsl_liberado";
  var CONTA = "618e6aba-dba5-44c2-ae23-f0af83c3113a";
    var PLAYER = "6a88e6608c562ba2fe684f56";

  /* ---------- 1. o player ---------- */
  function porPlayer() {
    var alvo = null;
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].children.length === 0 &&
          /V[íi]deo em breve/i.test(divs[i].textContent || "")) {
        alvo = divs[i];
        break;
      }
    }
    if (!alvo) return;

    var p = document.createElement("vturb-smartplayer");
    p.id = "vid-" + PLAYER;
    p.setAttribute("style", "display:block;margin:0 auto;width:100%;border-radius:14px;overflow:hidden");
    p.innerHTML = '<div class="vturb-player-placeholder" style="position:relative;width:100%;padding:56.25% 0 0;z-index:0;background-color:black"></div>';
    alvo.parentNode.replaceChild(p, alvo);

    var s = document.createElement("script");
    s.src = "https://scripts.converteai.net/" + CONTA + "/players/" + PLAYER + "/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }

  /* ---------- 1b. tamanho do player ----------
     Celular: ocupa a tela inteira, sem margem lateral.
     Computador: cresce alem do container da pagina, ate 880px.
     ------------------------------------------------ */
  function porTamanho() {
    var css = document.createElement("style");
    css.textContent =
      ".vsl-caixa{max-width:none !important;padding:0 !important;border:0 !important;background:none !important}" +
      "vturb-smartplayer{display:block !important;width:100% !important;margin:0 !important;" +
        "transform:none !important;border-radius:14px;overflow:hidden}" +
      "@media(max-width:700px){" +
        ".vsl-caixa{width:100vw !important;margin-left:calc(50% - 50vw) !important;" +
        "margin-right:calc(50% - 50vw) !important}" +
        "vturb-smartplayer{border-radius:0}" +
      "}" +
      "@media(min-width:701px){" +
        ".vsl-caixa{width:min(880px,92vw) !important;margin-left:50% !important;" +
        "transform:translateX(-50%) !important}" +
      "}";
    document.head.appendChild(css);
  }

  /* ---------- 2. o CTA atrasado ---------- */
  function alvos() {
    return document.querySelectorAll(".cta-travado-desligado");
  }
  function esconder() {
    var e = alvos();
    for (var i = 0; i < e.length; i++) e[i].classList.add("cta-oculto");
  }
  function revelar() {
    var e = alvos();
    for (var i = 0; i < e.length; i++) e[i].classList.remove("cta-oculto");
    try { localStorage.setItem(CHAVE, "1"); } catch (x) {}
  }

  function porCta() {
    var css = document.createElement("style");
    css.textContent = ".cta-oculto{display:none !important}";
    document.head.appendChild(css);

    var jaViu = false;
    try { jaViu = localStorage.getItem(CHAVE) === "1"; } catch (x) {}
    if (jaViu) return;               // quem já chegou lá não espera de novo

    esconder();

    // caminho principal: o tempo do próprio vídeo
    document.addEventListener("smartplayer:ready", function () {
      try {
        var pl = window.smartplayer;
        if (pl && pl.on) {
          pl.on("timeupdate", function () {
            if (pl.video && pl.video.currentTime >= REVELAR_EM) revelar();
          });
        }
      } catch (x) {}
    });

    // rede de segurança: se o player falhar, libera pelo relógio
    setTimeout(revelar, REVELAR_EM * 1000);
  }

  function iniciar() { porTamanho(); porPlayer(); porCta(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
