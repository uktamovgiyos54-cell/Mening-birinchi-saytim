/* =========================================================
   Akademik Yordam — sayt skripti
   Mobil menyu · silliq o‘tish · FAQ · faol havola · animatsiya
   ========================================================= */
(function(){
  "use strict";

  /* ---------- Mobil menyu ---------- */
  var burger = document.getElementById('burger');
  var mnav   = document.getElementById('mobileNav');
  var scrim  = document.getElementById('scrim');

  function setMenu(open){
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
    mnav.classList.toggle('is-open', open);
    scrim.classList.toggle('is-open', open);
    if(open){ scrim.removeAttribute('hidden'); }
    else { window.setTimeout(function(){ if(!mnav.classList.contains('is-open')) scrim.setAttribute('hidden',''); }, 240); }
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function(){
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  scrim.addEventListener('click', function(){ setMenu(false); });

  Array.prototype.forEach.call(mnav.querySelectorAll('a'), function(a){
    a.addEventListener('click', function(){ setMenu(false); });
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true'){
      setMenu(false);
      burger.focus();
    }
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth > 900 && burger.getAttribute('aria-expanded') === 'true') setMenu(false);
  });

  /* ---------- Sticky header soyasi ---------- */
  var header = document.getElementById('header');
  function onScroll(){
    header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  /* ---------- Silliq o‘tish ---------- */
  var supportsSmooth = 'scrollBehavior' in document.documentElement.style;
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function(link){
    link.addEventListener('click', function(e){
      var id = link.getAttribute('href');
      if(!id || id === '#') return;
      var target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - (header.offsetHeight + 12);
      if(supportsSmooth){ window.scrollTo({top:top, behavior:'smooth'}); }
      else { window.scrollTo(0, top); }
      if(history.replaceState) history.replaceState(null, '', id);
    });
  });

  /* ---------- FAQ akkordeon ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.faq__q'), function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.faq__item');
      var open = item.classList.contains('is-open');
      Array.prototype.forEach.call(document.querySelectorAll('.faq__item'), function(it){
        it.classList.remove('is-open');
        var q = it.querySelector('.faq__q');
        if(q) q.setAttribute('aria-expanded','false');
      });
      if(!open){
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  });

  /* ---------- Faol navigatsiya havolasi ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('#desktopNav a'));
  var sections = navLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); });

  function markActive(){
    var pos = window.pageYOffset + header.offsetHeight + 80;
    var idx = -1;
    sections.forEach(function(sec,i){
      if(sec && sec.offsetTop <= pos) idx = i;
    });
    navLinks.forEach(function(a,i){ a.classList.toggle('is-active', i === idx); });
  }
  markActive();
  window.addEventListener('scroll', markActive, {passive:true});

  /* ---------- Loyiha rasmlari ----------
     Rasm hali qo‘shilmagan bo‘lsa, siniq rasm belgisi o‘rniga
     kartochkada chiroyli naqshli o‘rin (placeholder) qoladi. */
  Array.prototype.forEach.call(document.querySelectorAll('.pcard__media'), function(media){
    var img = media.querySelector('img');
    if(!img) return;
    function shown(){ if(img.naturalWidth > 0) media.classList.add('is-loaded'); }
    img.addEventListener('load', shown);
    if(img.complete) shown();
  });

  /* ---------- Hero animatsiyasi: xavfsizlik to‘ri ----------
     Hero elementlari animatsiya boshlanguncha ko‘rinmas turadi
     (CSS: animation-fill-mode backwards). Agar brauzer biror sababga
     ko‘ra animatsiyani ishga tushirmasa, ular ko‘rinmay qolardi.
     Ketma-ketlik 0.83s da tugaydi — 1.1s dan keyin majburan ochamiz. */
  window.setTimeout(function(){
    Array.prototype.forEach.call(document.querySelectorAll('.rise'), function(el){
      el.classList.add('is-done');
    });
  }, 1100);

  /* ---------- Suzuvchi Telegram tugmasi ----------
     "Aloqa" bo‘limi ekranga kelganda tugma yashiriladi: u yerda katta
     Telegram tugmasi bor, suzuvchi tugma esa kontentni to‘sib turadi. */
  var fab = document.querySelector('.fab');
  var aloqa = document.getElementById('aloqa');
  if(fab && aloqa && 'IntersectionObserver' in window){
    new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        fab.classList.toggle('is-hidden', en.isIntersecting);
      });
    }, {threshold:0.12}).observe(aloqa);
  }

  /* ---------- Yengil ko‘rinish animatsiyasi ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
    Array.prototype.forEach.call(reveals, function(el){ io.observe(el); });
  } else {
    Array.prototype.forEach.call(reveals, function(el){ el.classList.add('is-in'); });
  }

  /* ---------- Yil ---------- */
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
