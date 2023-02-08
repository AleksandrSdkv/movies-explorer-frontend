const BASE_URL = 'http://localhost:3001';
// {"data":{"name":"Aleksandr","email":"Pegas2697@yandex.ru","_id":"63e16e7640cc1f8c884fdf92"}}

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

export const getUserInfo = () => {
    return mainApi({
        url: '/users/me',
        method: 'GET',

    })
}

export const setUserInfo = (email, name) => {
    console.log(email, name)
    return mainApi({
        method: 'PATCH',
        url: '/users/me',
        data: { email, name }
    })
}

export const register = (name, email, password) => {
    return mainApi({
        url: '/signup',
        data: { name, email, password }
    });
}


export const login = (email, password) => {
    return mainApi({
        url: '/signin',
        data: { email, password }
    })
}

export const checkTokenValid = (token) => {
    return mainApi({
        token,
        method: 'GET',
    })
}
