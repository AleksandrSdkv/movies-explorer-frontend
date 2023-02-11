import { createContext, useState, useEffect } from "react";
import * as mainApi from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ _id: '', name: '', email: '' });

    const history = useNavigate();

    const handleRegister = (name, email, password) => {
        return mainApi.register(name, email, password).then(() => {
            history.push('/signin');
        }).catch((err) => {
            console.log(`При регистрации произошла ошибка. ${err}`);
        });
    }

    const handleLogin = (email, password) => {
        return mainApi.login(email, password).then((data) => {
            if (!data.token) throw new Error('Нет token');
            localStorage.setItem('token', data.token);
            checkToken();
            setLoggedIn(true);
            setUserData({ email, password });
            history('/movies');
        }).catch((err) => {
            console.log(`Произошла ошибка. ${err}`);
        });
    }

    const checkToken = () => {

        const token = localStorage.getItem('token')
        if (!token) return;
        if (token) {
            mainApi.checkTokenValid(token)
            mainApi.getUserInfo(token)
                .then((user) => {
                    if (user && user.data) {
                        setLoggedIn(true);;
                        setUserData(user.data);
                        history('/movies');
                    } else {
                        setLoggedIn(false);
                        history('/signin');
                    }
                }).catch((err) => {
                    setLoggedIn(false);
                    history('/signin');
                    console.log(err);
                })
        }
    }

    const handleUpdateUser = (values) => {
        const token = localStorage.getItem('token');
        const { email, username } = values;
        mainApi.setUserInfo(email, username, token)
            .then((user) => {
                setUserData(user);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const signOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('token');
        history.push('/signin');
    }
    const handleCardLike = (card) => {
        const token = localStorage.getItem('token');
        const localFilm = JSON.parse(localStorage.getItem('valueFilm'))
        if (card.saved === false) {
            const film = {};
            film.country = card.country;
            film.director = card.director;
            film.duration = card.duration;
            film.year = card.year;
            film.description = card.description;
            film.image = `https://api.nomoreparties.co/${card.image.url}`;
            film.trailerLink = card.trailerLink;
            film.thumbnail = `https://api.nomoreparties.co/${card.image.url}`;
            film.movieId = card.id;
            film.nameRU = card.nameRU;
            film.nameEN = card.nameEN;



            mainApi.changeLikeCardStatus(film, token);

        } else {

            mainApi.changeLikeCardStatus(card, token);
        }
    }

    useEffect(() => {
        checkToken();

    }, []);
    const value = { userData, handleRegister, handleLogin, loggedIn, handleUpdateUser, signOut, handleCardLike }

    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}
