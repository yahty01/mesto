//button
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonEditClose = document.querySelector('.popup__close-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonAddClose = document.querySelector('.popup__cards-close-button');
const buttonImageClose = document.querySelector('.popup__image-close-button');
//popup
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');
const popupImage = document.querySelector('.popup_type_image');
const popupImageCard = document.querySelector('.popup__image-card');
const popupImageTitle = document.querySelector('.popup__image-title');
//profile/template
const nameProfile = document.querySelector('.profile__name');
const workplaceProfile = document.querySelector('.profile__workplace');
const templateElements = document.getElementById('template__elements');
//form/input
const formElement = document.querySelector('.form');
const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');
const inputNameCard = formCards.querySelector('.form__input_type_title');
const inputLinkCard = formCards.querySelector('.form__input_type_link');
//places
const carditems = document.querySelector('.card__items');

nameInput.value = nameProfile.textContent;
jobInput.value = workplaceProfile.textContent;
//basickcards
const initialCards = [ 
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
//button
buttonEditProfile.addEventListener('click', () => {openPopup(popupProfile)});
buttonEditClose.addEventListener('click', () => {closePopup(popupProfile)}); 
buttonAddClose.addEventListener('click', () => {closePopup(popupCards)});
buttonAddCard.addEventListener('click', () => {openPopup(popupCards)});
formCards.addEventListener('submit', handlEditCardsSubmit); 
formProfile.addEventListener('submit', handleFormSubmit); 


function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
function openPopup(popup) { 
  popup.classList.add('popup_opened');
}; 

function handleFormSubmit (evt) { 
  evt.preventDefault(); 
 
  nameProfile.textContent = nameInput.value; 
  workplaceProfile.textContent = jobInput.value; 
 
  closePopup(popupProfile); 
}; 
 
const createImageElement = (imageData) => { 
  const imageElement = templateElements.content.querySelector('.card__item').cloneNode(true); 
  const cardName = imageElement.querySelector('.card__item-title'); 
  const cardImage = imageElement.querySelector('.card__item-image'); 
  const buttonDeleteItem = imageElement.querySelector('.card__item-delete-button'); 
  const buttonItemLike = imageElement.querySelector('.card__item-like-button'); 
 
  cardName.textContent = imageData.name; 
  cardImage.src = imageData.link; 
  cardImage.alt = imageData.name; 
 
  cardImage.addEventListener('click', () => {
    openPopup(popupImage)

    popupImageCard.src = imageData.link; 
    popupImageTitle.textContent = imageData.name; 
    popupImageCard.alt = imageData.name;
  });

  buttonImageClose.addEventListener('click', () => {closePopup(popupImage)}); 
 
  buttonDeleteItem.addEventListener('click', () => {imageElement.remove()}); 
 
  buttonItemLike.addEventListener('click', (evt) => { 
    evt.target.classList.toggle('card__item-like-button_active'); 
  }); 
 
  return imageElement; 
}; 

function renderImageElement(imageElement) { 
  carditems.prepend(imageElement); 
}; 
 
initialCards.forEach((cards) => { 
  const element = createImageElement(cards); 
  renderImageElement(element); 
}); 

function handlEditCardsSubmit (evt) { 
  evt.preventDefault(); 

  const name = inputNameCard.value; 
  const link = inputLinkCard.value; 
 
  const cardsData = { 
    name, 
    link 
  }; 
 
  renderImageElement(createImageElement(cardsData)); 
   
  closePopup(popupCards); 
}; 
 
 