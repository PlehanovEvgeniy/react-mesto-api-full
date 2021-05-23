export class Api {
    constructor(url, password) {
        this._password = password;
        this._url = url;
    }

    setUserInfo(name, about) {
        return this._patchRequest('/users/me', {
            name,
            about
        });
    }

    getUserInfo() {
        return this._getRequest('/users/me');
    }

    saveProfileAvatar(url) {
        return this._patchRequest('/users/me/avatar', {
            avatar: url
        });
    }

    createCard(name, link) {
        return this._postRequest('/cards', {
            name,
            link
        });
    }

    deleteCard(cardId) {
        return this._deleteRequest(`/cards/${cardId}`);
    }

    getCards() {
        return this._getRequest('/cards');
    }

    putLike(cardId) {
        return this._putRequest(`/cards/likes/${cardId}`);
    }

    takeLike(cardId) {
        return this._deleteRequest(`/cards/likes/${cardId}`);
    }

    changeLikeCardStatus(cardId,toggle) {
        return toggle ? this.putLike(cardId) : this.takeLike(cardId);
    }

    _deleteRequest(url) {
        return this._request(url, {
            method: 'DELETE',
            headers: {
                authorization: this._password
            },
        });
    }

    _putRequest(url) {
        return this._request(url, {
            method: 'PUT',
            headers: {
                authorization: this._password
            },
        });
    }

    _postRequest(url, body) {
        return this._request(url, {
            method: 'POST',
            headers: {
                authorization: this._password,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body || {})
        });
    }

    _patchRequest(url, body) {
        return this._request(url, {
            method: 'PATCH',
            headers: {
                authorization: this._password,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body || {})
        });
    }

    _getRequest(url) {
        return this._request(url, {
            method: 'GET',
            headers: {
                authorization: this._password
            }
        });
    }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}

export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-20', 'c0ebb0ed-e6f7-4466-b18b-32ea730e34e3');

