const inactiveStateForm = () => {
  // const form = document.querySelector('.ad-form');
  // form.classList.add('ad-form--disabled');

  // const formElement = form.children;
  // for (let i = 0; i < formElement.length; i++) {
  //   const formElements = formElement[i];
  //   formElements.classList.add('ad-form--disabled');
  // }


  // Максимальная и минимальная длина строки
  const MIN_TITLE_LENGTH = 3;
  const MAX_TITLE_LENGTH = 100;

  const userTitleInput = document.querySelector('#title');

  userTitleInput.addEventListener('input', () => {
    const valueLength = userTitleInput.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      userTitleInput.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} символа.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      userTitleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символы.`);
    } else {
      userTitleInput.setCustomValidity('');
    }
    userTitleInput.reportValidity();
  });
  const addCustomValidity = (element, text) => {
    element.setCustomValidity(text);
    element.reportValidity();
  };
  const removeCustomValidity = (element) => {
    element.setCustomValidity('');
  };
  const userInputType = document.querySelector('#type');
  const userInputPrice = document.querySelector('#price');
  // Минимальное значение жилья
  const HOUSING_MIN_PRICE = {
    FLAT: 1000,
    BUNGALOW: 0,
    HOUSE: 5000,
    PALACE: 10000,
    HOTEL: 3000,
  };
  const validatePrice = () => {
    if (userInputPrice.value < userInputPrice.min) {
      addCustomValidity(userInputPrice, `Минимальная цена ${userInputPrice.min}`);
    } else {
      removeCustomValidity(userInputPrice);
    }
  };
  const setMinPriceAttributes = () => {
    const minPrice = HOUSING_MIN_PRICE[userInputType.value.toUpperCase()];
    userInputPrice.placeholder = minPrice;
    userInputPrice.min = minPrice;
  };
  userInputPrice.addEventListener('input', () => {
    validatePrice();
  });
  userInputType.addEventListener('change', () => {
    setMinPriceAttributes();
    validatePrice();
  });
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
