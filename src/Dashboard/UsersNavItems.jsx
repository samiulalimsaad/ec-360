import React from "react";
import { NavLink } from "react-router-dom";

const UsersNavItems = () => {
    return (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-base-300 font-semibold" : ""
                    }
                    to="/dashboard/my-orders"
                >
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-base-300 font-semibold" : ""
                    }
                    to="/dashboard/add-review"
                >
                    Add a Review
                </NavLink>
            </li>
        </>
    );
};

export default UsersNavItems;
