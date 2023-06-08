import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';
import { initialCards } from '../utils/constants.js';
import { config } from '../utils/constants.js';
import {
    buttonAddCard,
    buttonEditProfile,
    formProfile,
    formCards,
    nameInput,
    jobInput,
} from '../utils/constants.js';

const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithCard = new PopupWithForm('.popup_type_cards', handleCardFormSubmit)
popupWithCard.setEventListeners();

const popupWithProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit)
popupWithProfile.setEventListeners();

const userInfo = new UserInfo(
  {
    name: '.profile__title',
    job: '.profile__subtitle'
  });

function handleProfileFormSubmit (data) { 
  userInfo.setUserInfo(data.profileName, data.profileJob);
}; 

 function handleCardFormSubmit (data) {
  const name = data.profileTitle;
  const link = data.profileLink; 
  const cardsData = { 
    name, 
    link 
  }; 
  cardSection.addItem(createCardElement(cardsData));
};

buttonAddCard.addEventListener('click', openCardPopup); 
buttonEditProfile.addEventListener('click', openProfilePopup);

function openCardPopup() {
  cardValidator.disableButton(); 
  popupWithCard.open();
};

function openProfilePopup() {
  profileValidator.enableButton();
  const {name, job} = userInfo.getUserInfo();
  nameInput.value = name; 
  jobInput.value = job; 
  popupWithProfile.open();
}

function createCardElement(card) {
  const templateSelector = document.getElementById('template__elements').content;
  const cardElement = new Card(card, templateSelector, handleCardClick);
  const newCard = cardElement.generateCard();
  return newCard;
};

function handleCardClick(name, link) {
  popupWithImage.open(name, link); 
}

const cardSection = new Section({
  items: initialCards,
  renderer: (cardData) => createCardElement(cardData),
}, '.card__items');

cardSection.renderer();