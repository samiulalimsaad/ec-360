import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiClient from "../utilities/axios";

const Tools = () => {
    const { isLoading, error, data } = useQuery(
        "tools",
        async () => (await apiClient("/products")).data
    );

    return (
        <section id="explore" className="container px-4 py-20 mx-auto">
            <h2 className="my-5 text-5xl text-center">Tools</h2>
            <div className="grid items-center h-full grid-cols-1 gap-5 justify-evenly sm:grid-cols-2 md:grid-cols-3">
                {data?.products?.map((v) => (
                    <div
                        key={v._id}
                        className="w-full h-full shadow-xl card card-compact bg-base-100 justify-self-center "
                    >
                        <figure className="overflow-hidden">
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
                            <div className="flex text-xl justify-evenly text-slate-700">
                                <p>min:{v.minOrderQuantity}</p>
                                <p>available{v.availableQuantity}</p>
                            </div>
                            <p className="text-slate-700">{v.description}</p>
                            <div className="justify-center card-actions">
                                <Link
                                    to={`/purchase/${v._id}`}
                                    className="btn btn-ghost"
                                >
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
