import React from "react";
import { Link } from "react-router-dom";

const MemberNow = () => {
    return (
        <div
            className="min-h-screen hero"
            style={{ backgroundImage: "url('/images/member-section.jpg')" }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h4 className="mb-5 text-2xl font-bold">
                        Make Your life Easy Way with EC360
                    </h4>
                    <Link to="login" className="btn btn-info">
                        Become a member
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MemberNow;
