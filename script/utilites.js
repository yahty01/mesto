const popupImage = document.querySelector('.popup_type_image');

function openPopup(popup) { 
    popup.classList.add('popup_opened');
    popup.addEventListener('click', closeByOverlay);
    document.addEventListener('keydown', closeByEscape);
  };
  
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closeByOverlay);
    document.removeEventListener('keydown', closeByEscape);
  };

  function closeByEscape(event) {
    if (event.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
    };
  };
  
  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closePopup(event.target);
    };
  };

  export { openPopup, closePopup };
  export { popupImage };