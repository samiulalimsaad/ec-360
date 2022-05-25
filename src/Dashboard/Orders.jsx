import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import apiClient from "../utilities/apiClient";
import useTitle from "../utilities/useTitle";
import CancelModal from "./CancelModal";

const Orders = () => {
    useTitle("Manage Product | Dashboard");
    const [productId, setProductId] = useState("");
    const [user, loading, userError] = useAuthState(auth);

    const { isLoading, error, data, refetch } = useQuery(
        ["make-admin"],
        async () => (await apiClient("/orders")).data
    );

    const deleteProduct = async (id) => {
        try {
            const { data: updatedUser } = await apiClient.patch(`/user/${id}`, {
                role: "admin",
            });
            if (updatedUser.success) {
                toast.success(updatedUser.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const updateStatus = async (id) => {
        try {
            const { data: updatedOrder } = await apiClient.patch(
                `/orders/${id}?email=${user?.email}`,
                {
                    status: "shipped",
                }
            );
            console.log({ updatedOrder });
            if (updatedOrder.success) {
                toast.success(updatedOrder.message);
                // refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.orders?.reverse()?.map((v, i) => (
                            <tr key={v.id}>
                                <th>{i + 1}</th>
                                <td>{v.name}</td>
                                <td>
                                    {v.status ? (
                                        <span className="text-primary">
                                            paid
                                        </span>
                                    ) : (
                                        <span className="text-error">
                                            unpaid
                                        </span>
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-ghost"
                                        onClick={() => updateStatus(v.id)}
                                    >
                                        {v.status}
                                    </button>
                                </td>
                                <td>
                                    <figure className="overflow-hidden">
                                        <img
                                            className="duration-200 hover:scale-110"
                                            src={v?.image}
                                            alt="Shoes"
                                        />
                                    </figure>
                                </td>
                                <td>
                                    <label
                                        htmlFor="Cancel-Modal"
                                        className="btn btn-success"
                                        // onClick={() => makeAdmin(v._id)}
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CancelModal callback={deleteProduct} />
        </div>
    );
};

export default Orders;
