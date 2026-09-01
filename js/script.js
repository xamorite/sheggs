/* SHEQQS LENS — shared interaction layer */
const init = () => {

  /* ---------- iris page-load veil ---------- */
  const veil = document.querySelector('.iris-veil');
  if (veil){
    requestAnimationFrame(() => {
      setTimeout(() => veil.classList.remove('loading'), 150);
    });
  }

  /* ---------- header scroll state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  /* ---------- mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle){
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
    document.querySelectorAll('.main-nav a').forEach(a =>
      a.addEventListener('click', () => document.body.classList.remove('nav-open'))
    );
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:.15, rootMargin:'0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- custom cursor ring (desktop only) ---------- */
  const ring = document.querySelector('.cursor-ring');
  if (ring && matchMedia('(hover:hover)').matches){
    let x=0,y=0,tx=0,ty=0;
    window.addEventListener('mousemove', e => {
      tx = e.clientX; ty = e.clientY;
      ring.classList.add('is-active');
    });
    const loop = () => {
      x += (tx-x)*.18; y += (ty-y)*.18;
      ring.style.transform = `translate(${x}px,${y}px)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll('[data-cursor="big"]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-big'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-big'));
    });
    document.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
  }

  /* ---------- marquee duplication (seamless loop) ---------- */
  document.querySelectorAll('.marquee-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- portfolio filter (supports multiple galleries) ---------- */
  document.querySelectorAll('.filter-bar').forEach(filterBar => {
    const gallery = filterBar.nextElementSibling;
    const items = gallery && gallery.classList.contains('gallery')
      ? gallery.querySelectorAll('.gallery-item')
      : document.querySelectorAll('.gallery-item');
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        const match = cat === 'all' || item.dataset.cat === cat;
        item.classList.toggle('hide', !match);
      });
    });
  });

  /* ---------- lightbox ---------- */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox){
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    const imgWrap = lightbox.querySelector('.ph');
    const titleEl = lightbox.querySelector('.lb-title');
    const metaEl = lightbox.querySelector('.lb-meta');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lb-prev');
    const nextBtn = lightbox.querySelector('.lb-next');
    let current = 0;

    const open = (i) => {
      current = i;
      const it = items[current];
      imgWrap.className = 'ph ' + (it.dataset.tone || 'tone-1');
      
      const sourceImg = it.querySelector('img');
      let targetImg = imgWrap.querySelector('img');
      if (sourceImg) {
        if (!targetImg) {
          targetImg = document.createElement('img');
          imgWrap.appendChild(targetImg);
        }
        targetImg.src = sourceImg.src;
        targetImg.alt = sourceImg.alt || '';
      } else if (targetImg) {
        targetImg.remove();
      }

      titleEl.textContent = it.dataset.title || 'Untitled frame';
      metaEl.textContent = it.dataset.meta || '';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    const step = (dir) => {
      current = (current + dir + items.length) % items.length;
      open(current);
    };

    items.forEach((item, i) => item.addEventListener('click', () => open(i)));
    closeBtn && closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    prevBtn && prevBtn.addEventListener('click', () => step(-1));
    nextBtn && nextBtn.addEventListener('click', () => step(1));
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });
  }

  /* ---------- contact form (static demo — no backend) ---------- */
  const form = document.querySelector('.contact-form');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message sent';
      form.reset();
      setTimeout(() => { btn.textContent = original; }, 2600);
    });
  }

  /* ---------- year ---------- */
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
