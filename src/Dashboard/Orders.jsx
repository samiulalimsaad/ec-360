import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { GET_URL } from "../utilities/apiClient";
import useFetch from "../utilities/useFetch";
import useTitle from "../utilities/useTitle";
import CancelModal from "./CancelModal";

const Orders = () => {
    useTitle("Manage Product | Dashboard");
    const [productId, setProductId] = useState("");
    const [user, loading, userError] = useAuthState(auth);

    const { data, isLoading, error, refetch } = useFetch(`/orders`, user);

    const deleteProduct = async (id) => {
        try {
            const { data: updatedUser } = await axios.patch(
                GET_URL(`/user/${id}`),
                {
                    role: "admin",
                },
                {
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );
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
            const { data: updatedOrder } = await axios.patch(
                GET_URL(`/orders/${id}?email=${user?.email}`),
                {
                    status: "shipped",
                },
                {
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );
            if (updatedOrder.success) {
                toast.success(updatedOrder.message);
                refetch();
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
