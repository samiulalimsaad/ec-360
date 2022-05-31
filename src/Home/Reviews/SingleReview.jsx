import React from "react";

const SingleReview = ({ review }) => {
    return (
        <div className="card bg-base-100">
            <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.description}</p>
                <div className="card-actions">
                    <div className="rating">
                        {new Array(review.rating).fill(
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
    );
};

export default SingleReview;
