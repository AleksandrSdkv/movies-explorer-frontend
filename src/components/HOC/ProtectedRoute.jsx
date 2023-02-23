import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ children }) => {
    const { loggedIn, isLoad } = useAuth();
    if (isLoad) {
        return <Preloader />;
    }
    return (
        loggedIn ? children : < Navigate to="/" replace />
    )
};

export default ProtectedRoute;