import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ScrollingCarousel } from "@trendyol-js/react-carousel"
import { FiSearch } from "react-icons/fi"
import { fetchCategories } from "../redux/categoriesSlice"
import { classNameJoin } from "../utils/classNameJoin"
import CategorySkeleton from "./skeletons/CategorySkeleton"

const Category = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const { categories, loading } = useSelector((state) => state.categories)
    const [cat, setCat] = useState([])

    const onClick = (query) => {
        setSearchParams(query ? { category: query } : "")
    }

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    useEffect(() => {
        categories && setCat(categories)
    }, [categories])

    return (
        <>
            <div className="mb-4 font-medium dark:text-white sm:font-bold">
                Telusuri Kategori
            </div>
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                {loading === "pending" ? (
                    <CategorySkeleton />
                ) : (
                    <>
                        <div
                            className={classNameJoin(
                                !searchParams.get("category")
                                    ? "bg-primary-purple-04 text-white"
                                    : "bg-primary-purple-01 hover:text-white",
                                "flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                            )}
                            onClick={() => {
                                onClick("")
                            }}
                        >
                            <FiSearch />
                            <span>Semua</span>
                        </div>
                        {cat.map((cat) => (
                            <div
                                key={cat}
                                className={classNameJoin(
                                    searchParams
                                        .get("category")
                                        ?.toLowerCase() === cat?.toLowerCase()
                                        ? "bg-primary-purple-04 text-white"
                                        : "bg-primary-purple-01 hover:text-white",
                                    "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                                )}
                                onClick={() => {
                                    onClick(cat)
                                }}
                            >
                                <FiSearch />
                                <span>{cat}</span>
                            </div>
                        ))}
                    </>
                )}
            </ScrollingCarousel>
        </>
    )
}

export default Category
