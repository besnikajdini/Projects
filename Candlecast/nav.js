// Mobile hamburger menu — shared across every page, no dependencies.
(function(){
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if(!toggle || !menu) return;

  function closeMenu(){
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }
  function openMenu(){
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
  }

  toggle.addEventListener('click', ()=>{
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });
  menu.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', ()=>{ if(window.innerWidth > 820) closeMenu(); });
})();
