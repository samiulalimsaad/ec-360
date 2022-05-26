import React from "react";

const Q1 = () => {
    return (
        <div>
            <h3 className="my-4 text-2xl font-semibold text-center">
                How will you improve the performance of a React Application?
            </h3>

            <div className="flex items-center justify-center">
                <ul className="list-decimal">
                    <li>Keeping component state as local instead global.</li>
                    <li>
                        use memo for Memoizing components to prevent re-renders.
                    </li>
                    <li>using dynamic import()</li>
                    <li>using Lazy loading.</li>
                    <li>using any caching library like swr, react-query.</li>
                </ul>
            </div>
        </div>
    );
};

export default Q1;
