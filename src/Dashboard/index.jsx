import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input
                    id="side-panel"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="side-panel"
                        className="drawer-overlay"
                    ></label>
                    <ul className="p-4 overflow-y-auto menu w-80 bg-sky-100 text-base-content">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "bg-base-300 font-semibold" : ""
                                }
                                to="/dashboard"
                            >
                                My Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "bg-base-300 font-semibold" : ""
                                }
                                to="/dashboard/orders"
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
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
