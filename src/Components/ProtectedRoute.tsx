import { useUserAuth } from '../Context/UserAuthContext';
import { NavLink, Navigate } from "react-router-dom";


export const ProtectedRoute = ({children} : any) => {
    let {user} = useUserAuth();
    if (!user) {
        return <Navigate to="/" />
    }
    return children;
}
