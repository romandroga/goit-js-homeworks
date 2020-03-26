import apiService from "./apiService";
import debounce from "lodash.debounce";
// const debounce = require('../node_modules/lodash.debounce');


// refs.searchForm.addEventListener('input', debounce(searchFormHandler, 1500));



// refs.nextButton.addEventListener('click', ()=>{
//   searchFormHandler()
// })

// function searchFormHandler(e) {
//   let searchQuerry = e.target.value;
//   searchService.fetchImages(searchQuerry).then(response => {
//       renderGallery(response);
//     });
//   }
  

// function renderGallery(response) {   
//   const galleryItems = response.hits.reduce((acc, elem) => {
//     return acc + imageCardTemplate(elem);
//   }, '');
//  refs.gallery.insertAdjacentHTML('beforeend' , galleryItems)
// }

// const refs = {
//   searchForm: document.querySelector('#search-form'),
//   gallery: document.querySelector('#gallery'),
//   nextButton : document.querySelector('#next-page')
// };