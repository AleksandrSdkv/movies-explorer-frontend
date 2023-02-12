import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth';

const ProtectedRoute = ({ children }) => {
    const { loggedIn } = useAuth();
    return (
        loggedIn ? children : < Navigate to="/signin" replace />
    )
};

export default ProtectedRoute;