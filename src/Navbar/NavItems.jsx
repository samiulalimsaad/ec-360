import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import CustomLink from "../utilities/CustomLink";

const items = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "blogs",
        path: "/blogs",
    },
    {
        name: "dashboard",
        path: "/dashboard",
    },
];

const NavItems = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) return null;

    return (
        <>
            {items.map((item) => (
                <li key={item.name}>
                    <CustomLink to={item.path}>{item.name}</CustomLink>
                </li>
            ))}
            {user ? (
                <button className="btn btn-ghost" onClick={() => signOut(auth)}>
                    Logout
                </button>
            ) : (
                <>
                    <li>
                        <CustomLink to="login">Login</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="signup">Signup</CustomLink>
                    </li>
                </>
            )}
        </>
    );
};

export default NavItems;
