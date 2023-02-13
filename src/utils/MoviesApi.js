const urlMoviesApi = 'https://api.nomoreparties.co/beatfilm-movies'; //записываем бэк



class MoviesApi {
    constructor() {
        this._url = urlMoviesApi;
    }
    _handleResponse(res) {
        return res.json().then((response) => {
            if (!res.ok) {
                return Promise.reject(new Error(response.message));
            }
            return response
        })
    }
    getMovies() {
        return fetch(this._url)
            .then(this._handleResponse)
    }
}
export const moviesApi = new MoviesApi();