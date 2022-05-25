import React from "react";
import { useQuery } from "react-query";
import apiClient from "../utilities/axios";

const Orders = () => {
    const { isLoading, error, data } = useQuery(
        ["orders"],
        async () => (await apiClient("/orders")).data
    );

    console.log(data);

    return <div>Orders</div>;
};

export default Orders;
