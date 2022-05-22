import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52"
                    >
                        <NavItems />
                    </ul>
                </div>
                <a className="text-xl normal-case btn btn-ghost">EC-360</a>
            </div>
            <div className="hidden navbar-end lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    <NavItems />
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
