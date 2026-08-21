/* ============================================================
   CÉREBRO RICO — guarda de conteúdo
   Se o conteudo.js não carregar (bloqueador de anúncios,
   conexão ruim, cache corrompido), o app mostrava uma tela
   com a barra do topo e nada embaixo. O comprador achava
   que tinha sido enganado.
   Este arquivo troca a tela vazia por uma explicação.
   ============================================================ */
(function () {
  var ESPERA = 1500;

  function faltouConteudo() {
    if (window.__falhouConteudo === 1) return true;
    try {
      if (typeof DIAS === "undefined") return true;
      if (!Array.isArray(DIAS) || DIAS.length === 0) return true;
    } catch (e) { return true; }
    return false;
  }

  function jaAvisou() { return !!document.getElementById("cr-guarda"); }

  function avisar() {
    if (!faltouConteudo() || jaAvisou()) return;

    var d = document.createElement("div");
    d.id = "cr-guarda";
    d.setAttribute("style",
      "position:fixed;inset:0;z-index:99999;background:#0d0d0f;color:#e8e8ec;" +
      "display:grid;place-items:center;padding:28px;text-align:center;" +
      "font-family:Inter,system-ui,-apple-system,sans-serif");

    d.innerHTML =
      '<div style="max-width:430px">' +
        '<div style="font-size:21px;font-weight:700;line-height:1.3;letter-spacing:-.02em;margin-bottom:16px">' +
          'Não conseguimos carregar o conteúdo de hoje.' +
        '</div>' +
        '<div style="font-size:15px;line-height:1.7;color:rgba(255,255,255,.62);margin-bottom:26px">' +
          '<b style="color:#d99a2b">Seu acesso está ativo.</b> Isso é um problema de carregamento, não da sua compra.' +
          '<br><br>Quase sempre é bloqueador de anúncios ou conexão instável.' +
        '</div>' +
        '<button id="cr-recarregar" style="background:#d99a2b;color:#140d02;border:0;' +
          'font-family:inherit;font-size:15px;font-weight:700;padding:16px 30px;' +
          'border-radius:11px;cursor:pointer;width:100%">Tentar de novo</button>' +
        '<div style="font-size:13.5px;line-height:1.7;color:rgba(255,255,255,.42);margin-top:22px">' +
          'Se continuar, tente numa aba anônima.<br>Ou escreva para ' +
          '<a href="mailto:extremejrcanal@gmail.com" style="color:#d99a2b;text-decoration:none">extremejrcanal@gmail.com</a>' +
          ' que eu resolvo no mesmo dia.' +
        '</div>' +
      '</div>';

    document.body.appendChild(d);

    var b = document.getElementById("cr-recarregar");
    if (b) b.addEventListener("click", function () {
      try { if (window.caches) caches.keys().then(function(ks){ ks.forEach(function(k){ caches.delete(k); }); }); } catch (e) {}
      setTimeout(function(){ location.reload(); }, 250);
    });
  }

  function iniciar() { setTimeout(avisar, ESPERA); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
