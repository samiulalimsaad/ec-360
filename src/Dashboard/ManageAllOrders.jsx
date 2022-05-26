import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import apiClient from "../utilities/apiClient";
import Loading from "../utilities/Loading";
import useTitle from "../utilities/useTitle";
import CancelModal from "./CancelModal";

const ManageAllOrders = () => {
    useTitle("Manage All Order | Dashboard");

    const [productId, setProductId] = useState("");

    const [user, loading, userError] = useAuthState(auth);

    const { isLoading, error, data, refetch } = useQuery(
        ["my-orders", user],
        async () => (await apiClient(`/orders`)).data
    );

    const cancelProduct = async () => {
        try {
            const { data } = await apiClient.delete(`/orders/${productId}`);
            if (data.success) {
                toast.success("Order Canceled Successfully");
                refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (isLoading || loading) return <Loading />;

    console.log(data);
    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.orders?.map((v, i) => (
                            <tr key={v._id}>
                                <th>{i + 1}</th>
                                <td>{v.name}</td>
                                <td>{v.price}</td>
                                <td>{v.quantity}</td>
                                <td>
                                    {v.paid ? (
                                        <button className="btn btn-ghost text-success">
                                            Paid
                                        </button>
                                    ) : (
                                        <div className="flex gap-2">
                                            <label
                                                htmlFor="Cancel-Modal"
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    setProductId(v._id)
                                                }
                                            >
                                                Cancel
                                            </label>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CancelModal callback={cancelProduct} />
        </div>
    );
};

export default ManageAllOrders;
