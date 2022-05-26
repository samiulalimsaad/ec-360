import React from "react";

const products = [
    { name: "aaa", description: "aaa" },
    { name: "bb", description: "ff" },
    { name: "cc", description: "ff" },
    { name: "dd", description: "ff" },
    { name: "ee", description: "ff" },
    { name: "ff", description: "ff" },
];

const Q5 = () => {
    const a = products.find((v) => v.name === "aaa");
    return (
        <div>
            <h3 className="my-4 text-2xl font-semibold text-center">
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
            </h3>
            <div>const a = products.find((v) => v.name === "name")</div>
        </div>
    );
};

export default Q5;
