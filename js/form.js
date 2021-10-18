const inactiveStateForm = () => {
  // const form = document.querySelector('.ad-form');
  // form.classList.add('ad-form--disabled');

  // const formElement = form.children;
  // for (let i = 0; i < formElement.length; i++) {
  //   const formElements = formElement[i];
  //   formElements.classList.add('ad-form--disabled');
  // }

  const MIN_TITLE_LENGTH = 3;
  const MAX_TITLE_LENGTH = 100;
  const userTitleInput = document.querySelector('#title');
  userTitleInput.addEventListener('input', function () {
    const valueLength = userTitleInput.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      this.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} символов.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      this.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символы.`);
    } else {
      this.setCustomValidity('');
    }
    this.reportValidity();
  });


  // const userTypeSelect = document.querySelector('#type');

  // const housingPrice = {
  //   BUNGALOW: 0,
  //   FLAT: 1000,
  //   HOTEL: 3000,
  //   HOUSE: 5000,
  //   PALACE: 10000,
  // };

};
const inactiveStatefilter = () => {
  // const mapFilters = document.querySelector('.map__filters');
  // mapFilters.classList.add('ad-form--disabled');

  // const mapFilterElement = mapFilters.children;
  // for (let i = 0; i < mapFilterElement.length; i++) {
  //   const mapFilterElements = mapFilterElement[i];
  //   mapFilterElements.classList.add('disabled');
  // }
};
const activeStateForm = () => {

};
export { inactiveStateForm, inactiveStatefilter, activeStateForm };
