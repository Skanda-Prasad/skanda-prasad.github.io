const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/research.html', label: 'Research' },
  { href: '/projects.html', label: 'Projects' },
  { href: '/writing.html', label: 'Writing' },
  { href: '/experience.html', label: 'Experience' },
  { href: '/contact.html', label: 'Contact' }
];

const normalize = (p) => p.replace(/\/index\.html$/, '/').replace(/\/+/g, '/');
const SectionHeader = (title, subtitle = '') => `<div><h2 class="section-title">${title}</h2>${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}</div>`;
const Tag = (t) => `<span class="tag">${t}</span>`;
const ExternalLinkButton = (label, href) => `<a class="btn secondary" target="_blank" rel="noopener" href="${href}">${label}</a>`;
const ProjectCard = ({ title, description, tags = [], route, links = [] }) => `<article class="card"><h3>${title}</h3><p class="muted">${description}</p><div class="tag-row">${tags.map(Tag).join('')}</div><p><a href="${route}">View detailed project page</a></p><div class="inline-links">${links.map((l) => ExternalLinkButton(l.label, l.href)).join('')}</div></article>`;
const WritingItem = ({ title, context, year, summary, links = [] }) => `<article class="card"><h3>${title}</h3><p class="muted"><strong>Context:</strong> ${context} | <strong>Year:</strong> ${year}</p><p>${summary}</p><div class="inline-links">${links.map((l) => ExternalLinkButton(l.label, l.href)).join('')}</div></article>`;

function Navbar() {
  const current = normalize(location.pathname);
  const html = NAV_ITEMS.map((x) => `<li><a class="${current === normalize(x.href) ? 'active' : ''}" href="${x.href}">${x.label}</a></li>`).join('');
  document.getElementById('site-header').innerHTML = `<div class="container nav-wrap"><a class="brand" href="/">Skanda Shreesha Prasad</a><button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button><ul id="primary-nav" class="nav-links">${html}</ul></div>`;
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });
}

function Footer() {
  document.getElementById('site-footer').innerHTML = `<div class="container footer-wrap"><div>© 2026 Skanda Shreesha Prasad</div><nav class="footer-links" aria-label="Footer"><a href="/">Home</a><a href="/projects.html">Projects</a><a href="/writing.html">Writing</a><a href="/contact.html">Contact</a></nav></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  Navbar();
  Footer();
  window.SiteUI = { SectionHeader, ProjectCard, WritingItem, Tag, ExternalLinkButton };
});
