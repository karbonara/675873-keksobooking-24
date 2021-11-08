const LOAD_URL = 'https://24.javascript.pages.academy/keksobooking/data';
const dataFetch = async () => {
  const obg = await fetch(LOAD_URL);
  const result = await obg.json();
  // eslint-disable-next-line no-console
  console.log(result);

};

// async function dataFetch() {
//   const response = await fetch(LOAD_URL);
//   const data = await response.json();

//   console.log(data);
// }
// dataFetch();


// const promise = new Promise((resolve, reject) => {
//   resolve(dataFetch());
// });
// console.log(promise);

export { dataFetch };
