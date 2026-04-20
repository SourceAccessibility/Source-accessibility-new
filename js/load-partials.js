// js/load-partials.js
document.addEventListener('DOMContentLoaded', () => {
  const includeTargets = document.querySelectorAll('[data-include]');

  includeTargets.forEach(target => {
    const url = target.getAttribute('data-include');
    if (!url) return;

    fetch(url)
      .then(response => response.text())
      .then(html => {
        target.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading partial:', url, error);
      });
  });

  // Keep the copyright year up to date in the footer
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});