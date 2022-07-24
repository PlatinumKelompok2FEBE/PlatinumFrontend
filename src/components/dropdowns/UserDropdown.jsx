import { Fragment } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Menu, Transition } from "@headlessui/react"
import { FiLogOut, FiUser } from "react-icons/fi"
import { logout } from "../../redux/authSlice"
import AltPhoto from "../../images/alts/AltPhoto.png"
import { resetProductState } from "../../redux/productsSlice"
import { classNameJoin } from "../../utils/classNameJoin"

const UserDropdown = ({ profile, loading }) => {
    const dispatch = useDispatch()

    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            {({ open }) => (
                <>
                    {loading === "pending" ? (
                        <div className="h-6 w-6 animate-pulse rounded bg-smoke dark:bg-zinc-800"></div>
                    ) : (
                        <Menu.Button
                            className={classNameJoin(
                                open
                                    ? "text-primary-purple-04"
                                    : "dark:text-white",
                                "flex justify-center hover:text-primary-purple-05 focus:outline-none dark:hover:text-primary-purple-03"
                            )}
                        >
                            <FiUser className="h-6 w-6" />
                        </Menu.Button>
                    )}

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-5 w-56 overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-zinc-900 dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-10">
                            <Menu.Item as="div" className="space-y-4 p-4">
                                {({ active }) => (
                                    <>
                                        <Link
                                            to="/user"
                                            className="flex w-full items-center gap-2.5 rounded-md p-2 shadow dark:shadow-zinc-800"
                                        >
                                            {loading === "pending" ? (
                                                <>
                                                    <div className="h-8 w-8 animate-pulse rounded bg-smoke dark:bg-zinc-800"></div>
                                                    <span className="h-3 w-24 animate-pulse rounded bg-smoke dark:bg-zinc-800"></span>
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        className="h-8 w-8 rounded-full object-cover object-center"
                                                        src={
                                                            profile?.picture ||
                                                            AltPhoto
                                                        }
                                                        alt=""
                                                    />
                                                    <span className="truncate text-lg font-medium dark:text-white">
                                                        {profile?.name}
                                                    </span>
                                                </>
                                            )}
                                        </Link>
                                        <button
                                            className={classNameJoin(
                                                active &&
                                                    "hover:text-primary-purple-05 dark:hover:text-primary-purple-03",
                                                "flex w-full items-center gap-2 text-sm dark:text-white"
                                            )}
                                            onClick={() => {
                                                dispatch(logout())
                                                dispatch(resetProductState())
                                            }}
                                        >
                                            <FiLogOut />
                                            <span>Logout</span>
                                        </button>
                                    </>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

export default UserDropdown
