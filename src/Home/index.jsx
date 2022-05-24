import React from "react";
import useTitle from "../utilities/useTitle";
import Banner from "./Banner";
import MemberNow from "./MemberNow";
import Newsletter from "./Newsletter";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <Summary />
            <div className="divider" />
            <Tools />
            <div className="divider" />
            <Reviews />
            <Newsletter />
            <MemberNow />
        </div>
    );
};

export default Home;
