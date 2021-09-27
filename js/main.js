const MAX_STRING = 100;
const MIN_STRING = 0;
const INTEGER_NUMBER = 1;

const getRandomCoordinates = (min, max) => {
  if (max > min) {
    const array = Math.floor(Math.random() * (max - min));
    return array;
  }
};
getRandomCoordinates(MIN_STRING, MAX_STRING);

const getRandomNumber = (min, max, signs) => {
  if (min >= min) {
    const array = (Math.random() * (max - min));
    return array.toFixed(signs);
  }
};
getRandomNumber(MIN_STRING, MAX_STRING, INTEGER_NUMBER);
