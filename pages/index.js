import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import { openPopup, closePopup } from '../components/utilites.js';
import { 
  initialCards, 
  config,  
  buttonAddCard,
  buttonEditProfile,
  formProfile,
  formCards,
  nameInput,
  jobInput, 
} from '../utils/constants.js';

export { popupImageCard, popupImageTitle };


const buttonEditClose = document.querySelector(".popup__close-button");
const buttonAddClose = document.querySelector(".popup__cards-close-button");
const buttonImageClose = document.querySelector(".popup__image-close-button");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCards = document.querySelector(".popup_type_cards");
const popupImage = document.querySelector(".popup_type_image");
const popupImageCard = document.querySelector(".popup__image-card");
const popupImageTitle = document.querySelector(".popup__image-title");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__workplace");
const inputNameCard = formCards.querySelector(".form__input_type_title");
const inputLinkCard = formCards.querySelector(".form__input_type_link");
const carditems = document.querySelector(".card__items");



const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();


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