const urlMoviesApi = 'https://api.nomoreparties.co/beatfilm-movies'; //записываем бэк

// export default async function loadJson() { // Объявление асинхронной функции
//     let response = await fetch(urlMoviesApi);// делает get запрос и получает массив фильмов
//     if (response.status === 200) {
//         let json = await response.json();
//         return json;
//     }
//     throw new Error(`Произошла ошибка ${response.status}`);
// }

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