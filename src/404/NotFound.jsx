import React from "react";
import useTitle from "../utilities/useTitle";

const NotFound = () => {
    useTitle("404");
    return (
        <div className="flex items-center justify-center h-screen font-extrabold text-info sm:text-9xl">
            404 Not Found
        </div>
    );
};

export default NotFound;
