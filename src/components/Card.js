export default class Card {

  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._title = data.link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate = () => {
    this._imageElement = this._template.cloneNode(true).children[0];
    return this._imageElement;
  }

  _deleteCard = () => {
    this._imageElement.remove();
  }

  _like = (evt) => {
    evt.target.classList.toggle('card-item__like_active');
  }

  _setEventListeners = () => {
    this._buttonDeleteTrash.addEventListener('click', this._deleteCard.bind(this));
    this._buttonPlaceLike.addEventListener('click', (evt) => {
      this._like(evt);
    });
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._name, this._title) })
  };

  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._buttonDeleteTrash = this._imageElement.querySelector('.card-item__trash'); 
    this._buttonPlaceLike = this._imageElement.querySelector('.card-item__like');
    this._cardName = this._imageElement.querySelector('.card-item__title'); 
    this._cardImage = this._imageElement.querySelector('.card-item__img');

    this._cardName.textContent = this._name; 
    this._cardImage.src = this._title; 
    this._cardImage.alt = this._name; 

    this._setEventListeners();
    return this._cardElement;
  }
}