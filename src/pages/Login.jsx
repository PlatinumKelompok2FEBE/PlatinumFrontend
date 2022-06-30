import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import DangerToast from "../components/toasts/DangerToast";
import { FiArrowLeft } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });
    const [showToast, setShowToast] = useState(false);

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(login({ formValue, navigate }));
    };

    return (
        <>
            {error && <DangerToast show={showToast} message={error.message} />}
            <div className="space-y-8 bg-white p-8 sm:p-14">
                <FiArrowLeft
                    className="h-6 w-6 cursor-pointer sm:hidden"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <div className="text-2xl font-bold">Masuk</div>
                <form onSubmit={onSubmit}>
                    <div className="mb-4 space-y-2">
                        <label className="block">Email</label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                            type="text"
                            name="email"
                            // value={email}
                            placeholder="Contoh: johndee@gmail.com"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-8 space-y-2">
                        <label className="block">Password</label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                            type="password"
                            name="password"
                            // value={password}
                            placeholder="Masukkan password"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button
                        className={className(
                            loading === "pending"
                                ? "flex items-center justify-center gap-2"
                                : "",
                            "w-full rounded-2xl bg-primary-purple-04 py-3 px-4 font-bold text-white hover:bg-primary-purple-05"
                        )}
                        type="submit"
                        onClick={() => {
                            setShowToast(true);
                        }}
                    >
                        {loading === "pending" ? (
                            <>
                                <CgSpinner className="animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <span>Masuk</span>
                        )}
                    </button>
                </form>
                <p className="text-sm">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-primary-purple-04 hover:text-primary-purple-05"
                    >
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;
