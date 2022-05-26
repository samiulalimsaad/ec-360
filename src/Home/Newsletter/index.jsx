import React from "react";

const Newsletter = () => {
    return (
        <section className="py-8 bg-sky-200 hero text-sky-900">
            <div className="flex-row items-center justify-center block sm:flex hero-content">
                <div className="text-center sm:w-1/2 lg:text-left">
                    <h1 className="text-3xl font-bold text-center sm:text-5xl">
                        Subscribe now for Newsletter
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="max-w-sm sm:w-full sm:flex-shrink-0 card">
                    <div className="flex-row items-center justify-center block sm:flex card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="mt-2 sm:mt-0 form-control">
                            <button className="btn bg-sky-900">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
