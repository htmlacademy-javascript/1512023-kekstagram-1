import {photos} from './create-photos.js';
const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnailsList = photos();
const thumbnailsFragment = document.createDocumentFragment();

thumbnailsList.forEach(({url, description, likes, comments}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments;

  thumbnailsFragment.appendChild(thumbnailElement);

});

thumbnailsContainer.appendChild(thumbnailsFragment);


