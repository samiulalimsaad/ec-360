import React from "react";
import { Link } from "react-router-dom";

const data = [
    {
        _id: 1,
        title: "Title",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo debitis error officiis rerum vitae voluptatem eaque omnis, ut facere perferendis voluptates ipsam pariatur totam autem ipsa eos placeat dignissimos.",
    },
    {
        _id: 2,
        title: "Title",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo debitis error officiis rerum vitae voluptatem eaque omnis, ut facere perferendis voluptates ipsam pariatur totam autem ipsa eos placeat dignissimos.",
    },
    {
        _id: 3,
        title: "Title",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo debitis error officiis rerum vitae voluptatem eaque omnis, ut facere perferendis voluptates ipsam pariatur totam autem ipsa eos placeat dignissimos.",
    },
    {
        _id: 4,
        title: "Title",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo debitis error officiis rerum vitae voluptatem eaque omnis, ut facere perferendis voluptates ipsam pariatur totam autem ipsa eos placeat dignissimos.",
    },
    {
        _id: 5,
        title: "Title",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo debitis error officiis rerum vitae voluptatem eaque omnis, ut facere perferendis voluptates ipsam pariatur totam autem ipsa eos placeat dignissimos.",
    },
    {
        _id: 6,
        title: "Title",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo debitis error officiis rerum vitae voluptatem eaque omnis, ut facere perferendis voluptates ipsam pariatur totam autem ipsa eos placeat dignissimos.",
    },
];

const Tools = () => {
    return (
        <section className="container px-4 py-20 mx-auto">
            <h2 className="my-5 text-5xl text-center">Tools</h2>
            <div className="grid items-center grid-cols-1 gap-5 justify-evenly sm:grid-cols-2 md:grid-cols-3">
                {data.map((v) => (
                    <div
                        key={v._id}
                        className="shadow-xl card card-compact bg-base-100 justify-self-center"
                    >
                        <figure>
                            <img
                                src="https://api.lorem.space/image/shoes?w=400&h=225"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{v.title}</h2>
                            <p>{v.description}</p>
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
