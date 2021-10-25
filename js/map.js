import { createCard } from './card.js';
createCard();
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
  const mapCanvas = document.querySelector('.map__canvas');

  const map = L.map(mapCanvas)
    .on('load', () => {
      // eslint-disable-next-line no-console
      console.log('Карта инициализирована');
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
    address.value = `${evt.target.toGeoJSON().geometry.coordinates}`;

    // address.value = evt.target.getLatLng();
    // console.log(evt.target.getLatLng());
  });

  // const points = [
  //   {
  //     title: 'Футура',
  //     lat: 35.62940,
  //     lng: 139.69200,
  //   },
  //   {
  //     title: 'Шаверма',
  //     lat: 35.61940,
  //     lng: 139.62500,
  //   },
  //   {
  //     title: 'Шаверма2',
  //     lat: 35.60940,
  //     lng: 139.52500,
  //   },
  // ];
  // const createCardPopup = (point) => {
  //   const ballonTemplate = document.querySelector('#card')
  //     .content
  //     .querySelector('.popup');

  //   const popupElement = ballonTemplate.cloneNode(true);

  //   popupElement.querySelector('.popup__title').textContent = point.title;
  //   popupElement.querySelector('.popup__text--address').textContent = `Координаты ${point.lat}, ${point.lng}`;

  //   return popupElement;
  // };
  // points.forEach((point) => {
  //   const { lat, lng } = point;
  //   const icon = L.icon({
  //     iconUrl: '/img/pin.svg',
  //     iconSize: [40, 40],
  //     iconAnchor: [20, 40],
  //   });
  //   const markers = L.marker(
  //     {
  //       lat,
  //       lng,
  //     },
  //     {
  //       icon,
  //       draggable: true,
  //     },
  //   );
  //   markers
  //     .addTo(map)
  //     .bindPopup(createCardPopup(point));

  //   markers.on('moveend', (evt) => {
  //     console.log(evt.target.getLatLng());
  //   });

  // });


  // const usersMarker = (point) => {
  //   point.forEach((points) => {
  //     const { lat, lng } = point;
  //     const icon = L.icon({
  //       iconUrl: '/img/pin.svg',
  //       iconSize: [40, 40],
  //       iconAnchor: [20, 40],
  //     });
  //     const markers = L.marker(
  //       {
  //         lat,
  //         lng,
  //       },
  //       {
  //         icon,
  //         draggable: true,
  //       },
  //     );
  //     markers
  //       .addTo(map)
  //       .bindPopup(createCard(points));
  //   });
  // };
  // usersMarker();
};
export { maps };

