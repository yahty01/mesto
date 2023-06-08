import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import { initialCards } from "../utils/constants.js";
import { config } from "../utils/constants.js";
import { buttonAddCard, buttonEditProfile, formProfile, formCards, nameInput, jobInput } from "../utils/constants.js";

// Создание валидаторов для форм профиля и карточек
const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();

// Создание попапа с изображением
const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();

// Создание попапа с формой добавления карточки
const popupWithCard = new PopupWithForm(".popup_type_cards", handleCardFormSubmit);
popupWithCard.setEventListeners();

// Создание попапа с формой редактирования профиля
const popupWithProfile = new PopupWithForm(".popup_type_profile", handleProfileFormSubmit);
popupWithProfile.setEventListeners();

// Создание объекта информации о пользователе
const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__subtitle",
});

// Обработчик сабмита формы редактирования профиля
function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data.profileName, data.profileJob);
}

// Обработчик сабмита формы добавления карточки
function handleCardFormSubmit(data) {
  const name = data.profileTitle;
  const link = data.profileLink;
  const cardsData = {
    name,
    link,
  };
  cardSection.addItem(createCardElement(cardsData));
}

// Обработчики клика на кнопки добавления карточки и редактирования профиля
buttonAddCard.addEventListener("click", openCardPopup);
buttonEditProfile.addEventListener("click", openProfilePopup);

// Открытие попапа добавления карточки
function openCardPopup() {
  cardValidator.disableButton();
  popupWithCard.open();
}

// Открытие попапа редактирования профиля
function openProfilePopup() {
  profileValidator.enableButton();
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  popupWithProfile.open();
}

// Создание элемента карточки
function createCardElement(card) {
  const templateSelector = document.getElementById("template__elements").content;
  const cardElement = new Card(card, templateSelector, handleCardClick);
  const newCard = cardElement.generateCard();
  return newCard;
}

// Обработчик клика на карточке
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// Создание секции с карточками
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => createCardElement(cardData),
  },
  ".card"
);

// Отрисовка карточек на странице
cardSection.renderer();
