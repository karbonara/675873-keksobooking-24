// import { createNewUsers, NUMBER_OBJECTS, printUser } from './data.js';

// const addressMarker = (printUser().offer.address).split(', ');


// const createCard = () => {
//   const cardTemplate = document.querySelector('#card')
//     .content
//     .querySelector('.popup');

//   // const cardUsers = createNewUsers(NUMBER_OBJECTS, printUser);

//   // const cardUsers = renderSimilarList(usersPin);

//   const cardListFragment = [];

//   const typeHousing = {
//     flat: 'Квартира',
//     bungalow: 'Бунгало',
//     house: 'Дом',
//     palace: 'Дворец',
//     hotel: 'Отель',
//   };

//   const renderCard = (similarPins) => {

//     similarPins.forEach(({ author, offer }) => {
//       const cardElement = cardTemplate.cloneNode(true);

//       const avatar = cardElement.querySelector('.popup__avatar');
//       avatar.src = author.avatar;

//       const title = cardElement.querySelector('.popup__title');
//       title.textContent = offer.title;

//       const adress = cardElement.querySelector('.popup__text--address');
//       adress.textContent = offer.address;

//       const price = cardElement.querySelector('.popup__text--price');
//       price.textContent = `${offer.price} ₽/ночь`;

//       const type = cardElement.querySelector('.popup__type');
//       type.textContent = typeHousing[offer.type];

//       const rooms = cardElement.querySelector('.popup__text--capacity');
//       rooms.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

//       const textTime = cardElement.querySelector('.popup__text--time');
//       textTime.textContent = `Заезд после ${offer.checkin} , выезд до ${offer.checkout}`;

//       const features = cardElement.querySelectorAll('.popup__feature');
//       features.textContent = offer.features;
//       features.forEach((elem) => {
//         const featuresItem = elem.className.split('--')[1];
//         // Проверяет наличие данных
//         if (!offer.features.includes(featuresItem)) { elem.remove(); }
//       });

//       const description = cardElement.querySelector('.popup__description');
//       description.textContent = offer.description || description.remove();

//       const photos = cardElement.querySelector('.popup__photo');
//       photos.src = offer.photos;

//       cardListFragment.push(cardElement);

//     });
//     return cardListFragment;
//   };
//   renderCard();

//   return cardListFragment;
// };

// let cardList;

async function createCard() {
  const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');

  // const cardUsers = createNewUsers(NUMBER_OBJECTS, printUser);

  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((usersPin) => {
      const cardUsers = [...usersPin];

      const cardListFragment = [];
      const typeHousing = {
        flat: 'Квартира',
        bungalow: 'Бунгало',
        house: 'Дом',
        palace: 'Дворец',
        hotel: 'Отель',
      };
      cardUsers.forEach(({ author, offer }) => {
        const cardElement = cardTemplate.cloneNode(true);

        const avatar = cardElement.querySelector('.popup__avatar');
        avatar.src = author.avatar;

        const title = cardElement.querySelector('.popup__title');
        title.textContent = offer.title;

        const adress = cardElement.querySelector('.popup__text--address');
        adress.textContent = offer.address;

        const price = cardElement.querySelector('.popup__text--price');
        price.textContent = `${offer.price} ₽/ночь`;

        const type = cardElement.querySelector('.popup__type');
        type.textContent = typeHousing[offer.type];

        const rooms = cardElement.querySelector('.popup__text--capacity');
        rooms.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

        const textTime = cardElement.querySelector('.popup__text--time');
        textTime.textContent = `Заезд после ${offer.checkin} , выезд до ${offer.checkout}`;

        const features = cardElement.querySelectorAll('.popup__feature');
        features.textContent = offer.features;
        features.forEach((elem) => {
          const featuresItem = elem.className.split('--')[1];
          // Проверяет наличие данных
          if (!offer.features.includes(featuresItem)) { elem.remove(); }
        });

        const description = cardElement.querySelector('.popup__description');
        description.textContent = offer.description || description.remove();

        const photos = cardElement.querySelector('.popup__photo');
        photos.src = offer.photos;

        cardListFragment.push(cardElement);

      });

      return cardListFragment;
    });

  // await fetch('https://24.javascript.pages.academy/keksobooking/data')
  //   .then((res) => res.json())
  //   .then((res) => res);

  // const myP = new Promise((resolve, reject) => {
  //   fetch('https://24.javascript.pages.academy/keksobooking/data')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       resolve(res);
  //     });
  // });

  // myP.then((res) => {
  //   cardList = res;
  // });
}


export { createCard };

