import menu from './menu.json';
import cardTmpl from './templates/card-tmpl.hbs';
import './styles.css';

const links = {
  menuWrapper: document.querySelector('.menu'),
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

buildPageMarkdown(menu);

const currentTheme = localStorage.getItem('Theme');

if (currentTheme) {
  links.body.classList.add(currentTheme);
}
if (currentTheme === Theme.DARK) {
  links.switchInput.checked = true;
}

links.switchInput.addEventListener('change', changeTheme);

function buildPageMarkdown(arg) {
  const markdown = arg.map(card => cardTmpl(card)).join(' ');
  links.menuWrapper.insertAdjacentHTML('beforeend', markdown);
}

function changeTheme() {
  if (links.body.classList.contains(Theme.DARK)) {
    links.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
    return;
  }
  links.body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
}
