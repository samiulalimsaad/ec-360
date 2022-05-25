import React from "react";
import { useQuery } from "react-query";
import apiClient from "../utilities/axios";
import useTitle from "../utilities/useTitle";

const Orders = () => {
    useTitle("Orders");
    const { isLoading, error, data } = useQuery(
        ["orders"],
        async () => (await apiClient("/orders")).data
    );

    console.log(data);

    return <div>Orders</div>;
};

export default Orders;
