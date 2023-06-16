// Класс Api для взаимодействия с сервером
export default class Api {
    // Конструктор класса принимает объект с настройками (URL и заголовки)
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }
    // Получает информацию о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._handleResponse);
    }
    // Получает начальные карточки с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._handleResponse);
    }
    // Получает информацию о пользователе и начальные карточки с сервера
    getAppInfo() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()])
    }
    // Редактирует профиль пользователя на сервере
    editProfile({name, about}) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then(this._handleResponse);
    }
    // Добавляет новую карточку на сервер
    editCard({ name, link }) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._handleResponse);
    }
    // Удаляет карточку с сервера
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse);
    }
    // Добавляет лайк карточке на сервере
    like(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._handleResponse);
    }
    // Удаляет лайк с карточки на сервере
    removeLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse);
    }
     // Изменяет аватар пользователя на сервере
    changeAvatar(url) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url
            })
        })
        .then(this._handleResponse);
    }
     // Обрабатывает ответ сервера
    _handleResponse(res) {
        if(res.ok){
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
}