import React from "react";
import { useQuery } from "react-query";
import apiClient from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useTitle from "../../utilities/useTitle";
import SingleReview from "./SingleReview";

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
                    <SingleReview key={v._id} review={v} />
                ))}
            </div>
        </section>
    );
};

export default AllReviews;
