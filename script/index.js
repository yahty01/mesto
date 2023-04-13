//button
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonEditClose = document.querySelector('.popup__close-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonAddClose = document.querySelector('.popup__cards-close-button');
const buttonImageClose = document.querySelector('.popup__image-close-button');
//popup
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
const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const inputNameCard = formCards.querySelector('.form__input_type_title');
const inputLinkCard = formCards.querySelector('.form__input_type_link');
//places
const carditems = document.querySelector('.card__items');


//button
buttonEditProfile.addEventListener('click', () => {openPopup(popupProfile)});
buttonEditClose.addEventListener('click', () => {closePopup(popupProfile)}); 
buttonAddClose.addEventListener('click', () => {closePopup(popupCards)});
buttonAddCard.addEventListener('click', () => {openPopup(popupCards)});
formCards.addEventListener('submit', EditCardsSubmit); 
formProfile.addEventListener('submit', profileFormSubmit); 


function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
function openPopup(popup) { 
  popup.classList.add('popup_opened');
}; 


function profileFormSubmit (evt) { 
  evt.preventDefault(); 
 
  nameProfile.textContent = nameInput.value; 
  workplaceProfile.textContent = jobInput.value; 
  nameInput.value = nameProfile.textContent;
  jobInput.value = workplaceProfile.textContent;
  
 
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
  buttonImageClose.addEventListener('click', () => {closePopup(popupImage)}); 
}); 


function EditCardsSubmit (evt) { 
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
 
 