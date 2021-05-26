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
        return this._putRequest(`/cards/${cardId}/likes`);
    }

    takeLike(cardId) {
        return this._deleteRequest(`/cards/${cardId}/likes`);
    }

    changeLikeCardStatus(cardId,toggle) {
        return toggle ? this.putLike(cardId) : this.takeLike(cardId);
    }

    _deleteRequest(url) {
        return this._request(url, 'DELETE');
    }

    _putRequest(url) {
        return this._request(url, 'PUT');
    }

    _postRequest(url, body) {
        return this._request(url, 'POST', body);
    }

    _patchRequest(url, body) {
        return this._request(url, 'PATCH', body);
    }

    _getRequest(url) {
        return this._request(url, 'GET');
    }

    _headers(method) {
        const headers = {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        };
      
        if (method !== 'GET') {
          headers['Content-Type'] = 'application/json';
        }
      
        return headers;
      }
      
      _request(url, method, body) {
        const option = {
            method: method,
            headers: this._headers(method),
        };
        
        if (body) {
            option.body = JSON.stringify(body);
        }
      
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

