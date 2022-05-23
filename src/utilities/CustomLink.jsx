import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `btn btn-link
                ${
                    isActive
                        ? "btn-active text-primary decoration-transparent"
                        : ""
                }`
            }
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default CustomLink;
