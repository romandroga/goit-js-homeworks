import './styles.css';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import fetchCountries from './js/fetchCountries';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import createCard from './templates/card-template.hbs';

const debounce = require('../node_modules/lodash.debounce');

const refs = {
  input: document.querySelector('#input'),
  resultList: document.querySelector('.result-list'),
};

refs.input.addEventListener('input', debounce(searchCountries, 500));

function searchCountries(e) {
  resetMarkdown();
  if (e.target.value !== '') {
    fetchCountries(e.target.value)
      .then(data => {
        if (data.length > 10) {
          createNotification();
          return;
        }
        createMarkdown(data);
      })
      .catch(error => console.error(error));
  }
}

function createMarkdown(data) {
  if (data.length >= 2 && data.length <= 10) {
    createCountryList(data);
    return;
  }
  if (data.length === 1) {
    createCountryCard(...data);
  }
}

function createCountryList(data) {
  const markup = data.reduce((acc, elem) => acc + `<li>${elem.name}</li>`, '');
  refs.resultList.insertAdjacentHTML('beforeend', markup);
}
function createCountryCard(data) {
  refs.resultList.insertAdjacentHTML('beforeend', createCard(data));
}
function createNotification() {
  PNotify.error({
    text: 'Too many matches found.Please enter a more specific querry',
  });
}
function resetMarkdown() {
  refs.resultList.innerHTML = ' ';
}
