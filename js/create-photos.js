import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './utils.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Вася',
  'Коля',
  'Петя',
  'Таня',
  'Ира',
  'Дина',
  'Ваня',
  'Маша'
];

const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;

const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;
//const {messages, names} = getArraysWithMessagesAndNames();

const createIdGenerator = (min, max) => {
  let lastGeneratedId = min;
  return function () {
    if (lastGeneratedId > max){
      return null;
    }
    lastGeneratedId ++;
    return lastGeneratedId - 1;
  };
};

const getIdPhoto = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdUrl = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdForDescription = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getCommentsID = createRandomIdFromRangeGenerator(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);

const createComment = () => ({
  id: getCommentsID(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_ID_MIN,AVATAR_ID_MAX)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names),
});

const createPhoto = () => ({
  id: getIdPhoto(),
  url: `photos/${getIdUrl()}.jpg`,
  description: `The description of the photo Nr.${getIdForDescription()}.`,
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length:getRandomInteger(COMMENTS_COUNT_MIN,COMMENTS_COUNT_MAX)}, createComment),
});

const createPhotos = (size) => Array.from({length: size}, createPhoto);

export {createPhotos};
