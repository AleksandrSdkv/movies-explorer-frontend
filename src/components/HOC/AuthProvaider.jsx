import { createContext, useState, useEffect } from "react";
import * as mainApi from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ email: '', username: '' });

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
            setUserData({ email, password })
            history('/movies');
        }).catch((err) => {
            console.log(`Произошла ошибка. ${err}`);
        });
    }

    const checkToken = () => {
        const token = localStorage.getItem('token');
        if (!token) return;
        mainApi.checkTokenValid(token)
        if (token) {
            mainApi.getUserInfo()
                .then((user) => {
                    if (user && user.data) {
                        setLoggedIn(true);
                        setUserData({
                            email: user.data.email,
                            name: user.data.name
                        })
                        history('/movies')
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
        const { email, username } = values;
        console.log(email, username)
        mainApi.setUserInfo(email, username)
            .then((data) => {
                setUserData(data)
            })
            .catch((err) => {
                console.log(err);
            })
    };

    useEffect(() => {
        checkToken();

    }, []);
    const value = { userData, handleRegister, handleLogin, loggedIn, handleUpdateUser }

    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}
