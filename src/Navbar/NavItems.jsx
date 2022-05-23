import React from "react";
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
    return (
        <>
            {items.map((item) => (
                <li key={item.name}>
                    <CustomLink to={item.path}>{item.name}</CustomLink>
                </li>
            ))}
        </>
    );
};

export default NavItems;
