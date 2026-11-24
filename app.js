/* Adequar Ambientes Planejados - comportamento da página */
(function () {
  'use strict';

  var WA = 'https://wa.me/5511973249515?text=';
  function wa(t) { return WA + encodeURIComponent(t); }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var slot = function (n) { return document.querySelector('[data-slot="' + n + '"]'); };

  /* ---------- Conteúdo editável ---------- */
  var DIFS = [
    { n: '01', title: 'Tradição e Experiência', text: 'Há 35 anos no ramo moveleiro transformando lares.' },
    { n: '02', title: 'Qualidade Garantida', text: 'Estrutura 100% MDF com 5 anos de garantia.' },
    { n: '03', title: 'Projetos 100% Personalizados', text: 'Soluções exclusivas alinhadas às últimas tendências de design de interiores.' },
    { n: '04', title: 'Agilidade e Eficiência', text: 'Atendimento rápido via WhatsApp e entrega ágil de orçamentos.' },
    { n: '05', title: 'Pontualidade na Entrega', text: 'Compromisso com prazos, com móveis feitos com perfeição e montados antes do prazo.' }
  ];

  /* Para acrescentar um ambiente, basta incluir uma linha aqui. */
  var AMBS = [
    { name: 'Cozinhas', one: 'cozinha', img: 'assets/fotos/cozinha-3.jpg', pos: '45% 60%' },
    { name: 'Quartos', one: 'quarto', img: 'assets/fotos/quarto-1.jpg', pos: '55% 50%' },
    { name: 'Banheiros', one: 'banheiro', img: 'assets/fotos/banheiro-1.jpg', pos: '50% 55%' },
    { name: 'Home Office', one: 'home office', img: 'assets/fotos/homeoffice-1.jpg', pos: '40% 60%' },
    { name: 'Casa Completa', one: 'casa completa', img: 'assets/fotos/casa-tv-2.jpg', pos: '35% 70%' }
  ];

  var CATS = ['Todos', 'Cozinhas', 'Quartos', 'Banheiros', 'Home Office', 'Casa Completa'];

  /* Para acrescentar uma foto na galeria, inclua uma linha aqui e a imagem em assets/fotos/. */
  var GALERIA = [
    { label: 'Cozinha branca planejada', cat: 'Cozinhas', src: 'assets/fotos/cozinha-1.jpg' },
    { label: 'Quarto com portas de espelho', cat: 'Quartos', src: 'assets/fotos/quarto-1.jpg' },
    { label: 'Banheiro com armário espelhado', cat: 'Banheiros', src: 'assets/fotos/banheiro-1.jpg' },
    { label: 'Painel de TV em madeira e cinza', cat: 'Casa Completa', src: 'assets/fotos/casa-tv-1.jpg' },
    { label: 'Escrivaninha retrátil em madeira', cat: 'Home Office', src: 'assets/fotos/homeoffice-1.jpg' },
    { label: 'Cozinha cinza com gavetas', cat: 'Cozinhas', src: 'assets/fotos/cozinha-2.jpg' },
    { label: 'Guarda-roupa com portas de espelho', cat: 'Quartos', src: 'assets/fotos/quarto-2.jpg' },
    { label: 'Rack suspenso com painel ripado', cat: 'Casa Completa', src: 'assets/fotos/casa-tv-2.jpg' },
    { label: 'Gabinete de banheiro com pia esculpida', cat: 'Banheiros', src: 'assets/fotos/banheiro-2.jpg' },
    { label: 'Cozinha com bancada em madeira', cat: 'Cozinhas', src: 'assets/fotos/cozinha-3.jpg' },
    { label: 'Bancada de trabalho branca com gavetas', cat: 'Home Office', src: 'assets/fotos/homeoffice-2.jpg' },
    { label: 'Closet com gavetas e nichos', cat: 'Quartos', src: 'assets/fotos/quarto-3.jpg' },
    { label: 'Painel ripado com rack e prateleira', cat: 'Casa Completa', src: 'assets/fotos/casa-tv-3.jpg' },
    { label: 'Cozinha com geladeira embutida', cat: 'Cozinhas', src: 'assets/fotos/cozinha-4.jpg' },
    { label: 'Cozinha com armários suspensos e nichos', cat: 'Cozinhas', src: 'assets/fotos/cozinha-5.jpg' },
    { label: 'Área gourmet com armários', cat: 'Cozinhas', src: 'assets/fotos/cozinha-6.jpg' }
  ];

  var QUOTES = [
    { text: 'Atendimento rápido pelo whats e entrega do orçamento, móvel foi feito perfeito e montado antes do prazo. Recomendo!', author: 'Mônique Beatriz' },
    { text: 'Adorei o trabalho, entrega em dia é ótimo acabamento', author: 'F5 X Marketing Agência' }
  ];

  /* ---------- Estado ---------- */
  var state = { filter: 'Todos', anim: 0, q: 0, nome: '', tel: '', amb: 'Cozinha', msg: '' };

  /* ---------- Renderizações ---------- */
  function renderDifs() {
    slot('difs').innerHTML = DIFS.map(function (d) {
      return '<div class="card-dif" style="flex:1 1 300px;min-width:0;padding:36px 30px;display:flex;flex-direction:column;gap:16px">' +
        '<p class="serif" style="font-size:44px;line-height:1;color:#C99A64">' + d.n + '</p>' +
        '<h3 class="serif" style="font-size:26px;font-weight:500">' + d.title + '</h3>' +
        '<p style="font-size:15px;line-height:1.65;color:#B4B6B9">' + d.text + '</p></div>';
    }).join('');
  }

  function renderAmbs() {
    slot('ambs').innerHTML = AMBS.map(function (a) {
      var href = wa('Olá! Vim pelo site da Adequar Ambientes Planejados e gostaria de um orçamento de móveis planejados para ' + a.one + '.');
      return '<a class="card-amb" href="' + href + '" style="flex:1 1 320px;min-width:0;height:340px;display:block">' +
        '<img src="' + a.img + '" alt="' + a.name + '" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:' + a.pos + ';display:block">' +
        '<div class="veil" style="position:absolute;inset:0;background:rgba(11,11,11,.38);display:flex;flex-direction:column;justify-content:flex-end;padding:28px;gap:6px">' +
        '<h3 class="serif" style="font-size:32px;font-weight:500;color:#fff">' + a.name + '</h3>' +
        '<p style="font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#E3C4A0">Pedir orçamento →</p></div></a>';
    }).join('');
  }

  function renderCats() {
    var el = slot('cats');
    el.innerHTML = CATS.map(function (label) {
      var on = state.filter === label;
      return '<button type="button" data-cat="' + label + '" style="cursor:pointer;font:inherit;font-size:13px;letter-spacing:.08em;text-transform:uppercase;padding:12px 20px;min-height:44px;border:1px solid ' +
        (on ? '#8A5A2B' : '#BEBFC2') + ';background:' + (on ? '#8A5A2B' : '#fff') + ';color:' + (on ? '#fff' : '#141414') + '">' + label + '</button>';
    }).join('');
  }

  function renderTiles() {
    var anim = state.anim % 2 ? 'upfrontB' : 'upfrontA';
    var list = GALERIA.filter(function (t) { return state.filter === 'Todos' || t.cat === state.filter; });
    slot('tiles').innerHTML = list.map(function (t, i) {
      return '<button type="button" class="tile" data-src="' + t.src + '" data-label="' + t.label + '" aria-label="Ampliar ' + t.label + '" style="animation:' + anim +
        ' 1.2s cubic-bezier(.2,.8,.2,1) backwards;animation-delay:' + (i * 150) + 'ms">' +
        '<img src="' + t.src + '" alt="' + t.label + '" loading="lazy"><span class="cap">' + t.label + '</span></button>';
    }).join('');
  }

  function renderQuote() {
    var q = QUOTES[state.q];
    $('#q-text').textContent = q.text;
    $('#q-author').textContent = q.author;
    $('#q-pos').textContent = (state.q + 1) + ' / ' + QUOTES.length;
  }

  function updateForm() {
    var m = 'Olá! Vim pelo site da Adequar Ambientes Planejados e gostaria de um orçamento de móveis planejados para ' + state.amb.toLowerCase() + '.' +
      (state.nome.trim() ? ' Meu nome é ' + state.nome.trim() + '.' : '') +
      (state.tel.trim() ? ' Meu telefone: ' + state.tel.trim() + '.' : '') +
      (state.msg.trim() ? ' ' + state.msg.trim() : '');
    $('#wa-form').setAttribute('href', wa(m));
  }

  /* ---------- Aberto agora / Fechado agora (horário de Brasília) ---------- */
  function updateStatus() {
    var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var wd = get('weekday');
    var mins = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);
    var open = null, close = null;
    if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].indexOf(wd) > -1) { open = 480; close = 1080; }
    else if (wd === 'Sat') { open = 480; close = 840; }
    var text = 'Fechado agora', color = '#8A8C90';
    if (open !== null && mins >= open && mins < close) { text = 'Aberto agora'; color = '#1B8E4B'; }
    else if (open !== null && mins >= open - 60 && mins < open) { text = 'Abre em breve'; color = '#B7791F'; }
    $('#st-text').textContent = text;
    $('#st-dot').style.background = color;
  }

  /* ---------- Lightbox ---------- */
  function openLb(src, label) {
    var lb = $('#lightbox');
    var img = $('#lb-img');
    img.src = src; img.alt = label;
    lb.style.display = 'flex';
    $('#lb-close').focus();
  }
  function closeLb() { $('#lightbox').style.display = 'none'; $('#lb-img').removeAttribute('src'); }

  /* ---------- Menu mobile ---------- */
  function setMenu(open) { $('#menu').style.display = open ? 'flex' : 'none'; }

  /* ---------- Eventos ---------- */
  function init() {
    renderDifs(); renderAmbs(); renderCats(); renderTiles(); renderQuote(); updateForm(); updateStatus();
    setInterval(updateStatus, 60000);

    $('#burger').addEventListener('click', function () { setMenu($('#menu').style.display !== 'flex'); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-close]'), function (a) { a.addEventListener('click', function () { setMenu(false); }); });

    slot('cats').addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat]'); if (!b) return;
      state.filter = b.getAttribute('data-cat'); state.anim++;
      renderCats(); renderTiles();
    });
    slot('tiles').addEventListener('click', function (e) {
      var b = e.target.closest('.tile'); if (!b) return;
      openLb(b.getAttribute('data-src'), b.getAttribute('data-label'));
    });
    $('#lb-close').addEventListener('click', closeLb);
    $('#lightbox').addEventListener('click', function (e) { if (e.target === this) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });

    $('#q-prev').addEventListener('click', function () { state.q = (state.q + QUOTES.length - 1) % QUOTES.length; renderQuote(); });
    $('#q-next').addEventListener('click', function () { state.q = (state.q + 1) % QUOTES.length; renderQuote(); });

    $('#form').addEventListener('submit', function (e) { e.preventDefault(); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-f]'), function (el) {
      var k = el.getAttribute('data-f');
      var h = function () { state[k] = el.value; updateForm(); };
      el.addEventListener('input', h); el.addEventListener('change', h);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
