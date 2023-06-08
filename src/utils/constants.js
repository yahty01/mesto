export const buttonAddCard = document.querySelector('.profile__add-button');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const formProfile = document.querySelector('.form_type_profile');
export const formCards = document.querySelector('.form_type_cards');
export const nameInput = formProfile.querySelector('.form__input_type_name');
export const jobInput = formProfile.querySelector('.form__input_type_job');

export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disable',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__error_visible'
};

export const initialCards = [ 
  { 
    name: 'Архыз', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
  }, 
  { 
    name: 'Челябинская область', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' 
  }, 
  { 
    name: 'Иваново', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' 
  }, 
  { 
    name: 'Камчатка', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' 
  }, 
  { 
    name: 'Холмогорский район', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' 
  }, 
  { 
    name: 'Байкал', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' 
  } 
];