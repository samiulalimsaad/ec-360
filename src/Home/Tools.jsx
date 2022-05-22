import React from "react";

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
        <div className="container py-20 mx-auto">
            <h2 className="my-5 text-5xl text-center">Tools</h2>
            <div className="grid items-center justify-center grid-cols-3 gap-8">
                {data.map((v) => (
                    <div
                        key={v._id}
                        className="shadow-xl card card-compact w-96 bg-base-100 justify-self-center"
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
                                <button className="btn btn-ghost">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
