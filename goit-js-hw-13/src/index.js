import './styles.css';
import InfiniteScroll from '../node_modules/infinite-scroll';
import cardTemplate from './templates/create-card-template.hbs';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  baseUrl:
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=',
  key: '15734458-d3f6ccb7088e2e7a90b6df1f7',
  proxy: 'https://cors-anywhere.herokuapp.com/',
};

let searchQuerry;

const infScroll = new InfiniteScroll(refs.gallery, {
  responseType: 'text',
  history: false,
  path() {
    return `${refs.proxy}${refs.baseUrl}${searchQuerry}&page=${this.pageIndex}&per_page=12&key=${refs.key}`;
  },
});

infScroll.on('load', response => {
  const cards = JSON.parse(response);
  if (cards.total) {
    const markup = cards.hits.reduce((acc, elem) => acc + cardTemplate(elem));
    const proxyElement = document.createElement('div');
    proxyElement.innerHTML = markup;
    const parsedItems = proxyElement.children;
    infScroll.appendItems(parsedItems);
  }
});

refs.form.addEventListener('submit', e => {
  if (e.currentTarget.elements.query.value !== '') {
    searchQuerry = e.currentTarget.elements.query.value;
    refs.gallery.innerHTML = '';
    infScroll.pageIndex = 1;
    infScroll.loadNextPage();
  }
  e.preventDefault();
});
