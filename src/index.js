import './sass/main.scss';
import axios from 'axios';
import Notiflix from 'notiflix';
import fetchGallary from './js/api.js';
import SimpleLightbox from 'simplelightbox';
import { cardMarkup } from './js/carg-markup.js';
import { refs } from './js/refs.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

let searchQuery = '';
let page = 1;

function onFindItems(e) {
  e.preventDefault();

  searchQuery = e.currentTarget.elements.searchQuery.value;
  if (searchQuery === '') {
    return;
  }

  fetchGallary(searchQuery, page).then(data => {
    if (data.totalHits === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.',
      );
    }
    refs.gallary.innerHTML = '';
    refs.gallary.insertAdjacentHTML('beforeend', cardMarkup(data.hits));
    addSimpleLightbox();
    if (data.totalHits > 0) {
      refs.loadMoreBtn.classList.remove('is_hidden');
    }
  });
}

function loadMoreCards() {
  page += 1;

  fetchGallary(searchQuery, page).then(data => {
    if (data.totalHits > 0) {
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    } else {
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
    refs.gallary.insertAdjacentHTML('beforeend', cardMarkup(data.hits));
    addSimpleLightbox();
  });
}

refs.inputForm.addEventListener('submit', onFindItems);
refs.loadMoreBtn.addEventListener('click', loadMoreCards);

function addSimpleLightbox() {
  new SimpleLightbox('.gallery a').refresh();
}
