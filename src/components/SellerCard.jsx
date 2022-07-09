import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBiodata } from "../redux/authSlice";
import AltFoto from "../images/AltFoto.png";

const SellerCard = ({ seller_id, id }) => {
    const dispatch = useDispatch();
    const { bio, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        seller_id && dispatch(getBiodata(seller_id));
    }, [seller_id, dispatch]);

    return (
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 shadow">
            <div className="flex items-center gap-4">
                {loading === "pending" ? (
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-gray"></div>
                ) : (
                    <img
                        src={bio?.picture || AltFoto}
                        alt=""
                        className="h-12 w-12 rounded-xl"
                    />
                )}

                <div className="space-y-1">
                    <div
                        className={
                            loading === "pending"
                                ? "h-3 w-16 animate-pulse rounded-md bg-gray"
                                : ""
                        }
                    >
                        {bio?.name}
                    </div>
                    <div
                        className={
                            loading === "pending"
                                ? "h-2 w-12 animate-pulse rounded-md bg-gray"
                                : "text-xs text-neutral-03"
                        }
                    >
                        {bio?.city}
                    </div>
                </div>
            </div>
            {loading === "pending" ? (
                <></>
            ) : (
                <>
                    {seller_id === id && (
                        <Link
                            to="/user/profile"
                            className="rounded-lg border border-primary-purple-04 bg-white py-1 px-3 text-neutral-05 hover:bg-primary-purple-05 hover:text-white"
                        >
                            Edit
                        </Link>
                    )}
                </>
            )}
        </div>
    );
};

export default SellerCard;
