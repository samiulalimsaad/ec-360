import React from "react";
import { useQuery } from "react-query";
import apiClient from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useTitle from "../../utilities/useTitle";

const AllReviews = () => {
    useTitle("All Reviews");
    const { isLoading, error, data } = useQuery(
        "review",
        async () => (await apiClient("/reviews")).data
    );

    if (isLoading) return <Loading />;

    return (
        <section className="container py-20 mx-auto">
            <h2 className="mb-10 text-4xl text-center">AllReviews</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...data?.review]?.reverse()?.map((v, i) => (
                    <div key={i} className="shadow-xl card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{v.name}</h2>
                            <p>{v.description}</p>
                            <div className="card-actions">
                                <div className="rating">
                                    {new Array(v.rating).fill(
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="bg-orange-400 mask mask-star-2"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllReviews;
