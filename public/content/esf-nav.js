/* Español Sin Fronteras — chapter page nav bar */
(function () {
  var nav = document.createElement('div');
  nav.id = 'esf-nav';
  nav.innerHTML =
    '<a href="/" id="esf-nav-logo" title="Inicio">' +
      '<img src="/esf-logo.png" alt="Español Sin Fronteras" style="height:32px;width:auto;display:block;" />' +
    '</a>' +
    '<div style="display:flex;align-items:center;gap:16px;">' +
      '<a href="/" class="esf-nav-link">Inicio</a>' +
      '<a href="/#cursos" class="esf-nav-link">Cursos</a>' +
      '<a href="/oportunidades" class="esf-nav-link">Oportunidades</a>' +
    '</div>';
  var style = document.createElement('style');
  style.textContent =
    '#esf-nav{position:fixed;top:0;left:0;right:0;z-index:9999;' +
    'height:48px;background:hsl(222,47%,8%);border-bottom:1px solid rgba(255,255,255,0.08);' +
    'display:flex;align-items:center;justify-content:space-between;padding:0 20px;' +
    'box-shadow:0 2px 12px rgba(0,0,0,0.4);}' +
    '.esf-nav-link{color:rgba(255,255,255,0.55);font-family:Inter,sans-serif;font-size:13px;' +
    'font-weight:600;text-decoration:none;transition:color 0.15s;}' +
    '.esf-nav-link:hover{color:#fff;}' +
    'body{padding-top:48px!important;}';
  document.head.appendChild(style);
  document.body.insertBefore(nav, document.body.firstChild);
})();
