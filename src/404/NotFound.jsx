import React from "react";
import useTitle from "../utilities/useTitle";

const NotFound = () => {
    useTitle("404");
    return (
        <section className="flex items-center justify-center h-screen font-extrabold text-info sm:text-9xl">
            404 Not Found
        </section>
    );
};

export default NotFound;
