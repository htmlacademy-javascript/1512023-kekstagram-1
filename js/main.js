import {createPhotos} from './create-photos.js';
import {renderThumbnails} from './create-thumbnails-list.js';

const PHOTOS_COUNT = 25;

const photos = createPhotos(PHOTOS_COUNT);

renderThumbnails(photos);
