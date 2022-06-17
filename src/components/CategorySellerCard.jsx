import { Link } from "react-router-dom";
import { FiBox, FiDollarSign, FiHeart } from "react-icons/fi";

const CategorySellerCard = () => {
    return (
        <div className="mt-4 hidden h-fit rounded-2xl border border-neutral-200 p-6 shadow-md sm:block">
            <div className="mb-6 font-medium">Kategori</div>
            <Link
                to="/manage-product"
                className="flex cursor-pointer items-center gap-2 text-primary-purple-04"
            >
                <FiBox />
                <span>Semua Produk</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link
                to="wishlisted"
                className="flex cursor-pointer items-center gap-2"
            >
                <FiHeart />
                <span>Diminati</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link to="sold" className="flex cursor-pointer items-center gap-2">
                <FiDollarSign />
                <span>Terjual</span>
            </Link>
        </div>
    );
};

export default CategorySellerCard;