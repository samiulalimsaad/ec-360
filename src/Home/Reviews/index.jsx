import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiClient from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import SingleReview from "./SingleReview";

const Reviews = () => {
    const { isLoading, error, data } = useQuery(
        "review",
        async () => (await apiClient("/reviews?limit=6")).data
    );

    if (isLoading) return <Loading />;

    return (
        <section className="container py-20 mx-auto">
            <h2 className="mb-10 text-4xl text-center">Reviews</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {data?.review?.map((v) => (
                    <SingleReview key={v._id} review={v} />
                ))}
            </div>
            <div className="flex items-center justify-center my-4">
                <Link className="btn btn-success" to="/all-reviews">
                    All Reviews
                </Link>
            </div>
        </section>
    );
};

export default Reviews;
