import React from "react";

const Banner = () => {
    return (
        <section
            className="min-h-screen hero"
            style={{
                backgroundImage: "url(/images/banner.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">EC-360 World</h1>
                    <p className="flex flex-wrap items-center justify-center gap-2 mb-5 text-3xl">
                        <span className="font-black text-info">Factory</span>
                        <span className="font-black text-error">Supplier</span>
                        <span className="font-black text-secondary">
                            Trending Company
                        </span>
                    </p>
                    <a href="#explore" className="btn btn-info">
                        Explore More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
