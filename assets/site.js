const navItems = [
  ['/', 'Home'], ['/about.html', 'About'], ['/research.html', 'Research'], ['/projects.html', 'Projects'], ['/writing.html', 'Writing'], ['/experience.html', 'Experience'], ['/contact.html', 'Contact']
];

function normalize(path) {
  return path.replace(/\/index\.html$/, '/').replace(/\/+/g, '/');
}

function renderNav() {
  const current = normalize(location.pathname);
  const header = document.getElementById('site-header');
  const links = navItems.map(([href, label]) => {
    const active = current === normalize(href) ? 'active' : '';
    return `<li><a class="${active}" href="${href}">${label}</a></li>`;
  }).join('');
  header.innerHTML = `<div class="container nav-wrap"><a class="brand" href="/">Skanda Shreesha Prasad</a><button class="nav-toggle" aria-label="Toggle navigation">Menu</button><ul class="nav-links">${links}</ul></div>`;
  const btn = header.querySelector('.nav-toggle');
  const nav = header.querySelector('.nav-links');
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  footer.innerHTML = `<div class="container footer-wrap"><div>© 2026 Skanda Shreesha Prasad</div><nav class="footer-links" aria-label="Footer"><a href="/">Home</a><a href="/projects.html">Projects</a><a href="/writing.html">Writing</a><a href="/contact.html">Contact</a></nav></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
