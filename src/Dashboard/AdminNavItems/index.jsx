import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
    return (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-base-300 font-semibold" : ""
                    }
                    to="/dashboard/manage-all-orders"
                >
                    Manage All Orders
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-base-300 font-semibold" : ""
                    }
                    to="/dashboard/add-product"
                >
                    Add a Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-base-300 font-semibold" : ""
                    }
                    to="/dashboard/manage-products"
                >
                    Manage Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-base-300 font-semibold" : ""
                    }
                    to="/dashboard/make-admin"
                >
                    Make Admin
                </NavLink>
            </li>
        </>
    );
};

export default AdminNavItems;
