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


/*
  Принимает 1 параметр - elem
  return случайный элемент этого массива, вызывая функцию getRandomCoordinates, в которую передается
  2 параметра
    number - Минимальное значение
    number - Максимальное значение (Длина этого массива - 1)
*/

const getRandomArrayElements = function (elem) {
  return elem[getRandomCoordinates(0, elem.length)];
};

export { getRandomCoordinates, getRandomNumber, getRandomArrayElements };
