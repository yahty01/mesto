import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './utilites.js';
import { initialCards } from './stockCards.js';
export { popupImageCard, popupImageTitle };

const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonEditClose = document.querySelector(".popup__close-button");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonAddClose = document.querySelector(".popup__cards-close-button");
const buttonImageClose = document.querySelector(".popup__image-close-button");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCards = document.querySelector(".popup_type_cards");
const popupImage = document.querySelector(".popup_type_image");
const popupImageCard = document.querySelector(".popup__image-card");
const popupImageTitle = document.querySelector(".popup__image-title");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__workplace");
const templateElements = document.getElementById("template__elements");
const formProfile = document.querySelector(".form_type_profile");
const formCards = document.querySelector(".form_type_cards");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const inputNameCard = formCards.querySelector(".form__input_type_title");
const inputLinkCard = formCards.querySelector(".form__input_type_link");
const carditems = document.querySelector(".card__items");
const buttonCardSubmit = document.querySelector('.form__submit_type_cards');

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disable',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__error_visible'
}; 

const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();

function renderImageElement(imageElement) {carditems.prepend(imageElement);}


function profileFormSubmit(event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

buttonEditProfile.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
});

buttonAddCard.addEventListener("click", () => {
  openCardPopup(popupCards);
  openPopup(popupCards);
});

buttonEditClose.addEventListener("click", () => {closePopup(popupProfile);});
buttonAddClose.addEventListener("click", () => {closePopup(popupCards);});
buttonImageClose.addEventListener("click", () => {closePopup(popupImage);});
formCards.addEventListener("submit", editCardsSubmit);
formProfile.addEventListener("submit", profileFormSubmit);

function editCardsSubmit(event) {
  event.preventDefault();
  const name = inputNameCard.value;
  const link = inputLinkCard.value;
  const cardsData = {
    name,
    link,
  };
  
  carditems.prepend(createCardElement(cardsData));
  event.target.reset();
  closePopup(popupCards); 
  cardValidator.disableButton(); 
}

function openCardPopup(){};

function createCardElement(card) {
  const template = document.getElementById('template__elements').content;
  const cardElement = new Card(card, template);
  const cardIsReady = cardElement.generateCard();
  return cardIsReady;
};

initialCards.forEach((card) => {
  carditems.prepend(createCardElement(card));
});