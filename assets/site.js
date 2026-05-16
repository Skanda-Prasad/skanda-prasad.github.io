const routes = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/research.html', label: 'Research' },
  { href: '/projects.html', label: 'Projects' },
  { href: '/writing.html', label: 'Writing' },
  { href: '/experience.html', label: 'Experience' },
  { href: '/contact.html', label: 'Contact' }
];

const normalizePath = (path) => path.replace(/\/index\.html$/, '/').replace(/\/+/g, '/');
const sectionHeader = (title, subtitle = '') => `<div class="section-header"><h2 class="section-title">${title}</h2>${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}</div>`;
const tag = (value) => `<span class="tag">${value}</span>`;
const externalLinkButton = (url, label) => `<a class="btn ghost" href="${url}" target="_blank" rel="noopener">${label}</a>`;
const projectCard = ({ title, description, tags = [], route, links = [] }) => `
  <article class="card hover">
    <h3>${title}</h3>
    <p class="muted">${description}</p>
    <div class="tag-row">${tags.map(tag).join('')}</div>
    <p><a href="${route}">View detailed project page</a></p>
    <div class="quick-links">${links.map((l) => externalLinkButton(l.url, l.label)).join('')}</div>
  </article>`;
const writingItem = ({ title, context, year, summary, links }) => `
  <article class="card hover">
    <h3>${title}</h3>
    <p class="muted"><strong>Context:</strong> ${context} | <strong>Year:</strong> ${year}</p>
    <p>${summary}</p>
    <div class="quick-links">${links.map((l) => externalLinkButton(l.url, l.label)).join('')}</div>
  </article>`;

function renderNavbar() {
  const current = normalizePath(location.pathname);
  const navList = routes.map(({ href, label }) => `<li><a class="${current === normalizePath(href) ? 'active' : ''}" href="${href}">${label}</a></li>`).join('');
  document.getElementById('site-header').innerHTML = `
    <div class="container nav-wrap">
      <a class="brand" href="/">Skanda Shreesha Prasad</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>
      <ul class="nav-links" id="primary-nav">${navList}</ul>
    </div>`;
  const button = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="container footer-wrap">
      <div>© 2026 Skanda Shreesha Prasad</div>
      <nav aria-label="Footer" class="footer-links">
        <a href="/">Home</a><a href="/projects.html">Projects</a><a href="/writing.html">Writing</a><a href="/contact.html">Contact</a>
      </nav>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  window.ui = { sectionHeader, projectCard, writingItem, tag, externalLinkButton };
});
