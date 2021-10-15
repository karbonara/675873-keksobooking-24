const inactiveStateForm = () => {
  const form = document.querySelector('.ad-form')
  form.classList.add('ad-form--disabled');

  const formElement = form.querySelectorAll('.ad-form__element');
  for (let i = 0; i < formElement.length; i++) {
    const formElements = formElement[i]
    formElements.classList.add('ad-form--disabled');
  }

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('ad-form--disabled');

  const mapFilterItems = document.querySelectorAll('.map__filter')
  for (let i = 0; i < mapFilterItems.length; i++) {
    const mapFilterItem = mapFilterItems[i]
    mapFilterItem.classList.add('disabled');
  }
};
const activeStateForm = () => {

};
export { inactiveStateForm, activeStateForm };
