const inactiveStateForm = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');

  const formElement = form.children;
  for (let i = 0; i < formElement.length; i++) {
    const formElements = formElement[i];
    formElements.classList.add('ad-form--disabled');
  }

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('ad-form--disabled');

  const mapFilterElement = mapFilters.children;
  for (let i = 0; i < mapFilterElement.length; i++) {
    const mapFilterElements = mapFilterElement[i];
    mapFilterElements.classList.add('disabled');
  }
};
const activeStateForm = () => {

};
export { inactiveStateForm, activeStateForm };
