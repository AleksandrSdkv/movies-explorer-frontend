import { createContext, useState, useEffect } from "react";
import * as mainApi from '../../utils/MainApi';
import * as constants from '../../constants/constants';
import { moviesApi } from '../../utils/MoviesApi';
import { useNavigate, useLocation } from 'react-router-dom';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const token = constants.token;
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ _id: '', name: '', email: '' });
    const [renderedCard, setRenderedCards] = useState([]);



    const location = useLocation();
    const history = useNavigate();

    const handleRegister = (name, email, password) => {
        return mainApi.register(name, email, password).then(() => {
            history('/signin');
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
            history('/');
        }).catch((err) => {
            console.log(`Произошла ошибка. ${err}`);
        });
    }

    const checkToken = () => {

        if (!token) return;
        if (token) {
            mainApi.checkTokenValid(token);
            mainApi.getUserInfo(token)
                .then((user) => {
                    if (user && user.data) {
                        setLoggedIn(true);
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
        setRenderedCards([])
        mainApi.checkTokenValid('');
        setLoggedIn(false);
        localStorage.clear();
        setUserData({ email: '', password: '' });
        history('/signin');

    }


    useEffect(() => {
        checkToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    const value = { userData, renderedCard, loggedIn, handleRegister, handleLogin, handleUpdateUser, signOut, location }

    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}
