import React from "react";
import { useQuery } from "react-query";
import apiClient from "../utilities/axios";

const Reviews = () => {
    const { isLoading, error, data } = useQuery(
        "review",
        async () => (await apiClient("/reviews")).data
    );
    return (
        <section className="container py-20 mx-auto">
            <h2 className="mb-10 text-4xl text-center">Reviews</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.review?.map((v, i) => (
                    <div key={i} className="shadow-xl card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{v.name}</h2>
                            <p>{v.description}</p>
                            <div className="card-actions">
                                <div className="rating">
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="bg-orange-400 mask mask-star-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="bg-orange-400 mask mask-star-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="bg-orange-400 mask mask-star-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="bg-orange-400 mask mask-star-2"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="bg-orange-400 mask mask-star-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
