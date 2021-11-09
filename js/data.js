import { renderSimilarList } from './card.js';
/* eslint-disable no-console */
const LOAD_URL = 'https://24.javascript.pages.academy/keksobooking/data';

// const dataFetch = async () => {
//   const obg = await fetch(LOAD_URL);
//   const result = await obg.json()
//     .catch((error) => console.log('Ошибка', error));
//   console.log(result);
// };

// const dataFetch = (renderSimilarList) => {
//   fetch(LOAD_URL)
//     .then((response) => response.json())
//     .then((similarUsers) => {
//       renderSimilarList(similarUsers);
//     });
// };

fetch(LOAD_URL)
  .then((response) => response.json())
  .then((similarUsers) => {
    renderSimilarList(similarUsers);
  });


// export { dataFetch };
