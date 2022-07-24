import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    getProducts,
    productsSelectors,
    resetOffset,
    setOffset,
} from "../redux/productsSlice"
import Hero from "../components/Hero"
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"
import PaginationButton from "../components/buttons/PaginationButton"
import SellFloatingButton from "../components/buttons/SellFloatingButton"
import ProductSkeleton from "../components/skeletons/ProductSkeleton"
import Product404 from "../components/unfound/Product404"

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const products = useSelector(productsSelectors.selectAll)
    const { keyword, offset, loading } = useSelector((state) => state.products)

    if (searchParams.has("page")) {
        if (Number(searchParams.get("page")) <= 1) {
            // searchParams.delete("page")
            if (searchParams.has("category")) {
                setSearchParams({ category: searchParams.get("category") })
            } else {
                setSearchParams()
            }

            dispatch(resetOffset())
        }
        if (Number(searchParams.get("page")) * 10 - 10 !== offset) {
            dispatch(setOffset(Number(searchParams.get("page"))))
        }
    } else {
        if (Number(searchParams.get("page")) * 10 - 10 !== offset) {
            dispatch(resetOffset())
        }
    }

    useEffect(() => {
        dispatch(
            getProducts({
                keyword,
                category: searchParams.get("category") || "",
                offset,
            })
        )
    }, [keyword, searchParams, offset, dispatch])

    return (
        <>
            <Hero />
            <div className="container mx-auto hidden p-4 sm:block">
                <Category />
            </div>
            {loading === "idle" && <PaginationButton />}
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    {loading === "pending" ? (
                        <ProductSkeleton />
                    ) : (
                        products.map((product) => (
                            <div
                                className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5"
                                key={product.id}
                            >
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    pictures={product.pictures[0]}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            {loading === "idle" && products.length === 0 && <Product404 />}
            <SellFloatingButton />
        </>
    )
}

export default Home
