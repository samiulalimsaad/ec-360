import React from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";

const Blogs = () => {
    return (
        <div className="p-10 space-y-8">
            <h2 className="text-4xl font-semibold text-center">Blogs</h2>
            <div className="divider"></div>
            <Q1 />
            <div className="divider"></div>
            <Q2 />
            <div className="divider"></div>
            <Q3 />
            <div className="divider"></div>
            <Q4 />
            <div className="divider"></div>
            <Q5 />
            <div className="divider"></div>
            <Q6 />
        </div>
    );
};

export default Blogs;
