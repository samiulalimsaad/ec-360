import React from "react";

const Summary = () => {
    return (
        <section>
            <div className="hero min-h-max ">
                <div className="flex-col hero-content lg:flex-row">
                    <img
                        src="/images/rocket.png"
                        className="rounded-lg sm:max-w-sm animate-pulse"
                    />
                    <div className="text-center hero-content">
                        <div className="max-w-max">
                            <h2 className="text-5xl font-bold">
                                The World's Leading
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-8 my-8 text-3xl font-semibold sm:justify-between sm:flex-nowrap">
                                <span className="text-primary">
                                    500+ Products
                                </span>
                                <span className="text-info">5000+ Reviews</span>
                                <span className="text-error">100+ Country</span>
                                <span className="text-success">
                                    600+ PreOrder
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
