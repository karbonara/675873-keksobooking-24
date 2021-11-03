import { maps } from './map.js';
import { inactiveStateForm, inactiveStatefilter, activeStateForm } from './form.js';

maps();

inactiveStateForm();
activeStateForm();
inactiveStatefilter();

const getData = () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json());
  // .then((usersPin) => {
  //   renderSimilarList(usersPin);
  // });
};
getData();
