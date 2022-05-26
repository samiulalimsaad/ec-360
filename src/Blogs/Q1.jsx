import React from "react";

const Q1 = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center my-4">
                How will you improve the performance of a React Application?
            </h3>
            <p>Keeping component state as local instead global.</p>
            <p>use memo for Memoizing components to prevent re-renders.</p>
            <p>using dynamic import()</p>
            <p>using Lazy loading.</p>
            <p>using any caching library like swr, react-query.</p>
        </div>
    );
};

export default Q1;
