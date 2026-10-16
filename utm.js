/* ============================================================
   CÉREBRO RICO — repasse de UTMs para o checkout da Kirvano

   O que faz:
     Pega utm_source, utm_medium, utm_campaign, utm_content,
     utm_term e fbclid da URL com que a pessoa chegou na página
     e coloca nos links de compra (pay.kirvano.com).
     Assim cada venda aparece na Kirvano com a campanha, o
     conjunto e o anúncio de origem.

   Regras de segurança:
     - Nunca sobrescreve um parâmetro que o link já tem. Em
       especial o "src" do VTurb fica intacto, porque é ele
       que liga a venda ao vídeo.
     - Se a pessoa chegou sem parâmetros, usa os guardados no
       navegador (valem por 7 dias).
     - Se algo falhar, o link continua exatamente como estava.
   ============================================================ */
(function () {
  var HOST = "pay.kirvano.com";
  var CHAVE = "cr_utm";
  var VALIDADE = 7 * 24 * 60 * 60 * 1000;
  var PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

  function daUrl() {
    var out = {};
    try {
      var qs = new URLSearchParams(location.search);
      for (var i = 0; i < PARAMS.length; i++) {
        var v = qs.get(PARAMS[i]);
        if (v) out[PARAMS[i]] = v;
      }
    } catch (e) {}
    return out;
  }

  function guardado() {
    try {
      var s = JSON.parse(localStorage.getItem(CHAVE) || "null");
      if (s && s.t && s.p && Date.now() - s.t < VALIDADE) return s.p;
    } catch (e) {}
    return {};
  }

  function guardar(p) {
    try { localStorage.setItem(CHAVE, JSON.stringify({ t: Date.now(), p: p })); } catch (e) {}
  }

  var atuais = daUrl();
  var params;
  if (Object.keys(atuais).length > 0) {
    // veio de um anúncio com fbclid mas sem utm_source: marca a origem como meta
    if (atuais.fbclid && !atuais.utm_source) atuais.utm_source = "meta";
    guardar(atuais);
    params = atuais;
  } else {
    params = guardado();
  }

  if (Object.keys(params).length === 0) return;   // nada para repassar

  function decorar(a) {
    try {
      if (!a || !a.href) return;
      var u = new URL(a.href, location.href);
      if (u.hostname !== HOST) return;
      var mudou = false;
      for (var k in params) {
        if (Object.prototype.hasOwnProperty.call(params, k) && !u.searchParams.has(k)) {
          u.searchParams.set(k, params[k]);
          mudou = true;
        }
      }
      if (mudou) a.href = u.toString();
    } catch (e) {}
  }

  function decorarTodos() {
    var l = document.querySelectorAll('a[href*="' + HOST + '"]');
    for (var i = 0; i < l.length; i++) decorar(l[i]);
  }

  // na hora do toque/clique, garante de novo (caso outro script tenha mexido no link)
  function aoInteragir(ev) {
    var t = ev.target;
    var a = t && t.closest ? t.closest("a") : null;
    if (a) decorar(a);
  }

  function iniciar() {
    decorarTodos();
    var ev = ["pointerdown", "touchstart", "click", "auxclick"];
    for (var i = 0; i < ev.length; i++) document.addEventListener(ev[i], aoInteragir, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
