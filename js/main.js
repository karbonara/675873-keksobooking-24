// const MAX_STRING = 100;
// const MIN_STRING = 0;
const INTEGER_NUMBER = 5;

const getRandomCoordinates = (min, max) => {
  if (max > min) {
    const number = Math.floor(Math.random() * (max - min));
    return number;
  }
};

function getRandomNumber(from, to, digits = 1) {
  const lower = Math.min(Math.abs(from), Math.abs(to));
  const upper = Math.max(Math.abs(from), Math.abs(to));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const MIN_AVATAR = 0;
const MAX_AVATAR = 10;
const TITLE = ['Однокомнатная квартира', 'Двухкомнатная квартира', 'Трехкомнатная квартира', 'Студия'];
const PRICE = [1500, 2000, 2500, 3500, 5500, 6500];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = [1, 2, 3, 4];
const GUESTS = [2, 3, 4, 5, 6];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Уютная квартира', 'С видом на улицу', 'Можно с животными'];
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

const getRandomArrayElements = function (elem) {
  return elem[getRandomCoordinates(0, elem.length)];
};

const RANDOM_AVATAR = getRandomCoordinates(MIN_AVATAR, MAX_AVATAR);

const LAT = getRandomNumber(MIN_LAT, MAX_LAT, INTEGER_NUMBER);
const LNG = getRandomNumber(MIN_LNG, MAX_LNG, INTEGER_NUMBER);

const user = function () {
  return {
    author: {
      avatar: RANDOM_AVATAR < MAX_AVATAR ? `img/avatars/user0${RANDOM_AVATAR}.png` : `img/avatars/user${RANDOM_AVATAR}.png`,
    },
    offer: {
      title: getRandomArrayElements(TITLE),
      address: `${LAT}, ${LNG}`,
      price: getRandomArrayElements(PRICE),
      type: getRandomArrayElements(TYPE),
      rooms: getRandomArrayElements(ROOMS),
      guests: getRandomArrayElements(GUESTS),
      checkin: getRandomArrayElements(CHECKIN),
      checkout: getRandomArrayElements(CHECKOUT),
      features: getRandomArrayElements(FEATURES),
      description: getRandomArrayElements(DESCRIPTION),
      photos: getRandomArrayElements(PHOTOS),
    },
    location: {
      lat: LAT,
      lng: LNG,
    },
  };
};

// Создает несколько объектов
// const newArray = Array.from({ length: NUMBER_OBJECTS }, user);
// console.log(newArray);
const newArray = function () {
  return Array.from({ length: NUMBER_OBJECTS }, user);
};
newArray();
