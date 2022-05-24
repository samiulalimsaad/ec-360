import React from "react";
import useTitle from "../utilities/useTitle";

const Loading = () => {
    useTitle("Loading");
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center h-full animate-bounce">
                <h2 className="my-4 text-6xl text-center text-sky-500">
                    Loading
                </h2>
                <div className="flex items-center justify-center ml-2 space-x-2">
                    <div className="w-6 h-6 rounded-full bg-sky-700" />
                    <div className="w-6 h-6 rounded-full bg-sky-700" />
                    <div className="w-6 h-6 rounded-full bg-sky-700" />
                </div>
            </div>
        </div>
    );
};

export default Loading;
