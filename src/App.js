import { BrowserRouter, Routes, Route } from "react-router-dom"
// layouts
import Main from "./layouts/Main"
import Auth from "./layouts/Auth"
// pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import UserProfile from "./pages/UserProfile"
import EditProduct from "./pages/EditProduct"
import Notification from "./pages/Notification"
import PreviewProduct from "./pages/PreviewProduct"
import AddProduct from "./pages/AddProduct"
import EditProfile from "./pages/EditProfile"
import ManageProduct from "./pages/ManageProduct"
import InfoPenawar from "./pages/InfoPenawar"
import DetailProduct from "./pages/DetailProduct"
import Error from "./pages/404"
// middlewares
import PublicRoutes from "./middlewares/routes/PublicRoutes"
import AuthRoutes from "./middlewares/routes/AuthRoutes"
import UnauthRoutes from "./middlewares/routes/UnauthRoutes"
// misc
import Topbar from "./components/Topbar"
import AllProduct from "./components/AllProduct"
import Wishlisted from "./components/Wishlisted"
import Sold from "./components/Sold"
import Wishlist from "./components/Wishlist"
import Purchase from "./components/Purchase"
import ProfileMenu from "./components/ProfileMenu"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import { DarkMode } from "./utils/darkMode"

function App() {
    DarkMode();

    return (
        <BrowserRouter>
            <Routes>
                {/* publicRoutes */}
                <Route element={<PublicRoutes />}>
                    <Route path="*" element={<Error />} />
                    <Route element={<Main />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/product/:productId"
                            element={<DetailProduct />}
                        />
                    </Route>
                </Route>

                {/* authRoutes */}
                <Route element={<AuthRoutes />}>
                    <Route element={<Main />}>
                        <Route
                            path="/manage-product"
                            element={<ManageProduct />}
                        >
                            <Route index element={<AllProduct />} />
                            <Route path="wishlisted" element={<Wishlisted />} />
                            <Route path="sold" element={<Sold />} />
                        </Route>
                        <Route element={<UserProfile />}>
                            <Route path="user" element={<ProfileMenu />} />
                            <Route
                                path="/user/order-list"
                                element={<Purchase />}
                            />
                            <Route
                                path="/user/wishlist"
                                element={<Wishlist />}
                            />
                        </Route>
                        <Route
                            path="/notification"
                            element={<Notification />}
                        />
                    </Route>
                    <Route element={<Topbar />}>
                        <Route
                            path="/manage-product/add"
                            element={<AddProduct />}
                        />
                        <Route
                            path="/manage-product/edit/:productId"
                            element={<EditProduct />}
                        />
                        <Route
                            path="/manage-product/preview/:productId"
                            element={<PreviewProduct />}
                        />
                        <Route path="/user/profile" element={<EditProfile />} />
                        <Route
                            path="/user/infopenawar"
                            element={<InfoPenawar />}
                        />
                    </Route>
                </Route>

                {/* unauthRoutes */}
                <Route element={<UnauthRoutes />}>
                    <Route element={<Auth />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
