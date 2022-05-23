import React from "react";

const data = new Array(4);
data.fill({
    name: "Title",
    rating: 4,
    description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eaque asperiores adipisci incidunt dolorum at debitis provident quia dolores, cum modi praesentium, repellendus minus, amet sapiente ab corporis voluptatum totam!",
});
const Reviews = () => {
    return (
        <section className="container mx-auto">
            <h2 className="text-4xl text-center">Reviews</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((v, i) => (
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
