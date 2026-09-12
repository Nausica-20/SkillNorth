(function () {
  'use strict';

  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-mobile-nav]');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.hidden = open;
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
    }
  });
})();
