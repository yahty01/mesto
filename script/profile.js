

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonEditClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__workplace');

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');




buttonEditProfile.addEventListener('click', function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

buttonEditClose.addEventListener('click', popupClose);

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit); 

function popupClose() {
  popup.classList.remove('popup_opened');
};
