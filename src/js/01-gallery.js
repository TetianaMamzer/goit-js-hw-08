import Simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryCreate = document.querySelector('div.gallery');
const galleryCard = createCard(galleryItems);

console.log(galleryCard);
galleryCreate.insertAdjacentHTML('beforeend', galleryCard);
galleryCreate.addEventListener('click', onCardGallery);

function createCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
   </li>
    `;
    })
    .join('');
}

function onCardGallery(event) {
  event.preventDefault();
  window.addEventListener('keydown', closeModalKeydown);
  const findGalleryCard = event.target.classList.contains('gallery__image');

  if (!findGalleryCard) {
    return;
  }

  event.target.removeAttribute('data-source');
  const urlImgCard = event.target.getAttribute('data-source');
  const desImgCard = event.target.getAttribute('alt');
}

function closeModalKeydown(e) {
  if (e.code === 'Escape') {
    lightbox.close(() => {
      window.removeEventListener('keydown', closeModalKeydown);
    });
  }
}

const lightbox = new Simplelightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  closeText: '🐠',
});
