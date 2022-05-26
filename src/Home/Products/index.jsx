import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiClient from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";

const Products = () => {
    const { isLoading, error, data } = useQuery(
        "tools",
        async () => (await apiClient("/products?limit=6")).data
    );

    if (isLoading) return <Loading />;

    return (
        <section id="explore" className="container px-4 py-20 mx-auto">
            <h2 className="my-5 text-5xl text-center">Products</h2>
            <div className="grid items-center h-full grid-cols-1 gap-5 justify-evenly sm:grid-cols-2 md:grid-cols-3">
                {data?.products?.map((v) => (
                    <div
                        key={v._id}
                        className="w-full h-full shadow-xl card card-compact bg-base-100 justify-self-center "
                    >
                        <figure className="flex items-center justify-center overflow-hidden h-72">
                            <img
                                className="duration-200 hover:scale-110"
                                src={
                                    v?.image
                                        ? v.image
                                        : "https://api.lorem.space/image/shoes?w=400&h=225"
                                }
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{v.name}</h2>
                            <p className="text-2xl text-slate-700">
                                ${v.price}
                            </p>
                            <div className="flex items-center justify-between text-xl text-slate-700">
                                <span>min : {v.minOrderQuantity}</span>
                                <span>available : {v.availableQuantity}</span>
                            </div>
                            <p className="line-clamp-5 text-slate-700">
                                {v.description}
                            </p>
                            <div className="justify-center card-actions">
                                <Link
                                    to={`/purchase/${v._id}`}
                                    className="w-full btn btn-info"
                                >
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
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
