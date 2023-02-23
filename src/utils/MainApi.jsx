const BASE_URL = 'http://movies-project.nomoredomains.club/';

const mainApi = ({
    method = 'POST',
    url,
    token,
    data
}) => {

    return fetch(`${BASE_URL}${url}`,
        {
            method,
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                ...!!token && { 'Authorization': `Bearer ${token}` }
            },
            ...!!data && { body: JSON.stringify(data) }
        }
    ).then((response) => {
        if (!response.ok) return Promise.reject(`Упс, что-то пошло не так ${response.status}!!!`);
        return response.json();
    });
}

export const getUserInfo = (token) => {
    return mainApi({
        url: 'users/me',
        method: 'GET',
        token
    })
}

export const setUserInfo = (email, name, token) => {
    return mainApi({
        method: 'PATCH',
        url: 'users/me',
        data: { email, name },
        token
    })
}

export const register = (name, email, password) => {
    return mainApi({
        url: 'signup',
        data: { name, email, password }
    });
}

export const login = (email, password) => {
    return mainApi({
        url: 'signin',
        data: { email, password }
    })
}

// export const checkTokenValid = (token) => {
//     return mainApi({
//         token,
//         method: 'GET',
//         url: 'users/me',
//     })
// }
export const changeDelete = (id, token) => {
    return mainApi({
        token,
        url: `movies/${id}`,
        method: 'DELETE'
    })

}
export const changeLikeCardStatus = (card, token) => {
    if (card._id) {
        return mainApi({
            token,
            url: `movies/${card._id}`,
            method: 'DELETE'
        })
    } else {
        return mainApi({
            token,
            url: 'movies',
            data: { ...card }
        })
    }
}

export const getSaveCards = (token) => {
    return mainApi({
        method: 'GET',
        token,
        url: 'movies'
    })
}

