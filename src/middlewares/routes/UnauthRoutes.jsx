import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const UnauthRoutes = () => {
    const location = useLocation()
    const { user } = useSelector((state) => state.auth)
    const from = location.state?.from?.pathname || "/"

    return user ? (
        <Navigate to={from} replace state={{ from: location }} />
    ) : (
        <Outlet />
    )
}

export default UnauthRoutes
