import React from "react";
import useTitle from "../utilities/useTitle";
import Banner from "./Banner";
import MemberNow from "./MemberNow";
import Newsletter from "./Newsletter";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
    useTitle("Home");
    return (
        <section>
            <Banner />
            <Summary />
            <div className="divider" />
            <Products />
            <div className="divider" />
            <Reviews />
            <Newsletter />
            <MemberNow />
        </section>
    );
};

export default Home;
