import React from "react";
import { useQuery } from "react-query";
import apiClient from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useTitle from "../../utilities/useTitle";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
    useTitle("All Products");
    const { isLoading, error, data } = useQuery(
        "AllProducts",
        async () => (await apiClient("/products")).data
    );

    if (isLoading) return <Loading />;

    return (
        <section id="explore" className="container px-4 py-20 mx-auto">
            <h2 className="my-5 text-5xl text-center">AllProducts</h2>
            <div className="grid items-center h-full grid-cols-1 gap-5 justify-evenly sm:grid-cols-2 md:grid-cols-3">
                {[...data?.products]?.reverse()?.map((v) => (
                    <SingleProduct key={v._id} product={v} />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
