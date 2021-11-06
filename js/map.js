// import { createCard, addressMarker } from './card.js';
import { createCard } from './card.js';

const maps = () => {
  const PIN_ADDRESS = {
    lat: 35.65000,
    lng: 139.80000,
  };
  const ICON_SIZE = {
    width: 52,
    height: 52,
  };
  const ICON_ANCHOR = {
    width: 26,
    height: 52,
  };
  const MAP_ZOOM = 10;
  const MAIN_ICON_URL = '/img/main-pin.svg';
  const address = document.querySelector('#address');
  address.setAttribute('disabled', 'disabled');
  const mapCanvas = document.querySelector('#map-canvas');

  const map = L.map(mapCanvas)
    .on('load', () => {
      // eslint-disable-next-line no-console
      // console.log('Карта инициализирована');
    })
    .setView({
      lat: PIN_ADDRESS.lat,
      lng: PIN_ADDRESS.lng,
    }, MAP_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: MAIN_ICON_URL,
    iconSize: [ICON_SIZE.width, ICON_SIZE.height],
    iconAnchor: [ICON_ANCHOR.width, ICON_ANCHOR.height],
  });

  const marker = L.marker(
    {
      lat: PIN_ADDRESS.lat,
      lng: PIN_ADDRESS.lng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  marker
    .addTo(map);
  marker.on('moveend', (evt) => {
    // Добавляет координаты в input
    address.value = evt.target.toGeoJSON().geometry.coordinates;
  });


  const PIN = '/img/pin.svg';
  const PIN_USERS = L.icon({
    iconUrl: PIN,
    iconSize: [ICON_SIZE.width, ICON_SIZE.height],
    iconAnchor: [ICON_ANCHOR.width, ICON_ANCHOR.height],
  });


  // const PIN_ADDRESS_USERS = {
  //   lat: addressMarker[0],
  //   lng: addressMarker[1],
  // };

  const PIN_ADDRESS_USERS = {
    lat: 35.658792,
    lng: 139.883259,
  };


  const point = () => {

    const cardList = createCard();
    // console.log(createCard());

    cardList.forEach((elem) => {

      const markers = L.marker(
        {
          lat: PIN_ADDRESS_USERS.lat,
          lng: PIN_ADDRESS_USERS.lng,
        },
        {
          icon: PIN_USERS,
        },
      );
      markers
        .addTo(map)
        .bindPopup(elem);

    });
  };
  point(createCard);

};

export { maps };
