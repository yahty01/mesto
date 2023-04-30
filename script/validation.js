enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disable',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__error_visible'
}); 

function enableButton(config, button){
  button.classList.remove(config.inactiveButtonClass);
  button.removeAttribute('disabled');
};
function disableButton(config, button){
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', true);
};
function hasValidInput(inputSelector){
  return inputSelector.every((input) => {
      return input.validity.valid;
  });
};
function toggleButtonValidity(config, inputSelector, formSelector){
  const buttonElement = formSelector.querySelector(config.submitButtonSelector);
  if (hasValidInput(inputSelector)){
      enableButton(config, buttonElement);
  } else {
      disableButton(config, buttonElement);
  }
};

function setEventListeners(config, formSelector){
  const inputSelector = formSelector.querySelectorAll(config.inputSelector);
  const inputsArray = Array.from(inputSelector);
  toggleButtonValidity(config, inputsArray, formSelector);
  inputsArray.forEach(function (input) {
      input.addEventListener('input', () => {
          checkInputValidity(config, input);
          toggleButtonValidity(config, inputsArray, formSelector);
      });
  });
};

function enableValidation(config){
  const formSelector = document.querySelectorAll(config.formSelector);
  const formArray = Array.from(formSelector);
  
  formArray.forEach(function(formSelector){
      setEventListeners(config, formSelector);
  });
};

function removeInputError(config, input, inputErrorClass){
  input.classList.remove(config.inputErrorClass);
  inputErrorClass.classList.remove(config.errorClass);
  inputErrorClass.textContent = '';
};
function showInputError(config, input, inputErrorClass){
  input.classList.add(config.inputErrorClass);
  inputErrorClass.classList.add(config.errorClass);
  inputErrorClass.textContent = input.validationMessage;
};
function checkInputValidity(config, input){
  const inputErrorClass = document.querySelector(`#error-${input.id}`);
  if (input.validity.valid) {
      removeInputError(config, input, inputErrorClass);
  } else {
      showInputError(config, input, inputErrorClass);
  };
};
