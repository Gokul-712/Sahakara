// Landing page interactions
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '76px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#0d2038';
      links.style.padding = '20px 32px';
      links.style.borderBottom = '1px solid #1f3a5c';
      links.style.gap = '18px';
    });
  }
});
