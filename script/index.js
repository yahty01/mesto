//button
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonEditClose = document.querySelector(".popup__close-button");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonAddClose = document.querySelector(".popup__cards-close-button");
const buttonImageClose = document.querySelector(".popup__image-close-button");
//popup
const popupProfile = document.querySelector(".popup_type_profile");
const popupCards = document.querySelector(".popup_type_cards");
const popupImage = document.querySelector(".popup_type_image");
const popupImageCard = document.querySelector(".popup__image-card");
const popupImageTitle = document.querySelector(".popup__image-title");
//profile/template
const nameProfile = document.querySelector(".profile__name");
const workplaceProfile = document.querySelector(".profile__workplace");
const templateElements = document.getElementById("template__elements");
//form/input
const formProfile = document.querySelector(".form_type_profile");
const formCards = document.querySelector(".form_type_cards");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const inputNameCard = formCards.querySelector(".form__input_type_title");
const inputLinkCard = formCards.querySelector(".form__input_type_link");
const formSubmit = document.querySelector('.form__submit');
//places
const carditems = document.querySelector(".card__items");

const buttonCardSubmit = document.querySelector('.form__submit_type_cards');
const buttonProfileSubmit = document.querySelector('.form__submit_type_profile');


buttonEditProfile.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = workplaceProfile.textContent;
});

buttonAddCard.addEventListener("click", () => {openPopup(popupCards);});
buttonEditClose.addEventListener("click", () => {closePopup(popupProfile);});
buttonAddClose.addEventListener("click", () => {closePopup(popupCards);});
buttonImageClose.addEventListener("click", () => {closePopup(popupImage);});

formCards.addEventListener("submit", editCardsSubmit);
formProfile.addEventListener("submit", profileFormSubmit);


function profileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  workplaceProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}


const createImageElement = (imageData) => {
  const imageElement = templateElements.content.querySelector(".card__item").cloneNode(true);
  const cardName = imageElement.querySelector(".card__item-title");
  const cardImage = imageElement.querySelector(".card__item-image");
  const buttonDeleteItem = imageElement.querySelector(".card__item-delete-button");
  const buttonItemLike = imageElement.querySelector(".card__item-like-button");

  cardName.textContent = imageData.name;
  cardImage.src = imageData.link;
  cardImage.alt = imageData.name;

  cardImage.addEventListener("click", () => {
    openPopup(popupImage);
    popupImageCard.src = imageData.link;
    popupImageTitle.textContent = imageData.name;
    popupImageCard.alt = imageData.name;
  });

  buttonDeleteItem.addEventListener("click", () => {imageElement.remove();});
  buttonItemLike.addEventListener("click", (evt) => { evt.target.classList.toggle("card__item-like-button_active");});
  return imageElement;
};


function renderImageElement(imageElement) {carditems.prepend(imageElement);}

initialCards.forEach((cards) => {
  const element = createImageElement(cards);
  renderImageElement(element);
});

function editCardsSubmit(evt) {
  evt.preventDefault();

  const name = inputNameCard.value;
  const link = inputLinkCard.value;

  const cardsData = {
    name,
    link,
  };

  renderImageElement(createImageElement(cardsData));
  inputNameCard.value = "";
  inputLinkCard.value = "";
}

// Close and  Open popup ALL
function closeOnOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  };
};

function closeOnEscape(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeOnOverlay);
  document.removeEventListener('keydown', closeOnEscape);
};

function openPopup(popup) { 
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeOnOverlay);
  document.addEventListener('keydown', closeOnEscape);
};
// ------