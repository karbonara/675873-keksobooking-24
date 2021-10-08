import { getRandomCoordinates, getRandomNumber, getRandomArrayElements } from './utils.js';

const INTEGER_NUMBERS = 5;
const MIN_AVATARS = 0;
const MAX_AVATARS = 10;
const TITLES = ['Однокомнатная квартира', 'Двухкомнатная квартира', 'Трехкомнатная квартира', 'Студия'];
const PRICES = [1500, 2000, 2500, 3500, 5500, 6500];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = [1, 2, 3, 4];
const GUESTS = [2, 3, 4, 5, 6];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Уютная квартира', 'С видом на улицу', 'Можно с животными'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const NUMBER_OBJECTS = 10;

// Переменная со случайными аватарками пользователя
const randomAvatar = getRandomCoordinates(MIN_AVATARS, MAX_AVATARS);

// Переменные со случайными координатами
const lat = getRandomNumber(MIN_LAT, MAX_LAT, INTEGER_NUMBERS);
const lng = getRandomNumber(MIN_LNG, MAX_LNG, INTEGER_NUMBERS);

const printUser = function () {
  return {
    author: {
      avatar: randomAvatar < MAX_AVATARS ? `img/avatars/user0${randomAvatar}.png` : `img/avatars/user${randomAvatar}.png`,
    },
    offer: {
      title: getRandomArrayElements(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomArrayElements(PRICES),
      type: getRandomArrayElements(TYPES),
      rooms: getRandomArrayElements(ROOMS),
      guests: getRandomArrayElements(GUESTS),
      checkin: getRandomArrayElements(CHECKINS),
      checkout: getRandomArrayElements(CHECKOUTS),
      features: getRandomArrayElements(FEATURES),
      description: getRandomArrayElements(DESCRIPTIONS),
      photos: getRandomArrayElements(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

/*
Создает новых пользователей
return принимает 2 параметра
 number - число объектов (пользователей)
 users - функция
*/
const createNewUsers = function (number, users) {
  return Array.from({ length: number }, users);
};
createNewUsers(NUMBER_OBJECTS, printUser);

export { createNewUsers };
