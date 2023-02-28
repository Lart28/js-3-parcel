// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
            src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div> 
      `;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  const galleryClick = event.target.classList.contains("gallery__image");

  if (!galleryClick) {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {});
}
