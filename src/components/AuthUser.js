import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAppContext from "../Context/UseAppContext";

function AuthUser(){
    const {auth} = useAppContext();
    const location = useLocation();
    return (
        (auth?.loginsuccess)
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location.pathname}} replace></Navigate>
    )
}

export default AuthUser