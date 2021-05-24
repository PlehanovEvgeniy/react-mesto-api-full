export class Api {
    constructor(url) {
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
        return this._request(url, 'DELETE', {});
    }

    _putRequest(url) {
        return this._request(url, 'PUT', {});
    }

    _postRequest(url, body) {
        return this._request(url, 'POST', body);
    }

    _patchRequest(url, body) {
        return this._request(url, 'PATCH', body);
    }

    _getRequest(url) {
        return this._request(url, 'GET', {});
    }

    _headers() {
        return {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        }
    }

    _request(url, method, body) {
        const option = {
            method: method,
            body: JSON.stringify(body || {}),
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        };

        return fetch(`${this._url}${url}`, option)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}

export const api = new Api('https://api.mesto.plekhanov.nomoredomains.club');

