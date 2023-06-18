// Импорт необходимых компонентов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';
import { config } from '../utils/constants.js';
import {
    buttonAddCard,
    buttonEditProfile,
    formProfile,
    formCards,
    formAvatarChange,
    nameInput,
    jobInput,
    buttonEditAvatar
} from '../utils/constants.js';

// Создание экземпляра API для взаимодействия с сервером
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: 'a4a8f0ee-251a-475b-be80-b335b9d34231',
    'Content-Type': 'application/json'
  }
});
const userId = null;

// Получение информации о пользователе и карточках с сервера
api.getAppInfo() 
  .then(([userInformation, cardList]) => {
    userInfo.setUserInfo(userInformation);
    cardSection.renderer(cardList);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });

// Создание экземпляра UserInfo для управления информацией о пользователе
const userInfo = new UserInfo(
  {
    name: '.profile__title',
    job: '.profile__subtitle',
    avatar: '.profile__avatar'
  });

// Создание экземпляра Section для управления разделом карточек
const cardSection = new Section({
  renderer: (item) => {
    cardSection.appendItem(createCardElement(item));
  },
}, '.card-items');

// Создание экземпляров FormValidator для валидации форм
const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();
const avatarChangeValidator = new FormValidator(config, formAvatarChange)
avatarChangeValidator.enableValidation();

// Создание экземпляра PopupWithImage для отображения изображений карточек
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

// Создание экземпляров PopupWithForm для управления попапами с формами
const popupWithCard = new PopupWithForm('.popup_type_cards', handleCardFormSubmit, { defaultTextValue: 'Создать' });
popupWithCard.setEventListeners();

const popupWithProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit, { defaultTextValue: 'Сохранить' });
popupWithProfile.setEventListeners();

const popupWithCardDelete = new PopupWithConfirmation('.popup_type_delete-card', handleCardDeleteSubmit, { defaultTextValue: 'Да' });
popupWithCardDelete.setEventListeners();

const popupWithAvatarChange = new PopupWithForm('.popup_type_update-avatar', handleAvatarCgangeFormSubmit, { defaultTextValue: 'Сохранить' })
popupWithAvatarChange.setEventListeners();

// Обработчик отправки формы изменения аватара
function handleAvatarCgangeFormSubmit (data) {
  popupWithAvatarChange.loadButtonText('Сохранение...');
  api.changeAvatar(data.AvatarLink)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupWithAvatarChange.close();
    })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
  .finally(() => {
    popupWithAvatarChange.returnDefaultButtonText();
  });
}

// Обработчик отправки формы редактирования профиля
function handleProfileFormSubmit (data) {
  popupWithProfile.loadButtonText('Сохранение...');
  api.editProfile({ name: data.profileName, about: data.profileJob })
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupWithProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupWithProfile.returnDefaultButtonText();
    });
}; 

// Обработчик отправки формы добавления карточки
function handleCardFormSubmit(data) {
  popupWithCard.loadButtonText('Сохранение...');
  api.editCard({ name: data.profileTitle, link: data.profileLink })
    .then((card) => {
      cardSection.prependItem(createCardElement(card))
      popupWithCard.close()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupWithCard.returnDefaultButtonText();
    });
};

// Обработчики открытия попапов
buttonAddCard.addEventListener('click', openCardPopup); 
buttonEditProfile.addEventListener('click', openProfilePopup);
buttonEditAvatar.addEventListener('click', openEditAvatarPopup);

function openEditAvatarPopup() {
  avatarChangeValidator.disableButton(); 
  popupWithAvatarChange.open();
}

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
};

// Создание элемента карточки
function createCardElement(card) {
  const templateSelector = document.getElementById('template__elements').content;
  const cardElement = new Card(
    card, 
    templateSelector, 
    handleCardClick, 
    handleCardDeleteSubmit, 
    userInfo.userId, 
    handleOpenPopup,
    handleLike,
    );
  const newCard = cardElement.generateCard();
  return newCard;
};

// Обработчик клика по карточке
function handleCardClick(name, link) {
  popupWithImage.open(name, link); 
};

// Обработчик удаления карточки
function handleCardDeleteSubmit(card) {
  api.deleteCard(card.getIdCard())
    .then((res) => {
      card.deleteCard();
      console.log(res);
      popupWithCardDelete.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
};

// Обработчик открытия попапа удаления карточки
function handleOpenPopup(card) {
  popupWithCardDelete.open(card);
}

function handleLike(cardId, likeButton, numberOfLikes) {
  if(likeButton.classList.contains('card-item__like_type_active')){
    api.removeLike(cardId)
      .then((res) => {
        likeButton.classList.remove('card-item__like_type_active');
        numberOfLikes.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  } else {
    api.like(cardId)
      .then((res) => {
        likeButton.classList.add('card-item__like_type_active');
        numberOfLikes.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
}