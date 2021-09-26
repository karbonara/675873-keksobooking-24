const maxString = 100;
const minString = 0;
const integer = 1;

const getCoordinates = function (min, max) {
  if (max > min) {
    const array = Math.floor(Math.random() * (max - min));
    return array;
  } else {
    return false;
  }
};
getCoordinates(minString, maxString);

const getRandom = function (min, max, signs) {
  if (min >= min) {
    const array = (Math.random() * (max - min));
    return array.toFixed(signs);
  } else {
    return false;
  }
};
getRandom(minString, maxString, integer);


