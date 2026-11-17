/* ============================================================
   CÉREBRO RICO — FUNIL 2 (/v2): rota, UTMs e eventos

   Cada página define antes deste arquivo:
     window.V2_PAGINA = "vsl" | "quiz" | "materia"

   O que faz:
     1. Monta a rota percorrida (ex.: materia-quiz-vsl) e passa
        adiante nos links internos (classe "interno"), junto com
        as UTMs e o fbclid de quem chegou do anúncio.
     2. Nos links de compra (pay.kirvano.com) coloca
        sck=v2-<rota>, para cada venda mostrar por qual caminho
        do funil 2 a pessoa passou. Não mexe em parâmetro que o
        link já tem (o utm.js cuida das UTMs).
     3. Envia eventos personalizados ao pixel quando um link ou
        botão tem data-evento="Nome".
   Se algo falhar, os links continuam como estavam.
   ============================================================ */
(function () {
  var PAG = window.V2_PAGINA || "vsl";
  var LEVA = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
  var qs;
  try { qs = new URLSearchParams(location.search); } catch (e) { return; }

  var vinda = (qs.get("rota") || "").replace(/[^a-z-]/g, "").slice(0, 40);
  var rota = vinda ? vinda + "-" + PAG : PAG;
  window.V2_ROTA = rota;

  function interno(a) {
    try {
      var u = new URL(a.getAttribute("href"), location.href);
      for (var i = 0; i < LEVA.length; i++) {
        var v = qs.get(LEVA[i]);
        if (v && !u.searchParams.has(LEVA[i])) u.searchParams.set(LEVA[i], v);
      }
      u.searchParams.set("rota", rota);
      a.setAttribute("href", u.pathname + u.search + u.hash);
    } catch (e) {}
  }

  function compra(a) {
    try {
      var u = new URL(a.href);
      if (!u.searchParams.has("sck")) u.searchParams.set("sck", "v2-" + rota);
      a.href = u.toString();
    } catch (e) {}
  }

  window.V2_LINKS = function () {
    var l = document.querySelectorAll("a.interno");
    for (var i = 0; i < l.length; i++) interno(l[i]);
    var c = document.querySelectorAll('a[href*="pay.kirvano.com"]');
    for (var j = 0; j < c.length; j++) compra(c[j]);
  };

  window.V2_EVENTO = function (nome, dados) {
    try { if (window.fbq) fbq("trackCustom", nome, dados || {}); } catch (e) {}
  };

  document.addEventListener("click", function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest("[data-evento]") : null;
    if (t) window.V2_EVENTO(t.getAttribute("data-evento"), { rota: rota });
  }, true);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", window.V2_LINKS);
  else window.V2_LINKS();
})();
