// Terms & Conditions gate for the Register page.
// The "Register your team" button stays locked until the visitor ticks the
// "I have read and accept the Terms & Conditions" checkbox. The durable record
// of acceptance is captured by the Microsoft Form itself (a required "I accept
// the T&Cs" question) — this gate ensures the visitor confirms acceptance on
// the site before reaching the form.

document.addEventListener('DOMContentLoaded', () => {
  const accept = document.getElementById('termsAccept');
  const cta = document.getElementById('registerCta');
  const label = document.getElementById('registerCtaLabel');
  if (!accept || !cta) return;

  function sync() {
    const ok = accept.checked;
    cta.classList.toggle('is-locked', !ok);
    if (ok) {
      cta.removeAttribute('aria-disabled');
      if (label) label.textContent = 'Register your team';
    } else {
      cta.setAttribute('aria-disabled', 'true');
      if (label) label.textContent = 'Accept the terms to continue';
    }
  }

  accept.addEventListener('change', sync);

  // Belt-and-braces: block activation while still locked (covers keyboard focus
  // even though CSS also sets pointer-events:none on the locked button).
  cta.addEventListener('click', (e) => {
    if (cta.classList.contains('is-locked')) {
      e.preventDefault();
      accept.focus();
    }
  });

  // Reset on load so a back-button / bfcache restore doesn't show a stale
  // "accepted" state with the box unchecked.
  accept.checked = false;
  sync();
});
