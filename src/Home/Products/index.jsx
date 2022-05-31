import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiClient from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import SingleProduct from "./SingleProduct";

const Products = () => {
    const { isLoading, error, data } = useQuery(
        "tools",
        async () => (await apiClient("/products?limit=8")).data
    );

    if (isLoading) return <Loading />;

    return (
        <section id="explore" className="container px-4 py-20 mx-auto">
            <h2 className="my-5 text-5xl text-center">Products</h2>
            <div className="grid items-center h-full grid-cols-1 gap-5 justify-evenly sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.products?.map((v) => (
                    <SingleProduct key={v._id} product={v} />
                ))}
            </div>
            <div className="flex items-center justify-center my-4">
                <Link className="btn btn-success" to="/all-products">
                    All Products
                </Link>
            </div>
        </section>
    );
};

export default Products;
