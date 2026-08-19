const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const counters = document.querySelectorAll('[data-count]');

const animateCounter = (element) => {
  const target = Number(element.dataset.count);
  let current = 0;

  const step = () => {
    const increment = Math.ceil(target / 80);
    current += increment;

    if (current >= target) {
      element.textContent = target.toLocaleString();
      return;
    }

    element.textContent = current.toLocaleString();
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

counters.forEach((counter) => observer.observe(counter));

/* Application form -> pre-filled mailto (static-site friendly, CSP-safe) */
const applyForm = document.querySelector('#apply-form');

if (applyForm) {
  const errorEl = document.querySelector('#af-error');
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = applyForm.name.value.trim();
    const email = applyForm.email.value.trim();
    const phone = applyForm.phone.value.trim();
    const program = applyForm.program.value;
    const message = applyForm.message.value.trim();

    if (!name || !isEmail(email) || !phone || !program) {
      if (errorEl) errorEl.hidden = false;
      return;
    }
    if (errorEl) errorEl.hidden = true;

    const subject = `Application — ${program} — ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Program: ${program}\n` +
      `Message: ${message || '—'}\n`;

    window.location.href =
      `mailto:info@agihm.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
