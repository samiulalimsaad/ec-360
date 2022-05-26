import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../firebase.init";
import Loading from "../utilities/Loading";
import useFetch from "../utilities/useFetch";
import AdminNavItems from "./AdminNavItems";
import UsersNavItems from "./UsersNavItems";

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);

    const { data, isLoading, error } = useFetch(
        `/user?email=${user?.email}`,
        user
    );

    if (isLoading || loading) return <Loading />;

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
                                end
                                className={({ isActive }) =>
                                    isActive ? "bg-base-300 font-semibold" : ""
                                }
                                to="/dashboard"
                            >
                                My Profile
                            </NavLink>
                        </li>
                        {data?.user?.role === "admin" ? (
                            <AdminNavItems />
                        ) : (
                            <UsersNavItems />
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
