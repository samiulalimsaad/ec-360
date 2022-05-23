import React from "react";
import useTitle from "../utilities/useTitle";
import Banner from "./Banner";
import Tools from "./Tools";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <Tools />
        </div>
    );
};

export default Home;
