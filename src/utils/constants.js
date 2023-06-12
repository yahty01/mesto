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
    link: 'https://images.unsplash.com/photo-1681121882740-561016c015dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
  }, 
  { 
    name: 'Челябинская область', 
    link: 'https://images.unsplash.com/photo-1681121881794-d3683ede874b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
  }, 
  { 
    name: 'Иваново', 
    link: 'https://images.unsplash.com/photo-1568231340347-ba25f4c0e258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' 
  }, 
  { 
    name: 'Камчатка', 
    link: 'https://images.unsplash.com/photo-1572986350786-002d08b6b87e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' 
  }, 
  { 
    name: 'Холмогорский район', 
    link: 'https://images.unsplash.com/photo-1548238953-ef404ef937b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
  }, 
  { 
    name: 'Байкал', 
    link: 'https://images.unsplash.com/photo-1533661537256-701c0084511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80' 
  } 
]; 