import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input
                    id="side-panel"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="flex flex-col items-center justify-center drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="side-panel"
                        className="drawer-overlay"
                    ></label>
                    <ul className="p-4 overflow-y-auto menu w-80 bg-sky-100 text-base-content">
                        <li>
                            <Link to="/dashboard">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/orders">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/add-review">Add a Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
