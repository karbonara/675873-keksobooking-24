const getCoordinates = function (min, max) {
  const array = Math.random() * (max - min);
  return array;
};
getCoordinates(0, 100);
const getRandom = function (min, max) {
  const array = Math.floor(Math.random() * (max - min));
  return array;
};
getRandom(0, 100);


