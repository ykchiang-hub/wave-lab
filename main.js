// ── NAV SCROLL ───────────────────────────────────────────
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
})();

// ── MOBILE MENU ──────────────────────────────────────────
(function () {
  var burger = document.getElementById('burger');
  var links = document.getElementById('nav-links');
  if (!burger) return;
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ── SCROLL FADE-UP ───────────────────────────────────────
(function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fu').forEach(function (el) {
    obs.observe(el);
  });
})();
