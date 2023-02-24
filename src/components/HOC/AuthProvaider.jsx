import { createContext, useState, useEffect } from "react";
import * as mainApi from '../../utils/MainApi';
import { useNavigate, useLocation } from 'react-router-dom';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [isLoad, setIsLoad] = useState(true);
    const location = useLocation();
    const history = useNavigate();

    const handleRegister = (name, email, password) => {
        return mainApi.register(name, email, password).then((result) => {
            if (result && result.data) {
                handleLogin(email, password)
            } else {
                setLoggedIn(false);
            }
        })
    }

    const handleLogin = (email, password) => {
        return mainApi.login(email, password).then((data) => {
            if (!data.token) throw new Error('Нет token');
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
            history('/movies');
        })
    }

    const checkToken = () => {
        if (!token) {
            setIsLoad(false);
            return
        };
        if (token) {
            mainApi.getUserInfo(token)
                .then((user) => {
                    setLoggedIn(true);
                    setUserData({ name: user.data.name, email: user.data.email });
                }).catch((err) => {
                    setLoggedIn(false);
                    history('/signin');
                    console.log(err);
                }).finally(() => setIsLoad(false))
        }
    }

    useEffect(() => {
        checkToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]);

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
        localStorage.clear();
        setLoggedIn(false);
        setUserData({ email: '', name: '' });
    }

    const value = { userData, loggedIn, handleRegister, handleLogin, handleUpdateUser, signOut, location, isLoad }

    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}
