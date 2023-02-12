import { createContext, useState, useEffect } from "react";
import * as mainApi from '../../utils/MainApi';
import * as constants from '../../constants/constants';
import { moviesApi } from '../../utils/MoviesApi';
import { useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const token = constants.token;
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ _id: '', name: '', email: '' });
    const [films, setFilms] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [noMovies, setNoMovies] = useState(false);
    const [isFailConnect, setIsFailConnect] = useState(false);
    const [loading, setLoading] = useState(true);
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
        const localMovies = JSON.parse(localStorage.getItem('saveLocal') || '[]');
        if (localStorage.getItem('saveLocal') !== null) {
            setRenderedCards(localMovies)
        }

        if (!token) return;
        if (token) {
            mainApi.checkTokenValid(token);
            mainApi.getUserInfo(token)
                .then((user) => {
                    if (user && user.data) {
                        setLoggedIn(true);
                        setUserData(user.data);
                        setLoading(false)
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

    const handleUpdateUser = (values, app) => {

        const { email, username } = values;
        mainApi.setUserInfo(email, username, token)
            .then((user) => {
                setUserData(user);
                app();
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
            mainApi.changeLikeCardStatus(film, token)
                .then((serverCard) => {
                    setRenderedCards((beatCards) => {
                        const editedCards = beatCards.map(beatCard => {
                            if (beatCard.id === serverCard.movieId) {
                                beatCard.saved = true;
                                beatCard._id = serverCard._id;
                                beatCard.movieId = serverCard.movieId;
                                beatCard.thumbnail = serverCard.thumbnail;
                            }
                            return beatCard;
                        })
                        localStorage.setItem('saveLocal', JSON.stringify(editedCards));
                        return editedCards;
                    })
                    localStorage.removeItem('saveLocal');
                })
                .catch((err) => {
                    console.error(err);
                    setIsFailConnect(true);
                });
        }
        else {
            mainApi.changeLikeCardStatus(card, token)
                .then(card => console.log(card))
                .catch((err) => {
                    console.error(err);
                    setIsFailConnect(true);
                });
            const newCard = card;
            newCard.saved = false;
            const cardsArray = [...renderedCards];
            const index = cardsArray.findIndex(el => el.id === card.id);
            cardsArray[index] = newCard;
            setRenderedCards([...cardsArray]);
            localStorage.removeItem('saveLocal');
        }
    }

    useEffect(() => {
        checkToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        Promise.all([moviesApi.getMovies(), mainApi.getSaveCards(token)])
            .then(([movieApiCards, { data: localCards }]) => {
                const allCards = movieApiCards.map(card => {
                    const localCard = localCards.find((localCard) => localCard.movieId === card.id);
                    card._id = localCard !== undefined ? localCard._id : '';
                    card.movieId = card.id;
                    card.thumbnail = `https://api.nomoreparties.co/${card.image.url}`;
                    card.saved = localCard !== undefined;
                    return card;
                });
                setFilms(allCards);
            }).catch((err) => {
                console.error(err);
                setIsFailConnect(true);
            });
    }, [])

    if (loading) {
        return <Preloader />
    }

    function filter(nameRU = '', isShorts) {
        setPreloader(true);
        const film = films.filter((films) => {
            if (isShorts) {
                return films.duration <= 40 && films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
            }
            return films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
        })
        localStorage.setItem('saveLocal', JSON.stringify(film));
        setPreloader(false);
        setRenderedCards(film);
        setNoMovies(true);
    }

    const value = { userData, renderedCards, isFailConnect, noMovies, preloader, loggedIn, loading, handleRegister, handleLogin, handleUpdateUser, signOut, handleCardLike, filter }

    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}
