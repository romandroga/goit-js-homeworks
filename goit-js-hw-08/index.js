"use strict";

import gallery from "./gallery-items.js";

const galleryWrapper = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

let current;
let previous;
let next;
let parent;

gallery.forEach(elem => {
  const galleryItem = document.createElement("img");
  galleryItem.classList.add("gallery__item", "gallery__image", "gallery__link");
  galleryItem.src = elem.preview;
  galleryItem.alt = elem.description;
  galleryItem.dataset.source = elem.original;
  galleryWrapper.append(galleryItem);
});

galleryWrapper.addEventListener("click", event => {
  event.target.src = event.target.dataset.source;
  lightbox.classList.add("is-open");
  lightboxImage.src = event.target.src;
  current = event.target;
  parent = current.parentElement;
});

window.addEventListener("keydown", event => {
  if (event.keyCode === 27) {
    lightbox.classList.remove("is-open");
  }
  if (event.keyCode === 37) {
    if (current !== parent.firstElementChild) {
      previous = current.previousElementSibling;
      lightboxImage.src = previous.dataset.source;
      current = previous;
    }
  }
  if (event.keyCode === 39) {
    if (current !== parent.lastElementChild) {
      next = current.nextElementSibling;
      lightboxImage.src = next.dataset.source;
      current = next;
    }
  }
});

lightbox.addEventListener("click", event => {
  if (event.target === document.querySelector(".lightbox__content")) {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
  }
  if (event.target === document.querySelector(".lightbox__button")) {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
  }
});
