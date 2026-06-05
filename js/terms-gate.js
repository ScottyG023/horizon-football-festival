// Terms & Conditions gate for the Register page.
// The "Register your team" button stays locked until the visitor has opened
// every T&C section. The durable record of acceptance is captured by the
// Microsoft Form itself (a required "I accept the T&Cs" question) — this gate
// only ensures the visitor has been through the terms before reaching it.

document.addEventListener('DOMContentLoaded', () => {
  const termsSection = document.getElementById('terms');
  const cta = document.getElementById('registerCta');
  const label = document.getElementById('registerCtaLabel');
  const dotsWrap = document.getElementById('termsDots');
  const progressText = document.getElementById('termsProgressText');
  if (!termsSection || !cta) return;

  const sections = Array.from(termsSection.querySelectorAll('details'));
  const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.dot')) : [];
  const total = sections.length;
  const opened = new Set();

  function update() {
    const count = opened.size;
    dots.forEach((dot, i) => dot.classList.toggle('done', i < count));
    if (progressText) {
      progressText.textContent = count >= total
        ? 'All sections read — you can now register'
        : `Read ${count} of ${total} sections to register`;
    }
    if (count >= total) unlock();
  }

  function unlock() {
    if (!cta.classList.contains('is-locked')) return;
    cta.classList.remove('is-locked');
    cta.removeAttribute('aria-disabled');
    if (label) label.textContent = 'Register your team';
  }

  sections.forEach((details, i) => {
    details.addEventListener('toggle', () => {
      // Mark a section read the first time it is opened; it stays read.
      if (details.open && !opened.has(i)) {
        opened.add(i);
        update();
      }
    });
  });

  // Belt-and-braces: block activation while still locked (covers keyboard focus
  // even though CSS also sets pointer-events:none on the locked button).
  cta.addEventListener('click', (e) => {
    if (cta.classList.contains('is-locked')) {
      e.preventDefault();
      termsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  update();
});
