import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, me, refresh } from "../redux/authSlice";

const RequireAuth = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, checkMe, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) dispatch(me(user.accessToken));
        if (checkMe === false) dispatch(refresh());
        if (error) dispatch(logout());
    }, [user, checkMe, error, dispatch]);

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default RequireAuth;
