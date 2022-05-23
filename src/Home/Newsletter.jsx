import React from "react";

const Newsletter = () => {
    return (
        <div className="py-8 bg-sky-200 hero text-sky-900">
            <div className="flex flex-row items-center justify-center hero-content">
                <div className="w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">
                        Subscribe now for Newsletter
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm card ">
                    <div className="flex flex-row items-center justify-center card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-sky-900">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
