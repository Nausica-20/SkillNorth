document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const desktopTriggers = Array.from(document.querySelectorAll('.nav-trigger'));
  const megaMenus = Array.from(document.querySelectorAll('.mega-menu'));

  const closeMegaMenus = () => {
    desktopTriggers.forEach(trigger => trigger.setAttribute('aria-expanded', 'false'));
    megaMenus.forEach(menu => { menu.hidden = true; });
  };

  desktopTriggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      event.stopPropagation();
      const menu = document.getElementById(trigger.getAttribute('aria-controls'));
      const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
      closeMegaMenus();
      trigger.setAttribute('aria-expanded', String(willOpen));
      if (menu) menu.hidden = !willOpen;
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-item')) closeMegaMenus();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMegaMenus();
      closeMobileMenu();
    }
  });

  function closeMobileMenu() {
    if (!mobileToggle || !mobileMenu) return;
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Open navigation');
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
  }

  function openMobileMenu() {
    if (!mobileToggle || !mobileMenu) return;
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.setAttribute('aria-label', 'Close navigation');
    mobileMenu.hidden = false;
    document.body.classList.add('menu-open');
  }

  mobileToggle?.addEventListener('click', event => {
    event.stopPropagation();
    const open = mobileToggle.getAttribute('aria-expanded') === 'true';
    if (open) closeMobileMenu(); else openMobileMenu();
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMobileMenu();
  });
});
