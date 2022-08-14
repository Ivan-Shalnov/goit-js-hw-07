import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs={
    galleryCont: document.querySelector('.gallery')
}
// CREATE MARKUP
const galleryMarkup=galleryItems.map(({preview, original, description})=>{
   return ` <div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`
}).join('');
refs.galleryCont.insertAdjacentHTML('beforeend', galleryMarkup);

// MODAL WINDOW ONLICK
refs.galleryCont.addEventListener('click', handleClickImage);
let modalWindowInstance;
function handleClickImage(event){
    if(event.target.nodeName!=='IMG')return
    event.preventDefault();
    const imgRef=event.target;
    const original=imgRef.dataset.source;
    const alt=imgRef.alt;
    const imgMarkup=`
    <img class="gallery__image" src="${original}" alt="${alt}">`;
    
    modalWindowInstance=basicLightbox.create(imgMarkup,
        {
            onShow: addKeyListener,
            onClose: removeKeyListener,
        });
     modalWindowInstance.show();
}
function addKeyListener(){
    window.addEventListener('keydown',handleCloseModal)
}
function removeKeyListener(){
    window.removeEventListener('keydown',handleCloseModal)
}
function handleCloseModal(event){
    if(event.key !=='Escape') return
    modalWindowInstance.close();
}