/* ============================================================
   CEREBRO RICO — Pixel do Meta
   ID: 1839862986613015  (conta antiga, com historico de vendas)

   Eventos enviados daqui:
     PageView          — ao abrir a pagina
     ViewContent       — quando a pessoa assiste 30s de VSL
     InitiateCheckout  — ao clicar em qualquer botao de compra

   O evento Purchase NAO sai daqui. Ele vem da Kirvano, que
   conhece o valor real da venda (com bump, com upsell). Mandar
   Purchase do navegador duplicaria a contagem.
   ============================================================ */
(function () {
  var PIXEL = "1839862986613015";
  var VIEW_EM = 30;

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', PIXEL);
  fbq('track', 'PageView');

  var jaMarcou = false;
  document.addEventListener("smartplayer:ready", function () {
    try {
      var pl = window.smartplayer;
      if (pl && pl.on) {
        pl.on("timeupdate", function () {
          if (!jaMarcou && pl.video && pl.video.currentTime >= VIEW_EM) {
            jaMarcou = true;
            fbq('track', 'ViewContent', {
              content_name: 'VSL Cerebro Rico',
              content_type: 'product'
            });
          }
        });
      }
    } catch (e) {}
  });

  function ligarCliques() {
    var b = document.querySelectorAll('a[href*="pay.kirvano.com"]');
    for (var i = 0; i < b.length; i++) {
      b[i].addEventListener("click", function () {
        fbq('track', 'InitiateCheckout', {
          content_name: 'Cerebro Rico 21 dias',
          value: 47.00,
          currency: 'BRL'
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ligarCliques);
  } else {
    ligarCliques();
  }
})();
