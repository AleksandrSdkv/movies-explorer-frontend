import { useContext } from "react";
import { AuthContext } from '../components/HOC/AuthProvaider'

export function useAuth() {
    return useContext(AuthContext)
}