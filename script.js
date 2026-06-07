// Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.classList.contains('skill-item')) {
          const fill = e.target.querySelector('.skill-fill');
          if (fill) setTimeout(() => fill.classList.add('animate'), 200);
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Trigger skill bars on load for visible elements
  window.addEventListener('load', () => {
    document.querySelectorAll('.skill-item').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
        const fill = el.querySelector('.skill-fill');
        if (fill) setTimeout(() => fill.classList.add('animate'), 300);
      }
    });
  });

  document.querySelectorAll('.proj-preview img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
        // immagine già caricata — mostrala subito
        img.style.display = 'block';
        img.nextElementSibling.style.display = 'none';
    } else {
        // immagine non ancora caricata — aspetta l'evento
        img.addEventListener('load', () => {
            img.style.display = 'block';
            img.nextElementSibling.style.display = 'none';
        });
    }
});

// ============================================
// MENU HAMBURGER — aggiunto per supporto mobile
// Copia tutto questo blocco in fondo al tuo script.js
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

// Apri/chiudi menu al click sull'hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
});

// Chiudi il menu quando si clicca su un link
document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMobile.classList.remove('open');
  });
});

// Chiudi il menu se si ridimensiona la finestra oltre i 600px
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    hamburger.classList.remove('open');
    navMobile.classList.remove('open');
  }
});

//modalità dark o light

const modalita = document.getElementById("mode");

modalita.addEventListener("click", (event) =>{
  if(document.body.classList.contains('light')){
    document.body.classList.remove('light');
    modalita.innerText = "☾";
  } else{
    document.body.classList.add('light');
    modalita.innerText = "☼";
  }
});

