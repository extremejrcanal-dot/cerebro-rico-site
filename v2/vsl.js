/* ============================================================
   CÉREBRO RICO — FUNIL 2: player da VSL (VTurb)

   Enquanto a VSL v2 (Rafael) não está gravada, esta página usa
   o mesmo player da VSL atual. Quando a VSL v2 subir no VTurb,
   troque só o valor de PLAYER abaixo pelo ID do novo vídeo.

   O player entra depois que a página aparece na tela, para o
   texto e o botão não esperarem o vídeo carregar.
   ============================================================ */
(function () {
  var CONTA = "618e6aba-dba5-44c2-ae23-f0af83c3113a";
  var PLAYER = "6a88e6608c562ba2fe684f56";   // VSL atual. Trocar pelo ID da VSL v2.

  function porPlayer() {
    var alvo = document.getElementById("vsl-espaco");
    if (!alvo) return;
    var p = document.createElement("vturb-smartplayer");
    p.id = "vid-" + PLAYER;
    p.setAttribute("style", "display:block;margin:0 auto;width:100%");
    p.innerHTML = '<div class="vturb-player-placeholder" style="position:relative;width:100%;padding:56.25% 0 0;z-index:0;background-color:black"></div>';
    alvo.parentNode.replaceChild(p, alvo);
    var s = document.createElement("script");
    s.src = "https://scripts.converteai.net/" + CONTA + "/players/" + PLAYER + "/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }

  var feito = false;
  function vai() { if (!feito) { feito = true; porPlayer(); } }
  if (document.readyState === "complete") setTimeout(vai, 0);
  else window.addEventListener("load", function () { setTimeout(vai, 0); });
  setTimeout(vai, 1500);
})();
