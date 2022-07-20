import { useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FiLogIn } from "react-icons/fi"
import { me } from "../redux/authSlice"
import MobileMenu from "./MobileMenu"
import Search from "./Search"
import ListDropdown from "./dropdowns/ListDropdown"
import NotificationDropdown from "./dropdowns/NotificationDropdown"
import UserDropdown from "./dropdowns/UserDropdown"
import TitlePerPage from "./TitlePerPage"
import SecondHand from "../images/SecondHand.png"
import { DarkMode } from "../utils/darkMode"

const DesktopMenu = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { user, decodedAccess, profile, loading } = useSelector(
        (state) => state.auth
    )

    

    // const [colorTheme, setTheme] = DarkMode();

    useEffect(() => {
        decodedAccess && dispatch(me(decodedAccess?.id))
    }, [decodedAccess, dispatch])

    return (
        <>
            <div className="flex items-center gap-8">
                <Link
                    className="hidden sm:block"
                    to="/"
                // replace={location.pathname === "/" && { replace: true }}
                >
                    <img className="h-8" src={SecondHand} alt="" />
                </Link>
                <MobileMenu profile={profile} />
                {location.pathname === "/" ? (
                    <div className="hidden sm:block">
                        <Search />
                    </div>
                ) : (
                    <TitlePerPage />
                )}
            </div>
            {location.pathname === "/" && (
                <div className="w-full sm:hidden">
                    <Search />
                </div>
            )}
            <div className="hidden items-center gap-6 sm:flex">
                {user ? (
                    <>
                        {/* <button onClick={() => setTheme(colorTheme)}>
                            {colorTheme === 'light' ?
                                <div className="w-12 bg-red-500">Dark</div>
                                :
                                <div className="w-12 bg-blue-500">Light</div>
                            }
                        </button> */}
                        <div className="p-1 bg-green-500" onClick={() => localStorage.removeItem('theme')}>Dynamic</div>
                        <div className="p-1 bg-red-500" onClick={() => localStorage.theme = 'dark'}>Dark</div>
                        <div className="p-1 bg-blue-500" onClick={() => localStorage.theme = 'light'}>Light</div>
                        <ListDropdown />
                        <NotificationDropdown />
                        <UserDropdown profile={profile} loading={loading} />
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3.5 px-4 font-semibold  text-white hover:bg-primary-purple-05"
                    >
                        <FiLogIn className="h-5 w-5" />
                        <span>Masuk</span>
                    </Link>
                )}
            </div>
        </>
    )
}

export default DesktopMenu
