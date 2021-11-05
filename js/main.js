import { maps } from './map.js';
import { inactiveStateForm, inactiveStatefilter, activeStateForm } from './form.js';
import { renderCard } from './card.js';
maps();

inactiveStateForm();
activeStateForm();
inactiveStatefilter();

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((similarPins) => {
    renderCard(similarPins);
  });
