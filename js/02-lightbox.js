import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs={
    galleryCont: document.querySelector('.gallery')
}
// CREATE MARKUP
const galleryMarkup=galleryItems.map(({preview, original, description})=>{
   return ` 
   <li class="gallery__item"><a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}"/>
 </a></li>`
}).join('');
refs.galleryCont.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });