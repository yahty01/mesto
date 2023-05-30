import { openPopup } from './utilites.js';
import { popupImage } from './utilites.js';
import { popupImageCard, popupImageTitle } from '../pages/index.js';

export default class Card {

  constructor(data, template){
    this._name = data.name;
    this._title = data.link;
    this._template = template;
    this._popupImageCard = popupImageCard;
    this._popupImageTitle = popupImageTitle;
  }

  _getTemplate = () => {
    this._imageElement = this._template.cloneNode(true).children[0];
    return this._imageElement;
  }

  _deleteCard = () => {
    this._imageElement.remove();
  }

  _like = (evt) => {
    evt.target.classList.toggle('card__item-like-button_active');
  }

  _handleOpenPopup = () => {
    openPopup(popupImage);
    this._popupImageCard.src = this._title; 
    this._popupImageTitle.textContent = this._name; 
    this._popupImageCard.alt = this._name;
  }

  _setEventListeners = () => {
    this._buttonDeleteTrash.addEventListener('click', () => {
      this._deleteCard();
    });
    this._buttonPlaceLike.addEventListener('click', (evt) => {
      this._like(evt);
    });
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup();
    })
  };

  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._buttonDeleteTrash = this._imageElement.querySelector('.card__item-delete-button'); 
    this._buttonPlaceLike = this._imageElement.querySelector('.card__item-like-button');
    this._cardName = this._imageElement.querySelector('.card__item-title'); 
    this._cardImage = this._imageElement.querySelector('.card__item-image');

    this._cardName.textContent = this._name; 
    this._cardImage.src = this._title; 
    this._cardImage.alt = this._name; 

    this._setEventListeners();
    return this._cardElement;
  }
}

