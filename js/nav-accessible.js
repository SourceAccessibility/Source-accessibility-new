// Accessible dropdown for Services menu

document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('services-menu');

  if (!dropdownToggle || !dropdownMenu) return;

  // Toggle dropdown on click
  dropdownToggle.addEventListener('click', function (e) {
    const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    dropdownToggle.setAttribute('aria-expanded', String(!expanded));
    dropdownMenu.hidden = expanded;
    if (!expanded) {
      dropdownMenu.querySelector('a')?.focus();
    }
  });

  // Keyboard: close on Escape, loop focus
  dropdownMenu.addEventListener('keydown', function (e) {
    const items = Array.from(dropdownMenu.querySelectorAll('a'));
    const currentIndex = items.indexOf(document.activeElement);
    if (e.key === 'Escape') {
      dropdownMenu.hidden = true;
      dropdownToggle.setAttribute('aria-expanded', 'false');
      dropdownToggle.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (currentIndex + 1) % items.length;
      items[next].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (currentIndex - 1 + items.length) % items.length;
      items[prev].focus();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
      dropdownMenu.hidden = true;
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
