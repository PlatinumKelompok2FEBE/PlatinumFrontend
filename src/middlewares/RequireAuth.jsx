import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default RequireAuth;
